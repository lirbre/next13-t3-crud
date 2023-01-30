import { api } from '@/utils/api'
import { format } from 'date-fns'
import { AiFillDelete, AiTwotoneEdit } from 'react-icons/ai'

export const LoadTodos = () => {
  const todos = api.todos.getAll.useQuery()
  const deleteTodo = api.todos.deleteTodo.useMutation({
    onSuccess: () => todos.refetch()
  })

  return todos?.data ? (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {todos?.data.map(({ date, group, id, name, status, title }) => (
        <div
          className="card mb-4 w-96 bg-slate-200/5 backdrop-blur-lg"
          key={id}
        >
          <div className="card-body">
            {' '}
            <div className="flex items-center justify-between">
              <h2 className="card-title">
                {title}, <i>({status})</i>
              </h2>
              <div className="flex gap-2">
                <button className="group/iconbtn flex cursor-pointer gap-4">
                  <AiTwotoneEdit
                    size={24}
                    className="fill-accent group-hover/iconbtn:fill-accent-focus group-focus:fill-accent-focus"
                  />
                </button>
                <button
                  onClick={() => deleteTodo.mutate({ id })}
                  className="group/iconbtn flex cursor-pointer gap-4"
                >
                  <AiFillDelete
                    size={24}
                    className="fill-accent group-hover/iconbtn:fill-accent-focus group-focus:fill-accent-focus"
                  />
                </button>
              </div>
            </div>
            <p>{name}</p>
            <div className="flex justify-between">
              <p>{group}</p>
              <p className="text-right">{format(date, 'LLL dd, uuuu')}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <></>
  )
}
