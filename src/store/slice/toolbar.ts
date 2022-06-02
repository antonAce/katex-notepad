import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToolbarState {
    filename: string;
}

export const initialState: ToolbarState = {
    filename: "Untitled"
}

export const toolbarSlice = createSlice({
    name: 'toolbar',
    initialState,
    reducers: {
        setFilename: (state, action: PayloadAction<string>) => { state.filename = action.payload; }
    }
})

export const { setFilename } = toolbarSlice.actions
export default toolbarSlice.reducer
