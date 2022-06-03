import { configureStore } from '@reduxjs/toolkit';

import editorReducer from './slice/editor';
import toolbarReducer from './slice/toolbar';

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    toolbar: toolbarReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
