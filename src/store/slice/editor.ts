import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditorState {
    isRender: boolean;
    content: string;
}

export const initialState: EditorState = {
    isRender: false,
    content: ""
}

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        toggleRender: (state, action: PayloadAction<boolean>) => { state.isRender = action.payload; },
        setContent: (state, action: PayloadAction<string>) => { state.content = action.payload; }
    }
})

export const { toggleRender, setContent } = editorSlice.actions
export default editorSlice.reducer
