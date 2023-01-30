import { TextInput } from '../atoms/TextInput'

import { api } from '@/utils/api'
import type { FormEvent } from 'react'
import { useState } from 'react'

export const CreateTodoForm = () => {
  const getAll = api.todos.getAll.useQuery()
  const addTodo = api.todos.addTodo.useMutation({
    onSuccess: () => getAll.refetch()
  })

  const [formData, setFormData] = useState<{
    group: string
    name: string
    status: string
    title: string
  }>({
    group: '',
    name: '',
    status: '',
    title: ''
  })

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addTodo.mutate({
      group: formData.group,
      name: formData.name,
      status: formData.status,
      title: formData.title
    })

    setFormData({
      group: '',
      name: '',
      status: '',
      title: ''
    })
  }

  return (
    <div className="flex h-full w-full flex-col justify-center gap-6 lg:w-1/2">
      <div className="mx-auto flex h-full w-full flex-col justify-center gap-6 p-4 lg:w-3/4">
        <div>
          <p className="text-4xl font-black">Signin on your account</p>
        </div>
        <form
          onSubmit={(e) => handleUpdate(e)}
          className="flex h-full w-full flex-col gap-3"
        >
          <TextInput
            type="text"
            className="input-accent"
            placeholder="Enter a name for your todo"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />
          <TextInput
            type="text"
            className="input-accent"
            placeholder="Enter a title for your todo"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
          <TextInput
            type="text"
            className="input-accent"
            placeholder="Enter a group for your todo"
            onChange={(e) =>
              setFormData({ ...formData, group: e.target.value })
            }
            value={formData.group}
          />
          <TextInput
            type="text"
            className="input-accent"
            placeholder="Enter a status for your todo"
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            value={formData.status}
          />
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
