import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link'
}

export const Button = ({
  className,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <button className={`btn-${variant} btn ${className || ''}`} {...rest} />
  )
}
