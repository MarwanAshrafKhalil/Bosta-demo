import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { fetchShipmentData } from '../redux/features/shipment/shipment.action';

const shipmentState = [
  'Shipment Created',
  'Shipment Received',
  'Out for Delivery',
  'Delivered',
];

let apiStates = [
  { state: 'TICKET_CREATED', timestamp: '', hub: '' },
  { state: 'PACKAGE_RECEIVED', timestamp: '', hub: '' },
  { state: 'OUT_FOR_DELIVERY', timestamp: '', hub: '' },
  { state: 'DELIVERED', timestamp: '', hub: '' },
];
export default function Stepper({ id }: { id: string }) {
  console.log(id);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.shipment.data);
  const currStatus = data?.TransitEvents;

  const reversedStatus = currStatus ? [...currStatus].reverse() : [];

  if (currStatus) {
    console.log(currStatus);
    console.log(reversedStatus);
  }

  useEffect(() => {
    const fetching = async () => await dispatch(fetchShipmentData(id));
    fetching();
  }, [dispatch, id]);
  let stepperColor = '';

  if (reversedStatus && reversedStatus.length > 0) {
    apiStates = apiStates.map((item) => {
      const match = reversedStatus.find((curr) => curr.state === item.state);
      if (match) {
        return { ...item, timestamp: match.timestamp, hub: match.hub || '' };
      }
      return item;
    });

    if (reversedStatus[0].state === 'DELIVERED') {
      stepperColor = 'step-accent';
    } else if (reversedStatus[0].state === 'CANCELLED') {
      stepperColor = 'step-primary';
    } else {
      stepperColor = 'step-warning';
    }
  }

  console.log(apiStates);
  return (
    <div className=" steps my-10">
      <ul className="steps">
        {reversedStatus &&
          apiStates.map((item, index) =>
            item.timestamp ? (
              <li key={index} className={`step ${stepperColor}`}>
                {shipmentState[index]}
              </li>
            ) : (
              <li key={index} className="step ">
                {shipmentState[index]}
              </li>
            )
          )}

        {/* <li className="step step-primary" data-content="✓">
          Register
        </li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li> */}
      </ul>
    </div>
  );
}
