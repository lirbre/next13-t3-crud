import { api } from '@/utils/api'
import { format } from 'date-fns'

export const LoadTodos = () => {
  const todos = api.todos.getAll.useQuery()

  return todos?.data ? (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {todos?.data.map(({ date, group, id, name, status, title }) => (
        <div
          className="card mb-4 w-96 bg-slate-200/5 backdrop-blur-lg"
          key={id}
        >
          <div className="card-body">
            {' '}
            <h2 className="card-title">{title}</h2>
            <h3>{status}</h3>
            <p>{name}</p>
            <p>{group}</p>
            <p>{format(date, 'LLL dd, uuuu')}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <></>
  )
}
