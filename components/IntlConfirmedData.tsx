import React from "react";

type props = { data: number, type: 'Cases' | 'Deaths' | 'Vaccinated' | 'Recovered' };

const IntlConfirmedData = ({ data, type }: props) => {

    return (
        <div className="max-w-[256px] w-full h-auto bg-white rounded px-6 pt-8 m-2 shadow">
            <h1 className="font-bold text-md text-[#747474] ">Total {type}</h1>
            <div className={`h-[3px] w-full my-1 ${hrColor(type)} rounded-lg`}></div>
            <h1 className="font-bold text-xl mt-4 relative my-4">{data.toLocaleString('en-US')}</h1>
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
        case 'Recovered':
            return 'bg-green-500';
        default:
            return `bg-stone-500`;
    }
}

export default IntlConfirmedData;
