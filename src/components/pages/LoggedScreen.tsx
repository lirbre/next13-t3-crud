import { BaseSkeleton } from '@/components/templates/BaseSkeleton'
import { CreateTodoForm } from '../organisms/CreateTodoForm'
import { LoadTodos } from '../organisms/LoadTodos'

export const LoggedScreen = () => {
  return (
    <BaseSkeleton title="Next 13 - T3 - Home">
      <>
        <CreateTodoForm />
        <LoadTodos />
      </>
    </BaseSkeleton>
  )
}
