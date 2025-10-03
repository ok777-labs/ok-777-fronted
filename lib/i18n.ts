import React from 'react'

export type Locale =
  | 'en'
  | 'es'
  | 'fr'
  | 'de'
  | 'zh'
  | 'ja'
  | 'ko'
  | 'pt'
  | 'pl'
  | 'uk'

export interface Translation {
  [key: string]: string | Translation
}

export interface LocaleData {
  [namespace: string]: Translation
}

class I18nManager {
  private currentLocale: Locale = 'en'
  private translations: LocaleData = {}
  private listeners: Set<() => void> = new Set()

  constructor() {
    this.translations = {}
    // Initialize with English translations
    this.initializeTranslations()
  }

  private async initializeTranslations() {
    try {
      if (typeof window === 'undefined') {
        // Server-side initialization
        const fs = await import('fs')
        const path = await import('path')
        const filePath = path.join(
          process.cwd(),
          'public',
          'locales',
          'en.json'
        )
        const fileContent = fs.readFileSync(filePath, 'utf8')
        this.translations = JSON.parse(fileContent)
      } else {
        // Client-side: load from localStorage or use empty object initially
        const savedTranslations = localStorage.getItem('i18n_translations')
        if (savedTranslations) {
          this.translations = JSON.parse(savedTranslations)
        } else {
          // Load translations asynchronously
          this.loadClientSideTranslations()
        }
      }
    } catch (error) {
      console.error('Error initializing translations:', error)
      this.translations = {}
    }
  }

  private async loadClientSideTranslations() {
    try {
      const response = await fetch('/locales/en.json')
      if (response.ok) {
        this.translations = await response.json()
        // Save to localStorage for future use
        localStorage.setItem(
          'i18n_translations',
          JSON.stringify(this.translations)
        )
        this.notify() // Notify listeners that translations are loaded
      }
    } catch (error) {
      console.error('Error loading client-side translations:', error)
      this.translations = {}
    }
  }

  // Subscribe to locale changes
  subscribe(listener: () => void) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  // Notify all listeners of changes
  private notify() {
    this.listeners.forEach(listener => listener())
  }

  // Get current locale
  getCurrentLocale(): Locale {
    return this.currentLocale
  }

  // Set locale and load translations
  async setLocale(locale: Locale): Promise<void> {
    if (this.currentLocale === locale) return

    this.currentLocale = locale
    await this.loadLocale(locale)
    this.notify()
  }

  // Load translations for a specific locale
  private async loadLocale(locale: Locale): Promise<void> {
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined') {
        // Server-side: use require for static files
        try {
          const fs = await import('fs')
          const path = await import('path')
          const filePath = path.join(
            process.cwd(),
            'public',
            'locales',
            `${locale}.json`
          )
          const fileContent = fs.readFileSync(filePath, 'utf8')
          this.translations = JSON.parse(fileContent)
        } catch (serverError) {
          console.error(
            `Error loading locale ${locale} on server:`,
            serverError
          )
          // Fallback to English
          try {
            const fs = await import('fs')
            const path = await import('path')
            const filePath = path.join(
              process.cwd(),
              'public',
              'locales',
              'en.json'
            )
            const fileContent = fs.readFileSync(filePath, 'utf8')
            this.translations = JSON.parse(fileContent)
          } catch (fallbackError) {
            console.error('Error loading fallback locale:', fallbackError)
            this.translations = {}
          }
        }
      } else {
        // Client-side: use fetch
        const response = await fetch(`/locales/${locale}.json`)
        if (!response.ok) {
          // Fallback to English
          const fallbackResponse = await fetch('/locales/en.json')
          if (fallbackResponse.ok) {
            this.translations = await fallbackResponse.json()
          } else {
            throw new Error(`Failed to load locale: ${locale}`)
          }
        } else {
          this.translations = await response.json()
        }
      }
    } catch (error) {
      console.error(`Error loading locale ${locale}:`, error)
      // Fallback to empty translations
      this.translations = {}
    }
  }

  // Get translation by key
  t(key: string, params?: Record<string, string | number>): string {
    const keys = key.split('.')
    let value: any = this.translations

    // Navigate through nested keys
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key // Return key if translation not found
      }
    }

    if (typeof value !== 'string') {
      console.warn(`Translation value is not a string: ${key}`)
      return key
    }

    // Replace parameters in translation
    if (params) {
      return this.replaceParams(value, params)
    }

    return value
  }

  // Replace parameters in translation string
  private replaceParams(
    text: string,
    params: Record<string, string | number>
  ): string {
    return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return params[key]?.toString() || match
    })
  }

  // Get all translations for current locale
  getTranslations(): LocaleData {
    return this.translations
  }

  // Check if a translation key exists
  hasKey(key: string): boolean {
    const keys = key.split('.')
    let value: any = this.translations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return false
      }
    }

    return typeof value === 'string'
  }
}

// Create singleton instance
export const i18n = new I18nManager()

// Hook for React components
export function useTranslation() {
  const [locale, setLocale] = React.useState(i18n.getCurrentLocale())
  const [translations, setTranslations] = React.useState(i18n.getTranslations())

  React.useEffect(() => {
    const unsubscribe = i18n.subscribe(() => {
      setLocale(i18n.getCurrentLocale())
      setTranslations(i18n.getTranslations())
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return {
    t: i18n.t.bind(i18n),
    locale,
    setLocale: i18n.setLocale.bind(i18n),
    translations,
    hasKey: i18n.hasKey.bind(i18n),
  }
}
