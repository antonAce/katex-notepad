import { createSlice, PayloadAction, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { setFilenameInTitle, setDefaultTitle } from '../../services/window';
import { saveToFileDialog, showErrorMessage } from '../../services/dialog';
import { saveFile } from '../../services/file';
import { AlignText } from '../types';

interface EditorState {
    isDraft: boolean;
    isRender: boolean;
    isSaving: boolean;
    filename: string;
    filepath?: string;
    content: string;
    alignText: AlignText;
    fontSize: number;
}

export interface FileStructure {
    filepath?: string;
    content: string;
}

export const initialState: EditorState = {
    isDraft: true,
    isRender: false,
    isSaving: false,
    filename: "Untitled",
    filepath: undefined,
    content: "",
    alignText: "left",
    fontSize: 14
}

export const saveContentToFile = createAsyncThunk('editor/saveContentToFile', async (file: FileStructure) => {
    const filepath = file.filepath ?? await saveToFileDialog();

    if (filepath === null) {
        return Promise.reject({ message: "File is not selected" } as SerializedError)
    }

    const filename = filepath.replace(/^.*[\\/]/, '').split('.')[0]

    await saveFile(filepath, file.content);
    return [filepath, filename];
});

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        newFile: (state) => {
            setDefaultTitle();
            state.content = "";
            state.filename = "Untitled";
            state.filepath = undefined;
            state.isRender = false;
            state.isDraft = true;
        },
        toggleRender: (state, action: PayloadAction<boolean>) => { state.isRender = action.payload; },
        setFilename: (state, action: PayloadAction<string>) => { state.filename = action.payload; },
        setContent: (state, action: PayloadAction<string>) => {
            state.content = action.payload;
            state.isDraft = true;
        },
        setAlignment: (state, action: PayloadAction<AlignText>) => { state.alignText = action.payload; },
        setFontSize: (state, action: PayloadAction<number>) => { state.fontSize = action.payload; }
    },
    extraReducers(builder) {
        builder
            .addCase(saveContentToFile.pending, (state, action) => {
                state.isSaving = true;
            })
            .addCase(saveContentToFile.fulfilled, (state, action) => {
                const [filepath, filename] = action.payload;

                if (!state.filepath) { state.filepath = filepath; }
                setFilenameInTitle(filename);
                state.filename = filename;
                state.isDraft = false;
                state.isSaving = false;
            })
            .addCase(saveContentToFile.rejected, (state, action) => {
                showErrorMessage("Failed to save", `Error while saving project to file: "${action.error.message}".`);
                state.isSaving = false;
            })
    }
})

export const {
    newFile, toggleRender, setFilename,
    setContent, setAlignment, setFontSize
} = editorSlice.actions
export default editorSlice.reducer
