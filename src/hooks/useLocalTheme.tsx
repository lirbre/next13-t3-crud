import { useState } from 'react'

const useLocalTheme = () => {
  const setTheme = (key: string, newValue: string) => {
    if (typeof window !== 'undefined') {
      const raw = JSON.stringify(newValue)

      localStorage.setItem(key, raw)
    }
  }

  const getTheme = (key: string, defaultValue: string) => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key)
      const raw = JSON.stringify({ [key]: defaultValue })

      if (!item) {
        localStorage.setItem(key, raw)
        document.documentElement.setAttribute('data-theme', defaultValue)
        return defaultValue
      }

      const parsed = JSON.parse(item) as string
      document.documentElement.setAttribute('data-theme', parsed)
      return parsed
    }
    return defaultValue
  }

  // useState to make it async
  // agroup Todos e Config in the same useState
  // to prevent extra hooks being called
  const [theme, setThemeState] = useState<'night' | 'lemonade'>(() => {
    const theme = getTheme('theme', 'night')

    return theme as 'night' | 'lemonade'
  })

  const toggleTheme = () => {
    const newTheme = theme === 'night' ? 'lemonade' : 'night'

    document.documentElement.setAttribute('data-theme', newTheme)

    setTheme('theme', newTheme)
    setThemeState(newTheme)
  }

  return { toggleTheme, theme }
}

export default useLocalTheme
