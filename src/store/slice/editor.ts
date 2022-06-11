import { createSlice, PayloadAction, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { openFileDialog, saveToFileDialog, showErrorMessage } from '../../services/api/dialog';
import { setFilenameInTitle, setDefaultTitle } from '../../services/api/window';
import { readProject as readProj, saveProject as saveProj, renameProjectAndReturnPath as renameProj } from '../../services/api/file';
import { stripFilename, isFilenameValid } from '../../services/util/file';
import { AlignText } from '../types';

interface EditorState {
    isDraft: boolean;
    isRender: boolean;
    isOpening: boolean;
    isSaving: boolean;
    isRenaming: boolean;
    isRenamingSaved: boolean;
    isFilenameValid?: boolean;
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

export interface FileRenameStructure {
    filepath?: string;
    name: string;
}

export const initialState: EditorState = {
    isDraft: true,
    isRender: false,
    isOpening: false,
    isSaving: false,
    isRenaming: false,
    isRenamingSaved: false,
    isFilenameValid: undefined,
    filename: "Untitled",
    filepath: undefined,
    content: "",
    alignText: "left",
    fontSize: 14
}

export const renameProject = createAsyncThunk('editor/renameProject', async (file: FileRenameStructure) => {
    return (!!file.filepath && isFilenameValid(file.name)) ? await renameProj(file.filepath, file.name) : undefined;
});

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
            state.isFilenameValid = undefined;
            state.filename = "Untitled";
            state.filepath = undefined;
            state.isRender = false;
            state.isDraft = true;
        },
        toggleRender: (state, action: PayloadAction<boolean>) => { state.isRender = action.payload; },
        setFilename: (state, action: PayloadAction<string>) => {
            state.isRenamingSaved = false;
            state.filename = action.payload;
            state.isFilenameValid = isFilenameValid(action.payload);
        },
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
                showErrorMessage("Failed to open project", `Error while opening project: "${action.error.message}".`);
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
                showErrorMessage("Failed to save project", `Error while saving project: "${action.error.message}".`);
                state.isSaving = false;
            })
            .addCase(renameProject.pending, (state) => {
                if (!!state.filepath) {
                    state.isRenamingSaved = false;
                    state.isRenaming = true;
                }
            })
            .addCase(renameProject.fulfilled, (state, action) => {
                if (!!state.filepath) {
                    if (state.isFilenameValid) { state.filepath = action.payload; }
                    state.isRenaming = false;
                    state.isRenamingSaved = true;
                }
            })
            .addCase(renameProject.rejected, (state, action) => {
                showErrorMessage("Failed to rename project", `Error while renaming project: "${action.error.message}".`);
                state.isRenaming = false;
                state.isRenamingSaved = false;
            })
    }
})

export const {
    newFile, toggleRender, setFilename,
    setContent, setAlignment, setFontSize
} = editorSlice.actions
export default editorSlice.reducer
