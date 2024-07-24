import moment from 'moment';
import { useTranslation } from 'react-i18next';

type InfoBarType = {
  shipmentId: string;
  status: {
    state: string;
    timestamp: string;
  };
  provider: string;
  estDate: string;
};

export default function InfoBar({
  shipmentId,
  status,
  provider,
  estDate,
}: InfoBarType) {
  const [t] = useTranslation();

  return (
    <>
      {shipmentId && (
        <div className="flex flex-col sm:flex-row  gap-10  justify-center md:justify-between mx-auto my-5 md:m-5">
          <div className="flex flex-col">
            <span className="text-gray-400">
              {t(`Shipment ID`)} {shipmentId}
            </span>
            <p className="font-semibold"> {status.state.toLowerCase()}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">{t(`Last Update`)}</span>
            <p className="font-semibold">
              {moment(status.timestamp).format('MMM Do YY')}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">{t(`Seller Name`)}</span>
            <p className="font-semibold"> {provider}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">{t(`Delivery Date`)}</span>
            <p className="font-semibold">
              {' '}
              {moment(estDate).format('MMM Do YY')}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
