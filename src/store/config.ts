import { configureStore } from '@reduxjs/toolkit';

import hintReducer from './slice/hint';
import editorReducer from './slice/editor';
import toolbarReducer from './slice/toolbar';

export const store = configureStore({
  reducer: {
    hint: hintReducer,
    editor: editorReducer,
    toolbar: toolbarReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
