import { configureStore } from '@reduxjs/toolkit';

import hintReducer from './slice/hint';
import toolbarReducer from './slice/toolbar';

export const store = configureStore({
  reducer: {
    hint: hintReducer,
    toolbar: toolbarReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
