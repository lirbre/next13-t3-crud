import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export const Modal = ({
  children,
  onClose
}: {
  children: ReactNode
  onClose?: () => void
}) => {
  return createPortal(
    <>
      <input
        type="checkbox"
        id="update-todo-modal"
        className="modal-toggle shadow-none"
        onChange={onClose}
      />
      <label
        htmlFor="update-todo-modal"
        className="modal cursor-pointer shadow-none backdrop-blur-sm"
      >
        <label className="modal-box relative shadow-none">{children}</label>
      </label>
    </>,
    document.body
  )
}
