import { useNavigate } from 'react-router'

import { useAppDispatch } from '../app/store'
import NavBar from '../components/NavBar'
import TodoForm from '../components/TodoForm'
import { todoAdded } from '../features/todos/todosSlice'

export default function NewPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <>
      <NavBar showBack />
      <TodoForm
        saveLabel="Add"
        onSave={(fields) => {
          dispatch(todoAdded(fields))
          navigate('/')
        }}
      />
    </>
  )
}
