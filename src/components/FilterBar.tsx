import { ToggleButton, ToggleButtonGroup } from '@mui/material'

import { useAppDispatch, useAppSelector } from '../app/store'
import { filterChanged, type Filter } from '../features/todos/filterSlice'

const options: [Filter, string][] = [
  ['ALL', 'All'],
  ['ACTIVE', 'Active'],
  ['COMPLETED', 'Completed'],
]

export default function FilterBar() {
  const filter = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  return (
    <ToggleButtonGroup
      exclusive
      size="small"
      color="primary"
      value={filter}
      onChange={(_, value: Filter | null) =>
        value && dispatch(filterChanged(value))
      }
    >
      {options.map(([value, label]) => (
        <ToggleButton key={value} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
