import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditorState {
    isRender: boolean;
    content: string;
    fontSize: number;
}

export const initialState: EditorState = {
    isRender: false,
    content: "",
    fontSize: 14
}

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        toggleRender: (state, action: PayloadAction<boolean>) => { state.isRender = action.payload; },
        setContent: (state, action: PayloadAction<string>) => { state.content = action.payload; },
        setFontSize: (state, action: PayloadAction<number>) => { state.fontSize = action.payload; }
    }
})

export const { toggleRender, setContent, setFontSize } = editorSlice.actions
export default editorSlice.reducer
