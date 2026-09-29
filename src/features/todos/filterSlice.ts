import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Filter = 'ALL' | 'ACTIVE' | 'COMPLETED'

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'ALL' as Filter,
  reducers: {
    filterChanged: (_state, action: PayloadAction<Filter>) => action.payload,
  },
})

export const { filterChanged } = filterSlice.actions

export default filterSlice.reducer
