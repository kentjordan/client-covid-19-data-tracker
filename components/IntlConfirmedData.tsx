import React from 'react';

import moment from 'moment';

import { AiOutlineInfoCircle } from 'react-icons/ai';
import Tooltip from './Tooltip';

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
        <Tooltip className="mx-2" type={type} />
      </div>

      <div className={`my-3 h-[2px] w-full ${hrColor(type)} rounded-lg`}></div>

      <span className={`relative block text-xl font-bold`}>
        {data !== undefined
          ? data?.total?.toLocaleString('en-US')
          : 'undefined'}
      </span>
      {(type === 'Cases' || type === 'Deaths') && (
        <>
          <span
            className={`my-2 text-sm font-bold italic ${generateTextColor(
              type
            )}`}
          >
            {`+${data?.new?.toLocaleString('en-US')} `}
          </span>
          <span className=" text-sm font-normal not-italic text-stone-600">
            {`as of ${moment().format('MMM. Do YYYY')}`}
          </span>
        </>
      )}
    </div>
  );
};

const generateTextColor = (type: string) => {
  switch (type) {
    case 'Cases':
      return 'text-yellow-500';
    case 'Deaths':
      return 'text-red-500';
    case 'Vaccinated':
      return 'text-blue-500';
    case 'Booster':
      return 'text-green-500';
    default:
      return `text-stone-500`;
  }
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
