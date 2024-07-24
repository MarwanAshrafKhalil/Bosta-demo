import { createSlice } from '@reduxjs/toolkit';
import { ShipmentDataType } from '../../../dataTypes';

type ShipmentState = {
  shipmentId: string;
  data: ShipmentDataType | null;
  isLoading: boolean;
  error: string;
};

const initialState: ShipmentState = {
  shipmentId: '',
  data: null,
  isLoading: false,
  error: '',
};

export const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    openLoader: (state) => {
      state.isLoading = true;
    },
    fetchData: (state, action) => {
      state.data = action.payload;
      state.error = '';
    },
    catchError: (state, action) => {
      state.error = action.payload.message;
    },
    closeLoader: (state) => {
      state.isLoading = false;
    },
  },
});

export const shipmentReducer = shipmentSlice.reducer;
