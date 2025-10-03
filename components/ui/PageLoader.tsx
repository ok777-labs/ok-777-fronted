'use client'

import React, { useState, useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface PageLoaderProps {
  message?: string
}

const PageLoader: React.FC<PageLoaderProps> = ({ message = 'Loading...' }) => {
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <div className="loading-bg fixed inset-0 z-[9999] flex flex-col">
      {/* Red Progress Bar at Top */}
      <div className="h-2 w-full lg:h-4">
        <div
          className="h-full rounded-r-full bg-crimson transition-all duration-300 ease-out"
          style={{ width: `${Math.min(loadingProgress, 100)}%` }}
        />
      </div>

      {/* Centered Logo */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex items-center justify-center">
          {/* 777 Logo with Flaming Soccer Ball */}
          <img src="/images/logo.svg" className="h-[96px]" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default PageLoader
