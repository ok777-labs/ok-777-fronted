'use client'

import { Check } from 'lucide-react'
import ModalContainer from './ModalContainer'

type SortOption = 'view-all' | 'new' | 'popular' | 'a-z' | 'z-a'

interface ChooseModalProps {
  isOpen: boolean
  onClose: () => void
  selectedOption: SortOption
  onOptionChange: (option: SortOption) => void
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'view-all', label: 'View All' },
  { value: 'new', label: 'New' },
  { value: 'popular', label: 'Popular' },
  { value: 'a-z', label: 'A-Z' },
  { value: 'z-a', label: 'Z-A' },
]

export default function ChooseModal({
  isOpen,
  onClose,
  selectedOption,
  onOptionChange,
}: ChooseModalProps) {
  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      title="Choose"
      size="sm"
      position="responsive"
      className="lg:relative lg:w-[203px]"
      contentClassName="p-6 max-h-[60vh] lg:max-h-none overflow-y-auto"
    >
      {sortOptions.map(option => (
        <div
          key={option.value}
          className={`flex h-[50px] items-center gap-2 rounded-xl px-3 pl-2 ${selectedOption === option.value ? 'bg-white/[0.04]' : ''}`}
        >
          <div className="flex h-9 flex-1 items-center gap-2 rounded-lg px-2 pl-3">
            <div className="line-clamp-1 font-montserrat text-sm font-bold text-white">
              {option.label}
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div
              onClick={() => onOptionChange(option.value)}
              className="flex h-6 w-6 items-center justify-center"
            >
              {selectedOption === option.value ? (
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2283F6] bg-[#2283F6]">
                  <Check className="h-3 w-3 stroke-[2] text-white" />
                </div>
              ) : (
                <div className="h-6 w-6 rounded-full border-2 border-[#55657E]" />
              )}
            </div>
          </div>
        </div>
      ))}
    </ModalContainer>
  )
}
