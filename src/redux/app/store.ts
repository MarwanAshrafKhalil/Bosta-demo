import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { shipmentReducer } from '../features/shipment/shipment.slice';

const rootReducer = combineReducers({
  shipment: shipmentReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
