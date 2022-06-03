import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setFilenameInTitle, setDefaultTitle } from '../../services/window';

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
        newFile: (state) => {
            setDefaultTitle();
            state.content = "";
            state.filename = "Untitled";
            state.isRender = false;
            state.isDraft = true;
        },
        toggleRender: (state, action: PayloadAction<boolean>) => { state.isRender = action.payload; },
        setFilename: (state, action: PayloadAction<string>) => { state.filename = action.payload; },
        setContent: (state, action: PayloadAction<string>) => {
            state.content = action.payload;
            state.isDraft = true;
        },
        setFontSize: (state, action: PayloadAction<number>) => { state.fontSize = action.payload; },
        saveContentToFile: (state) => {
            setFilenameInTitle(state.filename);
            state.isDraft = false;
        }
    }
})

export const {
    newFile, toggleRender, setFilename,
    setContent, setFontSize, saveContentToFile
} = editorSlice.actions
export default editorSlice.reducer
