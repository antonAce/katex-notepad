import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { showErrorMessage, exportFileDialog } from '../../services/api/dialog';
import { saveEncodedImageToFile, saveEncodedImageToClipboard } from '../../services/api/handlers';
import { renderElementToBase64 } from '../../services/util/render';

interface RenderState {
    isRendering: boolean;
}

export const initialState: RenderState = {
    isRendering: false
}

export const renderToClipboard = createAsyncThunk('render/renderToClipboard', async () => {
    const element = document.getElementById('rendered-text') ?? document.body;
    const [width, height] = [element.getBoundingClientRect().width, element.getBoundingClientRect().height];
    const encodedCanvas = await renderElementToBase64(element);

    await saveEncodedImageToClipboard(width, height, encodedCanvas);
});

export const renderToFile = createAsyncThunk('render/renderToFile', async () => {
    const filepath = await exportFileDialog();
    if (filepath === null) { return Promise.reject({ message: "Operation was cancelled" } as SerializedError) }

    const element = document.getElementById('rendered-text') ?? document.body;
    const encodedCanvas = await renderElementToBase64(element);

    await saveEncodedImageToFile(encodedCanvas, filepath);
});

export const toolbarSlice = createSlice({
    name: 'render',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(renderToClipboard.pending, (state) => { state.isRendering = true; })
            .addCase(renderToClipboard.fulfilled, (state) => { state.isRendering = false; })
            .addCase(renderToClipboard.rejected, (state, action) => {
                showErrorMessage("Failed render to clipboard", `Error while rendering editor content: "${action.error.message}".`);
                state.isRendering = false;
            })
            .addCase(renderToFile.pending, (state) => { state.isRendering = true; })
            .addCase(renderToFile.fulfilled, (state) => { state.isRendering = false; })
            .addCase(renderToFile.rejected, (state, action) => {
                showErrorMessage("Failed render to file", `Error while rendering editor content: "${action.error.message}".`);
                state.isRendering = false;
            })
    }
})

export default toolbarSlice.reducer
