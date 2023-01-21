import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type TextInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const TextInput = ({ className, ...rest }: TextInputProps) => {
  return (
    <input
      className={`input-bordered input w-full rounded-md ${className || ''}`}
      {...rest}
    />
  )
}
