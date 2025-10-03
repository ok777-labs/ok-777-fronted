import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import React, { useState } from 'react'
import ChevronDownIcon from '@/components/ui/icons/chevron-down'
import ChevronUpIcon from '@/components/ui/icons/chevron-up'

const CommonProblem: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const faqs = [
    {
      question: 'Account information',
      answer: [
        `1. What should I do if I forget my password?
              If you forget your password, you can contact our dedicated customer service to request a password reset.`,

        `2. Can I change my username?
              Sorry, we are unable to update this information. If you insist on changing your username, we recommend closing your current account and registering a new one.`,

        `3. How can I become a VIP customer?
              After starting your gaming journey on MAGIC88, you can check your VIP status in real-time in the personal center.`,
      ],
    },
    {
      question: 'My wallet',
      answer: [`1. How do I add a wallet address?`],
    },
    {
      question: 'How to make a deposit?',
      answer: [
        'Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.',
      ],
    },
    {
      question: 'How to withdraw funds?',
      answer: [
        'Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.',
      ],
    },
    {
      question: 'How long does it take for deposits or withdrawals?',
      answer: [
        'Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.',
      ],
    },
    {
      question: 'How long does it take to confirm a transaction?',
      answer: [
        'Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.',
      ],
    },
    {
      question: 'Is the game fair and just',
      answer: [
        'Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.',
      ],
    },
    {
      question: 'What should I do if my game hangs or encounter an issue',
      answer: [
        'Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.',
      ],
    },
  ]

  const updateFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null)
      return
    }
    setActiveFaq(index)
  }

  return (
    <div className="lg:w-full">
      <div className="flex flex-col gap-px overflow-hidden rounded-[12px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-col gap-px"
            onClick={() => updateFaq(index)}
          >
            <div className="flex h-12 items-center justify-between bg-ebony-clay px-4 text-[14px] font-bold text-gallery">
              <span className="w-[90%]">{faq.question}</span>
              {activeFaq === index ? (
                <ChevronDownIcon className="!h-6 !w-6" />
              ) : (
                <ChevronUpIcon className="!h-6 !w-6" />
              )}
            </div>
            {activeFaq === index && (
              <>
                <div className="word-break flex flex-col gap-2 rounded-[12px] bg-mirage-8a p-4 text-[14px] font-normal text-casper">
                  {faq.answer.map((answer, index) => (
                    <div key={index}>{answer}</div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommonProblem
