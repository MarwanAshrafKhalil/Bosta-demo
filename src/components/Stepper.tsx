import { TransitEventsType } from '../dataTypes';
import { useTranslation } from 'react-i18next';

export default function Stepper({
  transitEvents,
}: {
  transitEvents: TransitEventsType[];
}) {
  const [t] = useTranslation();

  const shipmentState = [
    'Shipment Created',
    'Shipment Received',
    'Out for Delivery',
    'Delivered',
  ];

  let stepperColor = '';

  let apiStates = [
    { state: 'TICKET_CREATED', timestamp: '', hub: '', reason: '' },
    { state: 'PACKAGE_RECEIVED', timestamp: '', hub: '', reason: '' },
    { state: 'OUT_FOR_DELIVERY', timestamp: '', hub: '', reason: '' },
    { state: 'DELIVERED', timestamp: '', hub: '', reason: '' },
  ];

  const currStatus = transitEvents;
  const reversedStatus = currStatus ? [...currStatus].reverse() : [];

  if (currStatus && reversedStatus && reversedStatus.length > 0) {
    apiStates = apiStates.map((item) => {
      const match = reversedStatus.find((curr) => curr.state === item.state);
      if (match) {
        return {
          ...item,
          timestamp: match.timestamp,
          hub: match.hub || '',
          reason: match.reason || '',
        };
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

  return (
    <>
      {transitEvents && transitEvents.length > 0 && (
        <div className=" steps my-10">
          <ul className="steps">
            {reversedStatus &&
              apiStates.map((item, index) =>
                item.timestamp ? (
                  <li
                    key={index}
                    data-content="✓"
                    className={`step  ${stepperColor}`}
                  >
                    <span className="font-bold">
                      {t(`shipmentStates.${shipmentState[index]}`)}
                    </span>
                  </li>
                ) : (
                  <li key={index} data-content="●" className="step ">
                    <span className="font-bold text-gray-400">
                      {t(`shipmentStates.${shipmentState[index]}`)}
                    </span>
                  </li>
                )
              )}
          </ul>
        </div>
      )}
    </>
  );
}
