import React from "react";
import IntlConfirmedData from '@components/IntlConfirmedData'
import LineChart from "@components/charts/LineChart";

const DashboardContainer = () => {
    return (
        <div className='bg-[rgb(250,250,250)] flex flex-col justify-center items-center w-full min-h-[100vh] px-12  py-16 relative'>

            <h1 className="text-center text-2xl font-bold mt-16 lg:mt-0">International Data</h1>
            <p className="text-center text-base mt-4 max-w-[64ch] text-[#747474]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis nisl, imperdiet non sollicitudin ac, egestas quis lacus. Praesent volutpat justo non ipsum efficitur vestibulum. In id risus nunc</p>
            <p className="text-center text-base mt-4 max-w-[64ch] text-[#747474]">⚠️ WARNING Data is not yet official! </p>

            <div className="w-[128px] h-[1px] bg-stone-300 mt-8 mb-12"></div>

            <div className="w-full flex flex-wrap justify-center">
                <IntlConfirmedData data={34124313} type={'Cases'} />
                <IntlConfirmedData data={43124432} type={'Deaths'} />
                <IntlConfirmedData data={62143222} type={'Vaccinated'} />
                <IntlConfirmedData data={62143222} type={'Recovered'} />
            </div>

            <div className="w-full h-auto flex flex-wrap justify-center mt-12">
                <div className="max-w-[512px] w-full m-2">
                    <LineChart label="Cases" />
                    <LineChart label="Deaths" />
                </div>
                <div className="max-w-[512px] w-full m-2">
                    <LineChart label="Vaccinated" />
                    <LineChart label="Recovered" />
                </div>

            </div>

        </div>
    );
};

export default DashboardContainer;
