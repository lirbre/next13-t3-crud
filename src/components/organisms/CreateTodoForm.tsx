import { api } from '@/utils/api'
import type { FormEvent } from 'react'
import { useRef } from 'react'
import useForm from '@/hooks/useForm'
import { todo } from '@/utils/schemas/todos'

export const CreateTodoForm = () => {
  const getAll = api.todos.getAll.useQuery()
  const addTodo = api.todos.addTodo.useMutation({
    onSuccess: () => getAll.refetch()
  })

  const formRef = useRef<HTMLFormElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)
  const groupRef = useRef<HTMLInputElement>(null)
  const statusRef = useRef<HTMLInputElement>(null)

  const { submitForm, errors } = useForm(todo, addTodo.mutate)

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { errors } = submitForm({
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
      group: groupRef.current?.value,
      status: statusRef.current?.value
    })

    if (!errors) formRef.current?.reset()
  }

  return (
    <div className="flex h-full w-full flex-col justify-center gap-6 lg:w-1/2">
      <div className="mx-auto flex h-full w-full flex-col justify-center gap-6 p-4 lg:w-3/4">
        <div>
          <p className="text-4xl font-black">
            Provide informations about your Todo
          </p>
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
            ref={titleRef}
          />
          <span className="text-error">{errors?.title}</span>
          <input
            className="input-bordered input-accent input w-full rounded-md"
            type="text"
            placeholder="Enter a description for your todo"
            ref={descriptionRef}
          />
          <span className="text-error">{errors?.description}</span>
          <input
            className="input-bordered input-accent input w-full rounded-md"
            type="text"
            placeholder="Enter a group for your todo"
            ref={groupRef}
          />
          <span className="text-error">{errors?.group}</span>
          <input
            className="input-bordered input-accent input w-full rounded-md"
            type="text"
            placeholder="Enter a status for your todo"
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
    </div>
  )
}
