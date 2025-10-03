import { cn } from '@/lib/utils'
import { ZoomIn, ZoomOut } from 'lucide-react'
import { useState } from 'react'

const GameHistoryTable = () => {
  const [zoomOneState, setZoomOneState] = useState(false)
  const [zoomTwoState, setZoomTwoState] = useState(false)

  const historydata = ['O', 'O', 'E', 'E', 'E', 'E']

  for (let i = 0; i < 120 - 6; i++) {
    historydata.push('')
  }

  const history_data = [
    'r',
    'r',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'y',
    '',
    '',
    '',
  ]
  for (let i = 0; i < 444 - 15; i++) {
    history_data.push('')
  }

  const toggleZoomOne = () => {
    setZoomOneState(!zoomOneState)
  }

  const toggleZoomTwo = () => {
    setZoomTwoState(!zoomTwoState)
  }
  return (
    <>
      <div className="relative flex w-full items-start gap-px">
        <div className="relative flex gap-px overflow-x-hidden">
          {/* Row Labels */}
          <div className="grid grid-flow-col grid-rows-6 gap-px">
            {historydata.map((label, i) => (
              <div
                key={i}
                className="flex h-[25px] w-6 items-center justify-center bg-mirage"
              >
                <div
                  className={cn(
                    'flex h-3 w-3 items-center justify-center rounded-full md:h-4 md:w-4',
                    label === 'O'
                      ? 'bg-crimson'
                      : label === 'E'
                        ? 'bg-yellow-orange'
                        : ''
                  )}
                >
                  <span className="text-bunker text-[10px] font-bold md:text-xs">
                    {label}
                  </span>
                </div>
              </div>
            ))}
            <div
              onClick={toggleZoomOne}
              className="absolute right-0 top-0 ml-2 flex-shrink-0 cursor-pointer bg-mirage p-1"
            >
              {zoomOneState ? (
                <ZoomOut className="h-5 w-5 text-white md:h-6 md:w-6" />
              ) : (
                <ZoomIn className="h-5 w-5 text-white md:h-6 md:w-6" />
              )}
            </div>
          </div>
        </div>

        <div className="relative flex gap-px overflow-hidden">
          {/* Right side detailed grid */}
          <div className="grid grid-flow-col grid-rows-12 gap-px">
            {history_data.map((item, rowIndex) => (
              <div key={rowIndex} className="flex gap-px">
                <div className="flex h-3 w-3 items-center justify-center bg-mirage">
                  <div
                    className={cn(
                      'border- h-2 w-2 rounded-full border',
                      item === 'r'
                        ? 'border-crimson'
                        : item === 'y'
                          ? 'border-yellow-orange'
                          : 'border-transparent'
                    )}
                  ></div>
                </div>
              </div>
            ))}
            <div
              onClick={toggleZoomTwo}
              className="absolute right-0 top-0 ml-2 flex-shrink-0 cursor-pointer bg-mirage p-1"
            >
              {zoomTwoState ? (
                <ZoomOut className="h-5 w-5 text-white md:h-6 md:w-6" />
              ) : (
                <ZoomIn className="h-5 w-5 text-white md:h-6 md:w-6" />
              )}
            </div>
          </div>
        </div>
        {zoomOneState && (
          <div className="absolute bottom-0 grid w-[40%] grid-flow-col grid-rows-6 gap-px overflow-x-hidden bg-[#171d25]">
            {historydata.map((label, i) => (
              <div
                key={i}
                className="flex h-[30px] w-[30px] items-center justify-center bg-mirage md:h-[35px]"
              >
                <div
                  className={cn(
                    'flex h-5 w-5 items-center justify-center rounded-full md:h-6 md:w-6',
                    label === 'O'
                      ? 'bg-crimson'
                      : label === 'E'
                        ? 'bg-yellow-orange'
                        : ''
                  )}
                >
                  <span className="text-bunker text-[10px] font-bold md:text-xs">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        {zoomTwoState && (
          <div className="absolute bottom-0 left-[45%] grid w-[40%] grid-flow-col grid-rows-12 gap-px overflow-x-hidden bg-[#171d25]">
            {history_data.map((item, rowIndex) => (
              <div key={rowIndex} className="flex gap-px">
                <div className="flex h-4 w-4 items-center justify-center bg-mirage">
                  <div
                    className={cn(
                      'border- h-3 w-3 rounded-full border',
                      item === 'r'
                        ? 'border-crimson'
                        : item === 'y'
                          ? 'border-yellow-orange'
                          : 'border-transparent'
                    )}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default GameHistoryTable
