import { useParams } from 'react-router-dom';
import InfoBar from './components/InfoBar';
import Stepper from './components/Stepper';
import TableInfo from './components/TableInfo';
import DelAddress from './components/DelAddress';
import callCenter from './assets/callCenter.png';
import HelpDiv from './components/HelpDiv';

export default function Tracking() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="flex flex-col h-full mx-10  justify-center items-center my-16">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col rounded-xl  border border-gray-200">
          <InfoBar />
          <hr />
          <Stepper id="40106705" />
        </div>

        <div className="grid grid-cols-4 my-10 gap-5 ">
          <div className="col-span-3  rounded-xl border overflow-hidden">
            <TableInfo />
          </div>

          <div className="col-span-1 ">
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
  );
}
