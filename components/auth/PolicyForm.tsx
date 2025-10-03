'use client'

import React from 'react'

interface PolicyFormProps {
  content: string // or `content?: string` if it can be optional
}

const PolicyForm: React.FC<PolicyFormProps> = ({ content }) => {
  return (
    <div className="policy-form flex items-center gap-4">
      <input type="checkbox" />
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  )
}

export default PolicyForm
