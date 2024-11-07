import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IRightSidebar {
  isOpen: boolean
}

const initialState: IRightSidebar = {
  isOpen: true,
}

const rightSidebarSlice = createSlice({
  name: 'rightSidebar',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
  },
})

export const { setIsOpen } = rightSidebarSlice.actions
export default rightSidebarSlice.reducer
