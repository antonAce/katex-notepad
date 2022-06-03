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
        toggleDraft: (state) => { state.isDraft = false; },
        setFilename: (state, action: PayloadAction<string>) => { state.filename = action.payload; },
        setContent: (state, action: PayloadAction<string>) => {
            state.content = action.payload;
            state.isDraft = true;
        },
        setFontSize: (state, action: PayloadAction<number>) => { state.fontSize = action.payload; },
    }
})

export const { toggleRender, toggleDraft, setFilename, setContent, setFontSize } = editorSlice.actions
export default editorSlice.reducer
