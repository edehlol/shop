import { createEntityAdapter, createSlice, EntityId, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../interfaces/Product';
import { RootState } from './store';

const cartAdapter = createEntityAdapter<Product>();

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartAdapter.getInitialState(),
  reducers: {
    productAdded(state, action: PayloadAction<Product>) {
      cartAdapter.addOne(state, action.payload);
    },
    productRemoved(state, action: PayloadAction<EntityId>) {
      const id = action.payload;
      cartAdapter.removeOne(state, id);
    },
    quantityAdded(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingProduct = state.entities[id];
      if (existingProduct) {
        existingProduct.cartQuantity++;
      }
    },
    quantitySubtracted(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingProduct = state.entities[id];
      if (existingProduct) {
        if (existingProduct.cartQuantity > 1) {
          existingProduct.cartQuantity--;
        }
      }
    },
  },
});

export const { productAdded, productRemoved, quantityAdded, quantitySubtracted } =
  cartSlice.actions;

export const { selectAll: selectAllCartItems } = cartAdapter.getSelectors(
  (state: RootState) => state.cart
);

export default cartSlice.reducer;
