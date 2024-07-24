import { ShipmentDataType } from '../../../dataTypes';

export async function fetchApi(id: string) {
  try {
    const response = await fetch(
      `https://tracking.bosta.co/shipments/track/${id}`,
      {
        method: 'GET',
      }
    );

    const data: ShipmentDataType = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}
