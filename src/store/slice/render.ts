import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { showErrorMessage } from '../../services/api/dialog';

interface RenderState {
    isRendering: boolean;
}

export const initialState: RenderState = {
    isRendering: false
}

export const renderToImage = createAsyncThunk('render/renderToImage', async () => {
    // TODO: Capture content from the #rendered-text
});

export const toolbarSlice = createSlice({
    name: 'render',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(renderToImage.pending, (state) => {
                state.isRendering = true;
            })
            .addCase(renderToImage.fulfilled, (state) => {
                state.isRendering = false;
            })
            .addCase(renderToImage.rejected, (state, action) => {
                showErrorMessage("Failed to render TeX to image", `Error while rendering editor content: "${action.error.message}".`);
                state.isRendering = false;
            })
    }
})

export default toolbarSlice.reducer
