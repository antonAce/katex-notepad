import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditorState {
    isDraft: boolean;
    isRender: boolean;
    filename: string;
    content: string;
    fontSize: number;
}

export const initialState: EditorState = {
    isDraft: true,
    isRender: false,
    filename: "Untitled",
    content: "",
    fontSize: 14
}

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        toggleRender: (state, action: PayloadAction<boolean>) => { state.isRender = action.payload; },
        setFilename: (state, action: PayloadAction<string>) => { state.filename = action.payload; },
        setContent: (state, action: PayloadAction<string>) => { state.content = action.payload; },
        setFontSize: (state, action: PayloadAction<number>) => { state.fontSize = action.payload; }
    }
})

export const { toggleRender, setFilename, setContent, setFontSize } = editorSlice.actions
export default editorSlice.reducer
