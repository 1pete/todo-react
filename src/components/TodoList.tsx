import { Box, List, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'

import { useAppSelector } from '../app/store'
import TodoItem from './TodoItem'

export default function TodoList() {
  const allTodos = useAppSelector((state) => state.todos)
  const filter = useAppSelector((state) => state.filter)
  const todos =
    filter === 'ALL'
      ? allTodos
      : allTodos.filter((t) => t.completed === (filter === 'COMPLETED'))

  if (!todos.length) {
    return (
      <Box sx={{ mt: '30vh', textAlign: 'center' }}>
        <InboxIcon sx={{ fontSize: 60 }} />
        <Typography variant="h5">List is empty</Typography>
        <Typography variant="subtitle1">Try create a new to-do.</Typography>
      </Box>
    )
  }

  return (
    <List sx={{ bgcolor: 'background.paper' }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  )
}
