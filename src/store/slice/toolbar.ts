import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setWindowTheme } from '../../services/api/window';

interface ToolbarState {
    isDarkTheme: boolean;
    isMenuOpened: boolean;
}

export const initialState: ToolbarState = {
    isDarkTheme: true,
    isMenuOpened: false
}

export const toolbarSlice = createSlice({
    name: 'toolbar',
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<boolean>) => {
            setWindowTheme(action.payload);
            state.isDarkTheme = action.payload;
        },
        toggleMenu: (state, action: PayloadAction<boolean>) => {
            state.isMenuOpened = action.payload;
        }
    }
})

export const { toggleTheme, toggleMenu } = toolbarSlice.actions
export default toolbarSlice.reducer
