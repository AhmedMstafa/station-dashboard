import gasStation from '../../public/gas-station-svgrepo-com.svg';
import HeaderView from './HeaderView';
import { BsArrowCounterclockwise } from 'react-icons/bs';

export default function HeaderViewWrapper() {
  return (
    <div className="flex gap-10">
      <HeaderView
        icon={<img src={gasStation} alt="gas station image" />}
        numbers={'2/3'}
        title={
          <>
            monitored
            <br />
            stations
          </>
        }
      />
      <HeaderView
        icon={
          <div className="flex mt-auto">
            <BsArrowCounterclockwise className="w-10 h-10 text-text-color -scale-x-100 rotate-120" />
          </div>
        }
        numbers={'20s'}
        title={
          <>
            last
            <br />
            update
          </>
        }
      />
    </div>
  );
}
