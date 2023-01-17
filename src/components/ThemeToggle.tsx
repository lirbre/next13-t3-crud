import useTheme from 'next-theme'
import Image from 'next/image'

export const ThemeToggle = () => {
  const { toggle, theme } = useTheme()

  return (
    <>
      {' '}
      <label onChange={toggle} className="relative cursor-pointer">
        <input
          checked={theme === 'dark'}
          type="checkbox"
          className="peer/theme h-0 w-0 opacity-0"
        />
        <span
          className="
            absolute h-12 w-48 rounded-2xl bg-black before:absolute before:inset-1 before:flex 
            before:h-10 before:w-[104px] before:items-center before:justify-center before:rounded-2xl 
            before:bg-white before:transition-transform before:duration-300 before:content-['Light'] 
            before:peer-checked/theme:translate-x-20 peer-checked/theme:before:content-['Dark']
          "
        />
      </label>
    </>
  )
}
