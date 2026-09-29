import { useState, type FormEvent } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { format } from 'date-fns'

import { toInputValue } from '../features/todos/dates'
import type { TodoFields } from '../features/todos/todosSlice'

type Props = {
  initialValues?: TodoFields
  saveLabel?: string
  onSave: (fields: TodoFields) => void
}

const emptyTodo = (): TodoFields => ({
  title: '',
  description: '',
  dueDate: format(new Date(), 'yyyy-MM-dd'),
})

export default function TodoForm({
  initialValues = emptyTodo(),
  saveLabel = 'Save',
  onSave,
}: Props) {
  const [title, setTitle] = useState(initialValues.title)
  const [dueDate, setDueDate] = useState(toInputValue(initialValues.dueDate))
  const [description, setDescription] = useState(initialValues.description)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!title.trim()) return

    onSave({
      title: title.trim(),
      dueDate: dueDate || null,
      description: description.trim(),
    })
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2.5 }}
    >
      <TextField
        label="Title"
        placeholder="Insert task name..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="standard"
        autoFocus
      />
      <TextField
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        variant="standard"
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        label="Description"
        placeholder="Insert description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        variant="standard"
        multiline
        rows={5}
      />
      <Box>
        <Button type="submit" color="primary" variant="contained">
          {saveLabel}
        </Button>
      </Box>
    </Box>
  )
}
