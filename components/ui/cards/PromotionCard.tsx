import RewardCard from './RewardCard'
import FlatButton from '../Button/FlatButton'
import ArrowUpRightStrokeIcon from '../icons/arrow-up-right-stroke'
import TabButton from '../Button/TabButton'
import Link from 'next/link'
import { useT } from '@/context/I18nProvider'

export default function CasinoPromotionCard({
  button,
  image,
  link,
}: {
  button: string
  image: string
  link: string
}) {
  const t = useT()

  return (
    <div className="">
      {/* Card Container */}
      <div className="bg-mirage-1-2 flex flex-col overflow-hidden rounded-xl shadow-lg">
        {/* Hero Section with Background Image */}
        {/* <div className="group relative h-[11.75rem] w-full overflow-hidden rounded-t-[0.875rem] px-6 py-8 text-white shadow-md transition-all duration-300"> */}
        <div
          className="w-full overflow-hidden rounded-t-lg text-white shadow-md transition-all duration-300"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingTop: '56%'
          }}
        >
          {/* Background image layer with hover zoom */}
          {/* <div
            className="absolute inset-0 bg-no-repeat transition-transform duration-500"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
            }}
          /> */}

          {/* subtle dark overlay for readability */}
          {/* <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" /> */}

          {/* sheen sweep on hover */}
          {/* <div className="pointer-events-none absolute inset-y-0 left-[-40%] w-[40%] skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:left-[140%]" /> */}

          <div className="relative z-10 flex h-full flex-col justify-between">
            <h1
              className="text-3xl font-extrabold leading-tight drop-shadow-md"
              style={{ fontWeight: '900 !important' }}
            ></h1>
            <div>
              <Link href={'/promotions/' + link}>
                <FlatButton className="h-[2.108125rem] w-[7.84875rem] rounded-[0.571875rem] bg-[linear-gradient(#0C60FF,#2C9FFA)] text-[0.8575rem] font-bold uppercase">
                  {button}
                </FlatButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Content Section */}
        <div className="rounded-b-xl bg-mirage-2 p-4">
          <div className="space-y-2">
            {/* Top Row - Date and Casino Badge */}
            <div className="flex items-center justify-between">
              <span className="font-montserrat text-[0.875rem] font-normal text-casper">
                Finishes on July 23, 2025
              </span>

              {/* Casino Badge */}
              <TabButton
                type="one"
                title="Casino"
                className="h-[1.25rem] w-[3.6875rem] text-[0.75rem]"
              />
            </div>

            {/* Title Row */}
            <div className="flex items-center justify-between">
              <h3 className="flex-1 font-montserrat text-[1rem] font-bold text-white">
                Celebrating 13 Years of Endorphins
              </h3>
            </div>
          </div>

          {/* Read More Link */}
          <div className="mt-3 text-right">
            <Link
              href={'/promotions/' + link}
              className="hover:text-dodger-blue/80 group inline-flex items-center gap-2 font-montserrat text-[0.875rem] font-bold text-dodger-blue transition-colors"
            >
              {t('promotions.readmore')}
              <ArrowUpRightStrokeIcon className="h-6 w-6 text-casper transition-colors group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
