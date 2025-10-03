import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

interface GameItemProps {
  src: string
  name: string
  timeLabel?: string
  timeColor?: 'red' | 'blue'
  isHighlighted?: boolean
  href?: string // Optional link for the game item
}

const GameItem = ({ src, href, name, timeLabel, timeColor }: GameItemProps) => {
  return (
    <Link
      href={'/hashgames/' + href + '/transfer-betting'}
      className={cn(
        'flex h-[50px] cursor-pointer items-center gap-2 rounded-xl px-2 py-0 transition-all duration-200',
        'hover:scale-105 hover:bg-white/10 active:scale-95'
      )}
    >
      <Image
        src={src}
        alt={name}
        className="h-9 w-9 flex-shrink-0 object-contain"
        width={72}
        height={72}
      />
      <div className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-lg px-3 py-0">
        <span className="whitespace-nowrap font-montserrat text-sm font-bold text-white">
          {name}
        </span>
        {timeLabel && (
          <div className="ml-auto flex h-[19px] flex-shrink-0 items-center justify-center rounded-[4px] bg-[#111923] px-2 py-0.5 backdrop-blur-[32px]">
            <span
              className={cn(
                'whitespace-nowrap font-montserrat text-xs font-bold',
                timeColor === 'red' && 'text-[#ED1D49]',
                timeColor === 'blue' && 'text-[#2283F6]'
              )}
            >
              {timeLabel}
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}

export default function CasinoGames() {
  const leftColumnGames: GameItemProps[] = [
    {
      src: '/images/games/odd_even.png',
      name: 'ODD/EVEN',
      href: 'oddeven',
    },
    {
      src: '/images/games/odd_even_1m.png',
      name: 'ODD/EVEN',
      href: 'oddeven',
      timeLabel: '1 min',
      timeColor: 'red' as const,
    },
    {
      src: '/images/games/odd_even_3m.png',
      name: 'ODD/EVEN',
      href: 'oddeven',
      timeLabel: '3min',
      timeColor: 'blue' as const,
    },
    {
      src: '/images/games/big_small.png',
      name: 'BIG/SMALL',
      href: 'bigsmall',
    },
    {
      src: '/images/games/big_small_1m.png',
      name: 'BIG/SMALL',
      href: 'bigsmall',
      timeLabel: '1 min',
      timeColor: 'red' as const,
    },
    {
      src: '/images/games/big_small_3m.png',
      name: 'BIG/SMALL',
      href: 'bigsmall',
      timeLabel: '3min',
      timeColor: 'blue' as const,
    },
    {
      src: '/images/games/niuniu.png',
      name: 'NIUNIU',
      href: 'niuniu',
    },
    {
      src: '/images/games/niuniu_1m.png',
      name: 'NIUNIU',
      href: 'niuniu',
      timeLabel: '1 min',
      timeColor: 'red' as const,
    },
    {
      src: '/images/games/niuniu_3m.png',
      name: 'NIUNIU',
      href: 'niuniu',
      timeLabel: '3min',
      timeColor: 'blue' as const,
    },
  ]

  const rightColumnGames: GameItemProps[] = [
    {
      src: '/images/games/banker.png',
      name: 'BANKER',
      href: 'bankerplayer',
      isHighlighted: true,
    },
    {
      src: '/images/games/banker_1m.png',
      name: 'BANKER',
      href: 'bankerplayer',
      timeLabel: '1 min',
      timeColor: 'red' as const,
    },
    {
      src: '/images/games/banker_3m.png',
      name: 'BANKER',
      href: 'bankerplayer',
      timeLabel: '3min',
      timeColor: 'blue' as const,
    },
    {
      src: '/images/games/lucky.png',
      name: 'LUCKY',
      href: 'bankerplayer',
    },
    {
      src: '/images/games/lucky_1m.png',
      name: 'LUCKY',
      href: 'bankerplayer',
      timeLabel: '1 min',
      timeColor: 'red' as const,
    },
    {
      src: '/images/games/lucky_3m.png',
      name: 'LUCKY',
      href: 'bankerplayer',
      timeLabel: '3min',
      timeColor: 'blue' as const,
    },
  ]

  return (
    <div className="absolute inline-flex items-start justify-center rounded-xl bg-mirage-54 p-6 backdrop-blur-[32px]">
      <div className="flex w-full gap-6">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-0">
          {leftColumnGames.map((game, index) => (
            <GameItem
              key={index}
              src={game.src}
              name={game.name}
              timeLabel={game.timeLabel}
              timeColor={game.timeColor}
              href={game.href}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start gap-0">
          {rightColumnGames.map((game, index) => (
            <GameItem
              key={index}
              src={game.src}
              name={game.name}
              timeLabel={game.timeLabel}
              timeColor={game.timeColor}
              isHighlighted={game.isHighlighted}
              href={game.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
