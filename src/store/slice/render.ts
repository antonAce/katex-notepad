import { Canvg } from 'canvg';
import { elementToSVG, inlineResources } from 'dom-to-svg'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { showErrorMessage } from '../../services/api/dialog';
import { saveEncodedImageToClipboard } from '../../services/api/handlers';

interface RenderState {
    isRendering: boolean;
}

export const initialState: RenderState = {
    isRendering: false
}

export const renderToClipboard = createAsyncThunk('render/renderToClipboard', async () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') ?? {} as CanvasRenderingContext2D;
    const element = document.getElementById('rendered-text') ?? document.body;
    const [width, height] = [element.getBoundingClientRect().width, element.getBoundingClientRect().height];
    const svgDocument = elementToSVG(element);

    await inlineResources(svgDocument.documentElement);
    const serializedSvg = new XMLSerializer().serializeToString(svgDocument);

    Canvg.fromString(context, serializedSvg).start();
    await saveEncodedImageToClipboard(width, height, canvas.toDataURL('image/png', 1.0).replace('data:image/png;base64,', ''));
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
