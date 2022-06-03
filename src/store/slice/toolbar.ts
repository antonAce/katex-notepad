import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToolbarState {
    isMenuOpened: boolean;
}

export const initialState: ToolbarState = {
    isMenuOpened: false
}

export const toolbarSlice = createSlice({
    name: 'toolbar',
    initialState,
    reducers: {
        toggleMenu: (state, action: PayloadAction<boolean>) => { state.isMenuOpened = action.payload; }
    }
})

export const { toggleMenu } = toolbarSlice.actions
export default toolbarSlice.reducer
