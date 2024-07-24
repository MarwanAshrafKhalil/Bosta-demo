import moment from 'moment';
import { TransitEventsType } from '../dataTypes';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type TableInfoType = {
  info: TransitEventsType[];
};

export default function TableInfo({ info }: TableInfoType) {
  const [updatedInfo, setUpdatedInfo] = useState<TransitEventsType[]>([]);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    const newInfo = info.map((item) => {
      return {
        ...item,
        state: item.state.split('_').join(' ').toLowerCase(),
      };
    });

    setUpdatedInfo(newInfo);
  }, [info]);

  console.log(updatedInfo);
  return (
    <>
      {updatedInfo && (
        <div className="overflow-x-auto">
          <table className="table bg-white px-5">
            {/* head */}
            <thead className="bg-gray-100">
              <tr>
                <th>{t(`Branch`)}</th>
                <th>{t(`Date`)}</th>
                <th>{t(`Time`)}</th>
                <th>{t(`Details`)}</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {updatedInfo &&
                updatedInfo?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.hub}</td>
                    <td>{moment(item.timestamp).format('MMM Do YY')}</td>
                    <td>{moment(item.timestamp).utc().format('HH:mm:ss')}</td>
                    <td>{t(`${item.state}`)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
