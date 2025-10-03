'use client'

import mainContentData from '../../main-content-data.json'
import Link from 'next/link'
import ModalContainer from './ModalContainer'

interface ChangeGameModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChangeGameModal({
  isOpen,
  onClose,
}: ChangeGameModalProps) {
  const handleGameSelect = (gameId: string) => {
    console.log(`Selected game: ${gameId}`)
    // Here you can add navigation logic to the selected game
    onClose()
  }

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      title="Change game"
      size="xl"
      position="responsive"
      className="max-w-[740px]"
      contentClassName="p-6"
      fullHeight={true}
    >
      {/* Game Grid */}
      <div className="grid grid-cols-3 gap-4">
        {mainContentData.card10.map((item, index) => (
          <div className="overflow-hidden rounded-lg" key={index}>
            <Link href={item.link} onClick={onClose} className="cursor-pointer">
              <img
                src={item.image}
                alt="game"
                className="w-full object-cover transition-transform duration-200"
              />
            </Link>
          </div>
        ))}
      </div>
    </ModalContainer>
  )
}
