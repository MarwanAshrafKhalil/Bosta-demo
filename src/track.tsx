import { useParams } from 'react-router-dom';
import InfoBar from './components/InfoBar';
import Stepper from './components/Stepper';
import TableInfo from './components/TableInfo';
import DelAddress from './components/DelAddress';
import callCenter from './assets/callCenter.png';
import HelpDiv from './components/HelpDiv';
import { useAppDispatch, useAppSelector } from './redux/app/hooks';
import { useEffect } from 'react';
import { fetchShipmentData } from './redux/features/shipment/shipment.action';
import LoadingDiv from './components/LoadingDiv';

export default function Tracking() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const data = useAppSelector((state) => state.shipment.data);
  const isLoading = useAppSelector((state) => state.shipment.isLoading);

  useEffect(() => {
    if (id) dispatch(fetchShipmentData(id));
  }, [id, dispatch]);

  return (
    <>
      {!data || isLoading ? (
        <LoadingDiv />
      ) : (
        <div className="flex flex-col h-full mx-10 justify-center items-center my-16">
          <div className="max-w-7xl w-full">
            <div className="flex flex-col rounded-xl border border-gray-200">
              <InfoBar
                shipmentId={data?.TrackingNumber || ''}
                status={data?.CurrentStatus}
                provider={data?.provider}
                estDate={data?.PromisedDate}
              />
              <hr />
              <Stepper transitEvents={data.TransitEvents} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 my-10 gap-5">
              <div className=" col-span-1 sm:col-span-3 rounded-xl border overflow-hidden">
                <TableInfo info={data.TransitEvents} />
              </div>

              <div className="col-span-1 sm:col-span-1">
                <div className="flex flex-col gap-5">
                  <DelAddress />
                  <HelpDiv
                    headline={'Need help ?'}
                    buttonText="Contact Us"
                    image={callCenter}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
