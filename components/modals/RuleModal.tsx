'use client'

import { useState } from 'react'
import ModalContainer from './ModalContainer'
import { Button, UnifiedButton } from '../ui'
import { useI18n } from '../../context/I18nProvider'

interface RuleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RuleModal({ isOpen, onClose }: RuleModalProps) {
  const [activeTab, setActiveTab] = useState<
    'hash-size' | 'hash-odd-even' | 'lucky-hash'
  >('hash-size')
  const { t } = useI18n()

  const tabs = [
    { id: 'hash-size', label: t('rules.hashSize') },
    { id: 'hash-odd-even', label: t('rules.hashOddEven') },
    { id: 'lucky-hash', label: t('rules.luckyHash') },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'hash-size':
        return (
          <div className="space-y-6">
            {/* Value rules section */}
            <div className="rounded-xl bg-[#ffffff0a] p-4">
              <h3 className="mb-3 text-lg font-bold text-white">
                {t('rules.valueRules')}
              </h3>
              <div className="space-y-2 text-sm leading-relaxed text-white">
                <p>
                  <span>
                    The game uses <span className="text-cyan-400">TRX</span>{' '}
                    blockchain's{' '}
                    <span className="text-cyan-400">block hash</span> as the
                    random number source.{' '}
                    <span className="text-cyan-400">(ignoring letters)</span>
                  </span>
                </p>
                <p>
                  <span>
                    Each block hash is a 64-character hexadecimal string. We
                    extract the last 8 characters{' '}
                    <span className="text-cyan-400">(ignoring letters)</span>{' '}
                    and convert them to decimal numbers.
                  </span>
                </p>
              </div>
            </div>

            {/* Wallet A section */}
            <div className="rounded-xl bg-[#ffffff0a] p-4">
              <h3 className="mb-3 text-lg font-bold text-white">
                <span>Wallet A</span>
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value="TP4KGac4W7oKYuXgfUcZVm7..."
                  readOnly
                  className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white"
                />

                <UnifiedButton variant="primary" className="h-12 px-4">
                  <span className="text-xs font-bold">
                    <span>Query</span>
                  </span>
                </UnifiedButton>
              </div>
            </div>

            {/* Wallet B section */}
            <div className="rounded-xl bg-[#ffffff0a] p-4">
              <h3 className="mb-3 text-lg font-bold text-white">
                <span>Wallet B</span>
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value="TP4KGac4W7oKYuXgfUcZVm7..."
                  readOnly
                  className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white"
                />
                <UnifiedButton variant="primary" className="h-12 px-4">
                  <span className="text-xs font-bold">
                    <span>Query</span>
                  </span>
                </UnifiedButton>
              </div>
            </div>

            {/* Game rules section */}
            <div className="rounded-xl bg-[#ffffff0a] p-4">
              <h3 className="mb-3 text-lg font-bold text-white">
                <span>Game rules</span>
              </h3>
              <div className="space-y-2 text-sm leading-relaxed text-white">
                <p>
                  <span>
                    The game uses <span className="text-cyan-400">TRX</span>{' '}
                    blockchain's{' '}
                    <span className="text-cyan-400">block hash</span> as the
                    random number source.{' '}
                    <span className="text-cyan-400">(ignoring letters)</span>
                  </span>
                </p>
                <p>
                  Players can bet on various outcomes based on the extracted
                  numbers from the block hash.
                </p>
              </div>
            </div>

            {/* Rules of the game section */}
            <div className="rounded-xl bg-[#ffffff0a] p-4">
              <h3 className="mb-3 text-lg font-bold text-white">
                <span>Rules of the game</span>
              </h3>
              <div className="space-y-2 text-sm text-white">
                <div className="flex gap-2">
                  <span className="font-medium text-cyan-400">1.</span>
                  <p>
                    Numbers{' '}
                    <span className="text-cyan-400">0, 1, 2, 3, and 4</span> are
                    considered small numbers.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium text-cyan-400">2.</span>
                  <p>
                    Numbers{' '}
                    <span className="text-cyan-400">5, 6, 7, 8, and 9</span> are
                    considered big numbers.
                  </p>
                </div>
              </div>
            </div>

            {/* Things to note section */}
            <div className="rounded-xl bg-[#ffffff0a] p-4">
              <h3 className="mb-3 text-lg font-bold text-white">
                <span>Things to note</span>
              </h3>
              <div className="space-y-2 text-sm text-white">
                <div className="flex gap-2">
                  <span className="font-medium text-cyan-400">1.</span>
                  <p>
                    The game is based on the{' '}
                    <span className="text-cyan-400">TRON</span> blockchain
                    technology.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium text-cyan-400">2.</span>
                  <p>
                    All results are verifiable on the blockchain and cannot be
                    manipulated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'hash-odd-even':
        return (
          <div className="space-y-6">
            <div className="rounded-xl bg-[#ffffff0a] p-4">
              <h3 className="mb-3 text-lg font-bold text-white">
                <span>Hash Odd and Even Rules</span>
              </h3>
              <div className="space-y-2 text-sm leading-relaxed text-white">
                <p>
                  This game mode focuses on whether the extracted numbers from
                  the <span className="text-cyan-400">block hash</span> are odd
                  or even.
                </p>
                <p>
                  Players bet on whether the final number will be odd or even,
                  with <span className="text-cyan-400">1:1</span> payout ratio.
                </p>
              </div>
            </div>
          </div>
        )

      case 'lucky-hash':
        return (
          <div className="space-y-6">
            <div className="rounded-xl bg-[#ffffff0a] p-4">
              <h3 className="mb-3 text-lg font-bold text-white">
                <span>Lucky Hash Rules</span>
              </h3>
              <div className="space-y-2 text-sm leading-relaxed text-white">
                <p>
                  Lucky Hash is a special game mode where players bet on
                  specific <span className="text-cyan-400">hash patterns</span>{' '}
                  or combinations.
                </p>
                <p>
                  Higher rewards are offered for more specific predictions, with{' '}
                  <span className="text-cyan-400">varying payout ratios</span>{' '}
                  based on difficulty.
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      title="Rule"
      size="lg"
      position="responsive"
      className="max-w-2xl"
      contentClassName="p-0"
      fullHeight={true}
    >
      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-700 px-6 py-4">
        <div className="flex gap-2 rounded-lg bg-[#ffffff0a] p-2">
          {tabs.map(tab => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-600 text-gray-200'
                  : 'text-white hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">{renderContent()}</div>
    </ModalContainer>
  )
}
