import React, { useState } from 'react'
import { useI18n } from '@/context/I18nProvider'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  faqs: FAQItem[]
  className?: string
  title?: boolean
}

const FAQ: React.FC<FAQProps> = ({ faqs, className = '', title = true }) => {
  const { t } = useI18n()
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const toggleFAQ = (question: string) => {
    setExpandedFAQ(expandedFAQ === question ? null : question)
  }

  return (
    <div className={`${className} `}>
      {title && (
        <h3 className="mb-6 pl-3 text-lg font-bold text-white">
          {t('help.faq')}
        </h3>
      )}
      <div className="rounded-xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mb-2 transform cursor-pointer transition-all duration-300 ease-in-out ${
              expandedFAQ === faq.question
                ? 'bg-[#FFFFFF14] shadow-lg'
                : 'bg-mirage-8a'
            }`}
          >
            <div
              onClick={() => toggleFAQ(faq.question)}
              className="flex w-full items-center justify-between p-4 text-left transition-all duration-200 ease-in-out"
            >
              <span
                className={`text-sm font-bold transition-all duration-200 ${
                  expandedFAQ === faq.question ? 'text-white' : 'text-gray-400'
                }`}
              >
                {faq.question}
              </span>
              <span
                className={`text-sm transition-transform duration-300 ease-in-out ${
                  expandedFAQ === faq.question ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <img
                  src="/icons/arrow-up.svg"
                  alt="arrow-down"
                  className="h-4 w-4"
                />
              </span>
            </div>
            <div
              className={`overflow-hidden bg-transparent transition-all duration-300 ease-in-out ${
                expandedFAQ === faq.question
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              {faq.answer && (
                <div className="px-4 pb-4">
                  <p className="text-sm leading-relaxed text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
