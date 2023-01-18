import { api } from '@/utils/api'

export const Button = () => {
  const { mutate } = api.todos.addTodo.useMutation()
  const { data } = api.todos.getAll.useQuery()

  return (
    <>
      <button onClick={() => mutate()}>mutate</button>
      <p>
        {data?.map(({ id }) => (
          <p key={id}>data</p>
        ))}
      </p>
    </>
  )
}
