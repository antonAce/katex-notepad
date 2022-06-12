import { configureStore } from '@reduxjs/toolkit';

import editorReducer from './slice/editor';
import toolbarReducer from './slice/toolbar';
import renderReducer from './slice/render';

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    toolbar: toolbarReducer,
    render: renderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
