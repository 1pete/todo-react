import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router'

import { useAppDispatch } from '../app/store'
import { getDueStatus } from '../features/todos/dates'
import {
  todoDeleted,
  todoToggled,
  type Todo,
} from '../features/todos/todosSlice'

export default function TodoItem({ id, title, dueDate, completed }: Todo) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const due = completed ? null : getDueStatus(dueDate)

  return (
    <ListItem
      disablePadding
      sx={{ opacity: completed ? 0.6 : 1 }}
      secondaryAction={
        <>
          {due && (
            <Box
              component="span"
              sx={{ mr: 1, color: due.overdue ? '#F55656' : '#5c7080' }}
            >
              {due.text}
            </Box>
          )}
          <IconButton
            edge="end"
            aria-label="Delete"
            onClick={() => dispatch(todoDeleted(id))}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemIcon sx={{ pl: 1 }}>
        <Checkbox
          checked={completed}
          tabIndex={-1}
          disableRipple
          slotProps={{ input: { 'aria-label': `Complete ${title}` } }}
          onChange={() => dispatch(todoToggled(id))}
        />
      </ListItemIcon>
      <ListItemButton onClick={() => navigate(`/item/${id}`)}>
        <ListItemText
          primary={title}
          sx={{ textDecoration: completed ? 'line-through' : 'none' }}
        />
      </ListItemButton>
    </ListItem>
  )
}
