import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { showErrorMessage } from '../../services/api/dialog';
import { saveEncodedImageToClipboard } from '../../services/api/handlers';
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

export const toolbarSlice = createSlice({
    name: 'render',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(renderToClipboard.pending, (state) => {
                state.isRendering = true;
            })
            .addCase(renderToClipboard.fulfilled, (state) => {
                state.isRendering = false;
            })
            .addCase(renderToClipboard.rejected, (state, action) => {
                showErrorMessage("Failed to render TeX to image", `Error while rendering editor content: "${action.error.message}".`);
                state.isRendering = false;
            })
    }
})

export default toolbarSlice.reducer
