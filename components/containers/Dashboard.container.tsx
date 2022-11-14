import React from "react";
import IntlConfirmedData from '@components/IntlConfirmedData'
import LineChart from "@components/charts/LineChart";
import Table from "@components/ui/tables/Table";

const DashboardContainer = () => {
    return (
        <div className="flex flex-col justify-center items-center min-w-[425px] px-12 py-16 ">

            <h1 className="text-center text-2xl font-bold mt-16">International Data</h1>
            <p className="text-center text-base mt-4 max-w-[64ch] text-[#747474]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis nisl, imperdiet non sollicitudin ac, egestas quis lacus. Praesent volutpat justo non ipsum efficitur vestibulum. In id risus nunc</p>
            <p className="text-center text-base mt-4 max-w-[64ch] text-[#747474]">⚠️ WARNING Data is not yet official! </p>

            <div className="w-[128px] h-[1px] bg-stone-300 mt-8 mb-12"></div>

            <div className="w-full flex flex-wrap justify-center">

                <div className="flex w-[580px]">
                    <IntlConfirmedData data={34124313} type={'Cases'} />
                    <IntlConfirmedData data={43124432} type={'Deaths'} />
                </div>
                <div className="flex w-[580px]">
                    <IntlConfirmedData data={62143222} type={'Recovered'} />
                    <IntlConfirmedData data={62143222} type={'Vaccinated'} />
                </div>

            </div>

            <div className="w-full h-auto flex flex-wrap justify-center mt-24">

                <div className="max-w-[560px] w-full m-4">
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold mb-4">Top 5 Countries by Cases</h1>
                        <Table fields={[
                            { rank: 1, country_name: 'USA', total_cases: 1234567, total_deaths: 1234567, total_vaccinated: 1234567, iso_alpha_3: 'USA' },
                            { rank: 2, country_name: 'PH', total_cases: 1234567, total_deaths: 1234567, total_vaccinated: 1234567, iso_alpha_3: 'PHL' },
                            { rank: 3, country_name: 'CHINA', total_cases: 1234567, total_deaths: 1234567, total_vaccinated: 1234567, iso_alpha_3: 'CHN' },
                            { rank: 4, country_name: 'KOREA', total_cases: 1234567, total_deaths: 1234567, total_vaccinated: 1234567, iso_alpha_3: 'KOR' },
                            { rank: 5, country_name: 'ISRAEL', total_cases: 1234567, total_deaths: 1234567, total_vaccinated: 1234567, iso_alpha_3: 'ISR' }
                        ]} />
                    </div>
                    <LineChart label="Deaths" />
                </div>

                <div className="max-w-[560px] w-full m-4">
                    <LineChart label="Vaccinated" />
                    <LineChart label="Recovered" />
                </div>

            </div>
        </div>
    );
};

export default DashboardContainer;
