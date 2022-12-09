import { configureStore } from '@reduxjs/toolkit';
import signUp from './signUp.store';

const store = configureStore({
  reducer: {
    signUp,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
