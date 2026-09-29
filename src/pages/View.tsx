import { Navigate, useNavigate, useParams } from 'react-router'

import { useAppDispatch, useAppSelector } from '../app/store'
import NavBar from '../components/NavBar'
import TodoForm from '../components/TodoForm'
import { todoEdited } from '../features/todos/todosSlice'

export default function ViewPage() {
  const { id } = useParams()
  const todo = useAppSelector((state) => state.todos.find((t) => t.id === id))
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  if (!todo) return <Navigate to="/" replace />

  return (
    <>
      <NavBar showBack />
      <TodoForm
        initialValues={todo}
        onSave={(fields) => {
          dispatch(todoEdited({ id: todo.id, ...fields }))
          navigate('/')
        }}
      />
    </>
  )
}
