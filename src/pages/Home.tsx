import NavBar from '../components/NavBar'
import TodoList from '../components/TodoList'

export default function HomePage() {
  return (
    <>
      <NavBar showAdd />
      <TodoList />
    </>
  )
}
