import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HintKey } from '../types';

interface HintState {
    key: HintKey;
}

export const initialState: HintState = {
    key: "default"
}

export const hintSlice = createSlice({
    name: 'hint',
    initialState,
    reducers: {
        setDefault: (state) => { state.key = "default"; },
        setHint: (state, action: PayloadAction<HintKey>) => { state.key = action.payload; }
    }
})

export const { setDefault, setHint } = hintSlice.actions
export default hintSlice.reducer
