import { shipmentSlice } from './shipment.slice';
import * as requestFromServer from './shipment.crud';
import { Dispatch } from 'redux';

const { actions: shipmentActions } = shipmentSlice;

export const fetchShipmentData = (id: string) => async (dispatch: Dispatch) => {
  dispatch(shipmentActions.openLoader());
  console.log(id);
  try {
    const shipData = await requestFromServer.fetchApi(id);
    if (shipData) {
      await dispatch(shipmentActions.fetchData(shipData));
    } else {
      dispatch(shipmentActions.catchError(shipData));
    }
  } catch (error) {
    dispatch(shipmentActions.catchError(error));
  } finally {
    dispatch(shipmentActions.closeLoader());
  }
};
