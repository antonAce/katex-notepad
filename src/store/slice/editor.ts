import { createSlice, PayloadAction, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { openFileDialog, saveToFileDialog, showErrorMessage } from '../../services/dialog';
import { setFilenameInTitle, setDefaultTitle } from '../../services/window';
import { readProject as readProj, saveProject as saveProj } from '../../services/file';
import { stripFilename } from '../../services/util';
import { AlignText } from '../types';

interface EditorState {
    isDraft: boolean;
    isRender: boolean;
    isOpening: boolean;
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
    isOpening: false,
    isSaving: false,
    filename: "Untitled",
    filepath: undefined,
    content: "",
    alignText: "left",
    fontSize: 14
}

export const openProject = createAsyncThunk('editor/openProject', async () => {
    const response = await openFileDialog();

    if (response === null) { return Promise.reject({ message: "Operation was cancelled" } as SerializedError) }
    const filepath = Array.isArray(response) ? response[0] : response;

    return [filepath, await readProj(filepath)];
});

export const saveProject = createAsyncThunk('editor/saveProject', async (file: FileStructure) => {
    const filepath = file.filepath ?? await saveToFileDialog();

    if (filepath === null) { return Promise.reject({ message: "Operation was cancelled" } as SerializedError) }

    await saveProj(filepath, file.content);
    return filepath;
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
            .addCase(openProject.pending, (state) => {
                state.isOpening = true;
            })
            .addCase(openProject.fulfilled, (state, action) => {
                const [filepath, content] = action.payload;
                const filename = stripFilename(filepath);

                setFilenameInTitle(filename);
                state.filepath = filepath;
                state.filename = filename;
                state.content = content;
                state.isDraft = false;
                state.isOpening = false;
            })
            .addCase(openProject.rejected, (state, action) => {
                showErrorMessage("Failed to open", `Error while opening project: "${action.error.message}".`);
                state.isOpening = false;
            })
            .addCase(saveProject.pending, (state) => {
                state.isSaving = true;
            })
            .addCase(saveProject.fulfilled, (state, action) => {
                const filepath = action.payload;
                const filename = stripFilename(filepath);

                if (!state.filepath) { state.filepath = filepath; }
                setFilenameInTitle(filename);
                state.filename = filename;
                state.isDraft = false;
                state.isSaving = false;
            })
            .addCase(saveProject.rejected, (state, action) => {
                showErrorMessage("Failed to save", `Error while saving project: "${action.error.message}".`);
                state.isSaving = false;
            })
    }
})

export const {
    newFile, toggleRender, setFilename,
    setContent, setAlignment, setFontSize
} = editorSlice.actions
export default editorSlice.reducer
