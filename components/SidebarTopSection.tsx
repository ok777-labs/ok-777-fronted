import React from 'react'
import { TopButton } from './sidebar-data'

interface SidebarTopSectionProps {
  isCollapsed: boolean
  topButtons: TopButton[]
}

const SidebarTopSection: React.FC<SidebarTopSectionProps> = ({
  isCollapsed,
  topButtons,
}) => {
  return (
    <div className={`p-4 pb-0 ${isCollapsed ? 'px-2' : ''}`}>
      <div className={`flex gap-2 ${isCollapsed ? 'flex-col' : ''}`}>
        {topButtons.map(button => (
          <div
            key={button.label}
            className={`${
              isCollapsed ? 'mb-2 w-full' : 'flex-1'
            } w-12 cursor-pointer ${
              button.active
                ? 'bg-gray-700 text-white'
                : 'bg-transparent text-gray-400 hover:bg-gray-700 active:bg-gray-700'
            } flex items-center justify-center gap-2 rounded-lg p-3 font-medium transition-colors`}
            style={button.active ? { background: '#374151' } : {}}
            onClick={button.onClick}
          >
            <img src={button.icon} className="h-5 w-5" alt={button.label} />
            {!isCollapsed && (
              <span className="text-sm font-bold">{button.label}</span>
            )}
          </div>
        ))}
      </div>
      <div className="relative mx-auto mt-5 h-[1px] w-full bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
    </div>
  )
}

export default SidebarTopSection
