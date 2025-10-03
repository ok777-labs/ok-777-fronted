import React, { useState } from 'react'
import { X, CheckCircle } from 'lucide-react'
import { useBottomBar } from '@/context/BottomBarProvider'

interface NotificationData {
  id: string
  date: string
  title: string
  content: string
  isNew: boolean
  isRead: boolean
}

const notifications: NotificationData[] = [
  {
    id: '1',
    date: 'Finishes on July 23, 2025',
    title: 'First Deposit 150% Activity Rules',
    content: `The 150% first deposit promotion is not allowed to be used in Texas Hold'em games.

If it is discovered that users participating in this activity are placing bets on Texas Hold'em, the platform has the right to deduct the balance in the account without further notice.

Please be aware of and abide by the activity rules. Thank you for your understanding and cooperation! The final right of interpretation belongs to our company!`,
    isNew: true,
    isRead: false,
  },
  {
    id: '2',
    date: 'Finishes on July 23, 2025',
    title: "Texas Hold'em Poker is officially launched!",
    content: `[Texas Hold'em] Now available!

Luck and wisdom coexist, strategy and courage collide

Real matches, real-time start, authentic Texas Hold'em experience! Join Texas Hold'em now and start your own winning game!

Good luck!`,
    isNew: true,
    isRead: false,
  },
  {
    id: '3',
    date: 'Finishes on July 23, 2025',
    title:
      'Important notice: This platform does not support contract address betting',
    content: `This platform does not support contract address betting, and no rewards will be returned even if bets are placed

If you have any questions, please contact our online customer service in time, we will answer and assist you as soon as possible. Thank you for your understanding and support!`,
    isNew: true,
    isRead: false,
  },
]
interface NotificationPanelProps {
  onClose: () => void
}
const NotificationsPanel: React.FC<NotificationPanelProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<
    'Platform' | 'Events' | 'Personal'
  >('Platform')
  const [notificationsList, setNotificationsList] =
    useState<NotificationData[]>(notifications)
  const { isHidden: isBottomBarHidden } = useBottomBar()

  const markAsRead = (id: string) => {
    setNotificationsList(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotificationsList(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    )
  }

  const platformCount = notificationsList.filter(n => !n.isRead).length

  return (
    <div className="relative flex h-full w-full flex-col bg-[#111923]/[0.54] lg:rounded-t-[30px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-700 bg-gradient-to-b from-[#002554] to-[rgba(17,25,35,0.54)] p-4 pl-6 lg:rounded-t-[30px]">
        <h1 className="text-lg font-bold text-white">Notifications</h1>
        <div
          onClick={onClose}
          className="ml-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-[#434444] transition-colors hover:bg-[#111923] lg:ml-0"
        >
          <span>
            <X className="h-4 w-4 text-white" />
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col overflow-hidden bg-[#111923] p-4 pt-0">
        {/* Segmented Control */}
        <div className="mb-4 mt-4 flex rounded-xl bg-gray-800 p-1">
          <div
            onClick={() => setActiveTab('Platform')}
            className={`flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-3 text-sm font-bold transition-colors ${
              activeTab === 'Platform'
                ? 'bg-gray-700 text-white'
                : 'hover:bg-gray-700/50 text-gray-400 hover:text-white'
            }`}
          >
            <span>Platform</span>
            {activeTab === 'Platform' && platformCount > 0 && (
              <span className="flex h-5 items-center justify-center rounded-md border border-white bg-green-500 px-1.5 text-xs font-bold text-white">
                {platformCount}
              </span>
            )}
          </div>
          <div
            onClick={() => setActiveTab('Events')}
            className={`flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-3 text-sm font-bold transition-colors ${
              activeTab === 'Events'
                ? 'bg-gray-700 text-white'
                : 'hover:bg-gray-700/50 text-gray-400 hover:text-white'
            }`}
          >
            <span>Events</span>
          </div>
          <div
            onClick={() => setActiveTab('Personal')}
            className={`flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-3 text-sm font-bold transition-colors ${
              activeTab === 'Personal'
                ? 'bg-gray-700 text-white'
                : 'hover:bg-gray-700/50 text-gray-400 hover:text-white'
            }`}
          >
            <span>Personal</span>
          </div>
        </div>

        {/* Content based on active tab */}
        <div
          className={`scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent flex-1 overflow-y-auto`}
        >
          {activeTab === 'Platform' && (
            <div className="space-y-3">
              {notificationsList.map(notification => (
                <div
                  key={notification.id}
                  className="rounded-xl bg-[#1A222E] p-4"
                >
                  {/* Header */}
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <span className="text-sm font-normal text-gray-400">
                      {notification.date}
                    </span>
                    {notification.isNew && (
                      <span className="flex h-5 shrink-0 items-center justify-center rounded-2xl border border-white bg-green-500 px-2 text-xs font-bold text-white">
                        New
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="mb-2">
                    <h3 className="text-base font-bold leading-normal text-white">
                      {notification.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <p className="whitespace-pre-line text-sm font-normal leading-relaxed text-gray-400">
                      {notification.content}
                    </p>
                  </div>

                  {/* Mark as read button */}
                  <div
                    onClick={() => markAsRead(notification.id)}
                    className={`flex h-9 cursor-pointer items-center gap-2 rounded-lg bg-gray-800 px-4 transition-opacity ${
                      notification.isRead
                        ? 'cursor-not-allowed opacity-50'
                        : 'hover:opacity-80'
                    }`}
                    style={{
                      pointerEvents: notification.isRead ? 'none' : 'auto',
                    }}
                  >
                    <span className="text-sm font-bold text-white">
                      Mark as read
                    </span>
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Events' && (
            <div className="space-y-3">
              <div className="rounded-xl bg-[#1A222E] p-4">
                <h3 className="mb-2 text-base font-bold text-white">
                  Upcoming Events
                </h3>
                <p className="text-sm text-gray-400">
                  No upcoming events at the moment.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'Personal' && (
            <div className="space-y-3">
              <div className="rounded-xl bg-[#1A222E] p-4">
                <h3 className="mb-2 text-base font-bold text-white">
                  Personal Notifications
                </h3>
                <p className="text-sm text-gray-400">
                  No personal notifications available.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Menu - Fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700 bg-[#111923] p-2 lg:rounded-b-[30px]">
        <div
          onClick={markAllAsRead}
          className="flex h-9 w-full cursor-pointer items-center justify-center gap-2 px-4 transition-opacity hover:opacity-80"
        >
          <span className="text-sm font-bold text-gray-400">
            Mark all as read
          </span>
          <CheckCircle className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  )
}

export default NotificationsPanel
