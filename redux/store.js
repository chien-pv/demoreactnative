import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {fetchAlbum} from './actionRTK';
import todoSlice from './todoSlice';
export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    [fetchAlbum.reducerPath]: fetchAlbum.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(fetchAlbum.middleware),
});

setupListeners(store.dispatch);
