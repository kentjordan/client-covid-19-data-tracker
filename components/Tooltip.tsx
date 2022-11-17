import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface props {
  className: string;
  type: string;
}

const Tooltip = ({ className, type }: props) => {
  return (
    <div className={`group relative z-20 inline-block ${className}`}>
      <span className="invisible absolute top-[-110px] z-10 w-[200px] rounded bg-stone-800 p-2 text-sm text-white group-hover:visible">
        {generateDescription(type)}
      </span>
      <AiOutlineInfoCircle size={16} color="#747474" />
    </div>
  );
};

const generateDescription = (type: string) => {
  switch (type) {
    case 'Cases':
      return 'Total confirmed cases of COVID-19. Counts can include probable cases, where reported.';
    case 'Deaths':
      return 'Total deaths attributed to COVID-19. Counts can include probable deaths, where reported.';
    case 'Vaccinated':
      return 'Total number of people who received at least one vaccine dose.';
    case 'Booster':
      return 'Total number of COVID-19 vaccination booster doses administered (doses administered beyond the number prescribed by the vaccination protocol).';
    default:
      return ``;
  }
};

export default Tooltip;
