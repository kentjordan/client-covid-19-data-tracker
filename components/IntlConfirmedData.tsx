import React from 'react';

import moment from 'moment';

interface props {
  data: Partial<{ total: number; new: number } | undefined>;
  type: 'Cases' | 'Deaths' | 'Vaccinated' | 'Booster';
}

const IntlConfirmedData = ({ data, type }: props) => {
  return (
    <div className="m-2 h-auto w-full rounded  bg-white p-4 px-4 pt-6 shadow">
      <span className="text-md inline-block font-bold text-[#747474]">
        Total {type}
      </span>

      {/* <div className="relative inline-block">
        <span className=" l-0 absolute top-0 z-10 mt-[-100px] w-[200px] rounded bg-stone-800 p-2 text-sm text-white">
          Total confirmed cases of COVID-19. Counts can include probable cases,
          where reported.
        </span>
        <AiOutlineInfoCircle
          className="mx-1"
          size={16}
          color="#747474"
        ></AiOutlineInfoCircle>
      </div> */}

      <div className={`my-1 h-[3px] w-full ${hrColor(type)} rounded-lg`}></div>
      <span className="relative mt-4 block text-xl font-bold">
        {data !== undefined
          ? data?.total?.toLocaleString('en-US')
          : 'undefined'}
      </span>
      {(type === 'Cases' || type === 'Deaths') && (
        <span className="my-1 block text-sm italic text-stone-600">{`+${data?.new?.toLocaleString(
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
