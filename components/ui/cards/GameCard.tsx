'use client'
import React from 'react'

export interface GameCardProps {
  name: string
  icon: string
  gameCount: string
  sampleGames?: string[]
}

const GameCard: React.FC<GameCardProps> = ({
  name,
  icon,
  gameCount,
  sampleGames,
}) => {
  return (
    <div className="flex cursor-pointer flex-col gap-2 rounded-lg bg-gray-800 p-2 transition-colors hover:bg-gray-700">
      <div className="flex items-center">
        <div>
          <img
            src={icon}
            alt={`${name} manufacturer icon`}
            className="h-8 object-contain"
          />
        </div>
        <div className="">
          <p className="text-base font-semibold leading-tight text-white">
            {name}
          </p>
          <p className="text-base leading-tight text-[#A7B5CA]">{gameCount}</p>
        </div>
      </div>

      {sampleGames && sampleGames.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {sampleGames.map((game, gameIndex) => (
            <img
              key={gameIndex}
              src={`/images/brand/${game}`}
              alt={`${name} game sample ${gameIndex + 1}`}
              className="h-12 w-full rounded object-cover transition-opacity hover:opacity-80"
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default GameCard
