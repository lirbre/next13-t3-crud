import useForm from '@/hooks/useForm'
import { api } from '@/utils/api'
import { todoUpdate } from '@/utils/schemas/todos'
import type { FormEvent } from 'react'
import { useRef } from 'react'
import { Modal } from '../atoms/Modal'

export const UpdateModal = ({ id }: { id: string }) => {
  const getAll = api.todos.getAll.useQuery()
  const getUnique = api.todos.getUnique.useQuery({ id })
  const updateTodo = api.todos.updateTodo.useMutation({
    onSuccess: () => {
      void getAll.refetch()
      void getUnique.refetch()
    }
  })

  const formRef = useRef<HTMLFormElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const groupRef = useRef<HTMLInputElement>(null)
  const statusRef = useRef<HTMLInputElement>(null)

  const { submitForm, errors } = useForm(todoUpdate, updateTodo.mutate)

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    submitForm({
      id,
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
      group: groupRef.current?.value,
      status: statusRef.current?.value
    })
  }

  return (
    <Modal onClose={() => formRef.current?.reset()}>
      <div className="mx-auto flex h-full w-full flex-col justify-center gap-6 rounded-sm px-6 py-8 drop-shadow-sm lg:w-3/4">
        <div>
          <p className="text-4xl font-black">Update your Todo</p>
        </div>
        <form
          ref={formRef}
          onSubmit={(e) => void handleUpdate(e)}
          className="flex h-full w-full flex-col gap-3"
        >
          <input
            className="input-bordered input-accent input w-full rounded-md"
            type="text"
            placeholder="Enter a title for your todo"
            defaultValue={getUnique.data?.title}
            ref={titleRef}
          />
          <span className="text-error">{errors?.title}</span>
          <input
            className="input-bordered input-accent input w-full rounded-md"
            type="text"
            placeholder="Enter a description for your todo"
            defaultValue={getUnique.data?.description}
            ref={descriptionRef}
          />
          <span className="text-error">{errors?.description}</span>
          <input
            className="input-bordered input-accent input w-full rounded-md"
            type="text"
            placeholder="Enter a group for your todo"
            defaultValue={getUnique.data?.group}
            ref={groupRef}
          />
          <span className="text-error">{errors?.group}</span>
          <input
            className="input-bordered input-accent input w-full rounded-md"
            type="text"
            placeholder="Enter a status for your todo"
            defaultValue={getUnique.data?.status}
            ref={statusRef}
          />
          <span className="text-error">{errors?.status}</span>
          <div className="flex flex-col gap-3">
            <button type="submit" className="btn-accent btn rounded-md">
              <p>Update</p>
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
