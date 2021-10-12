import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartSlice';

const persistCartConfig = {
  key: 'cart',
  storage,
};

const persistedCart = persistReducer(persistCartConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCart,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
