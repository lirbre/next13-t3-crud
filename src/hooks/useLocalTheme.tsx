import { useState } from 'react'

const useLocalTheme = () => {
  const setTheme = (newValue: string) => {
    if (typeof window !== 'undefined') {
      const raw = newValue

      console.log(raw)

      localStorage.setItem('theme', raw)
    }
  }

  const getTheme = (defaultValue: string) => {
    if (typeof window !== 'undefined') {
      let item = localStorage.getItem('theme')

      if (!item) {
        localStorage.setItem('theme', defaultValue)
      }

      item ||= localStorage.getItem('theme') || 'business'
      document.documentElement.setAttribute('data-theme', item)

      return item
    }
    return defaultValue
  }

  // useState to make it async
  // agroup Todos e Config in the same useState
  // to prevent extra hooks being called
  const [theme, setThemeState] = useState<'business' | 'winter'>(() => {
    const theme = getTheme('business')

    return theme as 'business' | 'winter'
  })

  const toggleTheme = () => {
    const newTheme = theme === 'business' ? 'winter' : 'business'

    document.documentElement.setAttribute('data-theme', newTheme)

    setTheme(newTheme)
    setThemeState(newTheme)
  }

  return { toggleTheme, theme }
}

export default useLocalTheme
