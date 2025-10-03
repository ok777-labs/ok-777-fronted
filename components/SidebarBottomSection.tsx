import React from 'react'
import { PaymentMethod, AppDownload } from './sidebar-data'

interface SidebarBottomSectionProps {
  isCollapsed: boolean
  currentLanguage: { code: string; name: string }
  onLanguageClick: () => void
  paymentMethods: PaymentMethod[]
  appDownloads: AppDownload[]
  languageData: any
}

const SidebarBottomSection: React.FC<SidebarBottomSectionProps> = ({
  isCollapsed,
  currentLanguage,
  onLanguageClick,
  paymentMethods,
  appDownloads,
  languageData,
}) => {
  const currentLanguageDisplay =
    languageData[currentLanguage.code as keyof typeof languageData] ||
    languageData.cn

  if (isCollapsed) {
    return null
  }

  return (
    <div className="mt-auto hidden p-4 lg:block">
      {/* Payment Methods */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          {paymentMethods.map(method => (
            <div key={method.alt} className="flex items-center gap-1">
              <img src={method.icon} className="h-5" alt={method.alt} />
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-center rounded bg-gray-700 px-3 py-2 text-sm text-white transition-colors hover:bg-gray-500">
          <span>By Crypto</span>
        </div>
      </div>

      <div className="relative mx-auto h-[1px] w-full bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>

      {/* App Download */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-white">
          <span>Ok777 App</span>
        </span>
        <div className="flex gap-2">
          {appDownloads.map(app => (
            <div key={app.platform} className="flex items-center gap-1">
              <img src={app.icon} className="h-4 w-4" alt={app.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SidebarBottomSection
