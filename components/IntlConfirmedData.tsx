import React from 'react';

import moment from 'moment';

import { AiOutlineInfoCircle } from 'react-icons/ai';

interface props {
  data: Partial<{ total: number; new: number } | undefined>;
  type: 'Cases' | 'Deaths' | 'Vaccinated' | 'Booster';
}

const IntlConfirmedData = ({ data, type }: props) => {
  return (
    <div className="m-2 h-auto w-full rounded bg-white p-2 px-4 pt-6 shadow">
      <div className="flex items-center ">
        <span className="text-md inline font-bold leading-[1px] text-[#747474]">
          Total {type}
        </span>

        <div className="group relative z-20 mx-2 inline-block">
          <span className="invisible absolute top-[-110px] z-10 w-[200px] rounded bg-stone-800 p-2 text-sm text-white group-hover:visible">
            Total confirmed cases of COVID-19. Counts can include probable
            cases, where reported.
          </span>
          <AiOutlineInfoCircle size={16} color="#747474"></AiOutlineInfoCircle>
        </div>
      </div>

      <div className={`my-3 h-[2px] w-full ${hrColor(type)} rounded-lg`}></div>

      <span className="relative block text-xl font-bold">
        {data !== undefined
          ? data?.total?.toLocaleString('en-US')
          : 'undefined'}
      </span>
      {(type === 'Cases' || type === 'Deaths') && (
        <span className="my-2 block text-sm italic text-stone-600">{`+${data?.new?.toLocaleString(
          'en-US'
        )} as of ${moment().format('MMM. Do YYYY')}`}</span>
      )}
    </div>
  );
};

const hrColor = (type: string) => {
  switch (type) {
    case 'Cases':
      return 'bg-yellow-500';
    case 'Deaths':
      return 'bg-red-500';
    case 'Vaccinated':
      return 'bg-blue-500';
    case 'Booster':
      return 'bg-green-500';
    default:
      return `bg-stone-500`;
  }
};

export default IntlConfirmedData;
