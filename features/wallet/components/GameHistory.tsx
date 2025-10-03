import ModalContainer from '@/components/modals/ModalContainer'
import { Dropdown } from '@/components/ui'
import { CopyBox } from '@/components/ui/CopyBox'
import ChevronRightIcon from '@/components/ui/icons/chevron-right'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const GameHistory: React.FC = () => {
  const [selectedOption1, setSelectedOption1] = useState('Past 90 days')
  const [selectedOption2, setSelectedOption2] = useState('USDT')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const [selectedOption3, setSelectedOption3] = useState('Hash Betting')
  const [selectedOption4, setSelectedOption4] = useState('Order number')

  const options1 = [
    {
      value: 'Past 90 days',
      label: 'Past 90 days',
    },
  ]

  const options2 = [
    {
      value: 'USDT',
      label: 'USDT',
    },
  ]

  const options3 = [
    {
      value: 'Hash Betting',
      label: 'Hash Betting',
    },
  ]

  const options4 = [
    {
      value: 'Order number',
      label: 'Order number',
    },
  ]

  const history = [
    {
      name: 'Odd and Even - Tron Chain',
      order: '22972977',
      available: '0.150263 USDT',
      playgame: 'Hash single and double wave field chain',
      blockheight: '72385147',
      blockhash: '00**df83e28c',
      betcontent: 'pair',
      betamount: 1,
      situation: 0.95,
      bettingtime: '2025-05-20 22:26:55',
    },
    {
      name: 'Size - Tron Chain',
      order: '22972977',
      available: '0.150263 USDT',
      playgame: 'Hash single and double wave field chain',
      blockheight: '72385147',
      blockhash: '00**df83e28c',
      betcontent: 'pair',
      betamount: 1,
      situation: -1,
      bettingtime: '2025-05-20 22:26:55',
    },
    {
      name: 'Size - Tron Chain',
      order: '22972977',
      available: '0.150263 USDT',
      playgame: 'Hash single and double wave field chain',
      blockheight: '72385147',
      blockhash: '00**df83e28c',
      betcontent: 'pair',
      betamount: 1,
      situation: 0.95,
      bettingtime: '2025-05-20 22:26:55',
    },
    {
      name: 'Size - Tron Chain',
      order: '22972977',
      available: '0.150263 USDT',
      playgame: 'Hash single and double wave field chain',
      blockheight: '72385147',
      blockhash: '00**df83e28c',
      betcontent: 'pair',
      betamount: 1,
      situation: -1,
      bettingtime: '2025-05-20 22:26:55',
    },
    {
      name: 'Size - Tron Chain',
      order: '22972977',
      available: '0.150263 USDT',
      playgame: 'Hash single and double wave field chain',
      blockheight: '72385147',
      blockhash: '00**df83e28c',
      betcontent: 'pair',
      betamount: 1,
      situation: -1,
      bettingtime: '2025-05-20 22:26:55',
    },
    {
      name: 'Size - Tron Chain',
      order: '22972977',
      available: '0.150263 USDT',
      playgame: 'Hash single and double wave field chain',
      blockheight: '72385147',
      blockhash: '00**df83e28c',
      betcontent: 'pair',
      betamount: 1,
      situation: -1,
      bettingtime: '2025-05-20 22:26:55',
    },
    {
      name: 'Size - Tron Chain',
      order: '22972977',
      available: '0.150263 USDT',
      playgame: 'Hash single and double wave field chain',
      blockheight: '72385147',
      blockhash: '00**df83e28c',
      betcontent: 'pair',
      betamount: 1,
      situation: -1,
      bettingtime: '2025-05-20 22:26:55',
    },
    {
      name: 'Size - Tron Chain',
      order: '22972977',
      available: '0.150263 USDT',
      playgame: 'Hash single and double wave field chain',
      blockheight: '72385147',
      blockhash: '00**df83e28c',
      betcontent: 'pair',
      betamount: 1,
      situation: -1,
      bettingtime: '2025-05-20 22:26:55',
    },
  ]

  return (
    <div className="flex flex-col gap-4 [@media(max-width:660px)]:w-full">
      <p className="text-[18px] font-bold text-white [@media(max-width:660px)]:hidden">
        GameHistory
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Dropdown
          options={options1}
          className="border-none text-[14px] font-bold text-casper"
          value={selectedOption1}
          onChange={setSelectedOption1}
        />
        <Dropdown
          options={options2}
          className="border-none text-[14px] font-bold text-casper"
          value={selectedOption2}
          onChange={setSelectedOption2}
        />
        <Dropdown
          options={options3}
          className="border-none text-[14px] font-bold text-casper"
          value={selectedOption3}
          onChange={setSelectedOption3}
        />
        <Dropdown
          options={options4}
          className="border-none text-[14px] font-bold text-casper"
          value={selectedOption4}
          onChange={setSelectedOption4}
        />
      </div>
      <div>
        <div className="grid h-[56px] grid-cols-[auto_60px_60px_60px] items-center gap-4 rounded-t-[8px] border-b border-ebony-clay bg-mirage px-4 py-2 text-[12px] font-bold text-blue-bayoux">
          <span className="word-break">Game</span>
          <span className="word-break">Order</span>
          <span className="word-break flex items-center justify-center">
            Bet amount
          </span>
          <span className="word-break flex items-center justify-center">
            Win or lose
          </span>
        </div>
        <div className="flex flex-col gap-px overflow-hidden rounded-[8px]">
          {history.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setModalIndex(index)
                setModalOpen(true)
              }}
              className={cn(
                'grid grid-cols-[auto_60px_60px_60px] items-center gap-4 px-4 py-2 font-bold',
                index % 2 === 0 ? 'bg-white-4' : 'bg-white-8'
              )}
            >
              <div className="flex flex-col">
                <span className="text-[10px] text-white">{item.name}</span>
                <span className="word-break text-[10px] text-casper">
                  {item.bettingtime.split(' ')[0]}
                </span>
                <span className="word-break text-[10px] text-casper">
                  {item.bettingtime.split(' ')[1]}
                </span>
              </div>
              <span className="text-[12px] text-casper">{item.order}</span>
              <span className="flex items-center justify-center text-[12px] text-casper">
                {item.betamount}
              </span>
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'text-[12px]',
                    item.situation > 0 ? 'text-malachite' : 'text-crimson'
                  )}
                >
                  {item.situation}
                </span>
                <ChevronRightIcon className="h-6 w-6" color="#A7B5CA" />
              </div>
            </div>
          ))}
          <ModalContainer
            onClose={() => setModalOpen(false)}
            isOpen={modalOpen}
            title="Note details"
          >
            <div className="flex flex-col gap-4 rounded-[12px] bg-white-4 p-4">
              <h2 className="text-[14px] font-bold text-casper">
                Lottery results
              </h2>
              <div className="flex items-center justify-between rounded-[12px] bg-mirage px-16 py-4">
                <span className="rounded-[12px] bg-mirage-4 p-4 text-[14px] font-bold text-white">
                  8
                </span>
                <span className="h-full w-px bg-casper"></span>
                <span className="rounded-[12px] bg-mirage-4 p-4 text-[14px] font-bold capitalize text-white">
                  {history[modalIndex].betcontent}
                </span>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-[8px]">
              <div className="flex h-[48px] w-full items-center justify-between bg-mirage p-4">
                <span className="flex items-center text-[12px] text-casper">
                  Available
                  <CopyBox className="bg-transparent py-0 text-[12px] hover:bg-transparent">
                    {history[modalIndex].available}
                  </CopyBox>
                </span>
                <span>
                  <img src="/icons/coin-icon/USDT.svg" className="h-4 w-4" />
                </span>
              </div>
              <div className="flex h-[48px] w-full items-center justify-between bg-mirage bg-white-4 px-4 py-2 text-[12px] font-medium text-casper">
                <span>Play the game</span>
                <span className="text-white">
                  {history[modalIndex].playgame}
                </span>
              </div>
              <div className="flex h-[48px] w-full items-center justify-between bg-mirage bg-white-8 px-4 py-2 text-[12px] font-medium text-casper">
                <span>Block height</span>
                <span className="text-white">
                  <CopyBox className="bg-transparent pr-0 text-[12px] hover:bg-transparent">
                    {history[modalIndex].blockheight}
                  </CopyBox>
                </span>
              </div>
              <div className="flex h-[48px] w-full items-center justify-between bg-mirage bg-white-4 px-4 py-2 text-[12px] font-medium text-casper">
                <span>Block hash</span>
                <span className="flex items-center text-white">
                  <CopyBox className="bg-transparent pl-[10px] pr-0 text-[12px] hover:bg-transparent">
                    {history[modalIndex].blockhash}
                  </CopyBox>
                  <span className="text-[12px] font-bold text-malachite">
                    Verify fairness
                  </span>
                </span>
              </div>
              <div className="flex h-[48px] w-full items-center justify-between bg-mirage bg-white-8 px-4 py-2 text-[12px] font-medium text-casper">
                <span>Bet content</span>
                <span className="text-white">
                  {history[modalIndex].betcontent}
                </span>
              </div>
              <div className="flex h-[48px] w-full items-center justify-between bg-mirage bg-white-4 px-4 py-2 text-[12px] font-medium text-casper">
                <span>Bet amount</span>
                <span className="text-white">
                  {history[modalIndex].betamount}
                </span>
              </div>
              <div className="flex h-[48px] w-full items-center justify-between bg-mirage bg-white-8 px-4 py-2 text-[12px] font-medium text-casper">
                <span>Win or lose situation</span>
                <span
                  className={
                    history[modalIndex].situation > 0
                      ? 'font-bold text-white'
                      : 'font-bold text-crimson'
                  }
                >
                  {history[modalIndex].situation}
                </span>
              </div>
              <div className="flex h-[48px] w-full items-center justify-between bg-mirage bg-white-4 px-4 py-2 text-[12px] font-medium text-casper">
                <span>Betting time</span>
                <span className="text-white">
                  {history[modalIndex].bettingtime}
                </span>
              </div>
            </div>
          </ModalContainer>
        </div>
      </div>
      <div className="flex items-center justify-center text-[12px] text-casper">
        No more
      </div>
    </div>
  )
}

export default GameHistory
