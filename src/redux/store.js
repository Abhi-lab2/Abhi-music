import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazemCore';


export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath] : shazamCoreApi.reducer,
    player: playerReducer,
  },
  // default meiddleware
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware)
});
