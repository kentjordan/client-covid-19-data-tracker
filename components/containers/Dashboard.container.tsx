import React from 'react';
import IntlConfirmedData from '@components/IntlConfirmedData';
import LineChart from '@components/charts/LineChart';
import Table from '@components/ui/tables/Table';

import moment from 'moment';

import { IDashboard } from '@interfaces/models/IDashboard';

const DashboardContainer = (data: IDashboard) => {
  return (
    <div className="flex min-w-[425px] flex-col items-center justify-center px-12 py-16 ">
      <h1 className="mt-12 text-center text-2xl font-bold">
        COVID-19 WORLD DATA
      </h1>

      <p className="mt-4 max-w-[64ch] text-center text-sm text-[#747474]">
        Data was updated {moment('2022-10-31', 'YYYY-MM-DD').fromNow()}
      </p>

      <div className="mt-8 mb-12 h-[1px] w-[90%] bg-stone-300"></div>

      <div className="flex w-full flex-wrap justify-center">
        <div className="flex w-[580px]">
          <IntlConfirmedData
            data={{ total: data.total_cases, new: data.new_cases }}
            type={'Cases'}
          />
          <IntlConfirmedData
            data={{ total: data.total_deaths, new: data.new_deaths }}
            type={'Deaths'}
          />
        </div>
        <div className="flex w-[580px]">
          <IntlConfirmedData data={{ total: 0, new: 0 }} type={'Vaccinated'} />
          <IntlConfirmedData data={{ total: 0, new: 0 }} type={'Booster'} />
        </div>
      </div>

      <div className="mt-24 flex h-auto w-full flex-wrap justify-center">
        <div className="m-4 w-full max-w-[560px]">
          <div className="mb-4">
            <h1 className="mb-4 text-2xl font-bold">
              Top 5 Countries by Cases
            </h1>
            <Table
              fields={[
                {
                  rank: 1,
                  country_name: 'USA',
                  total_cases: undefined,
                  total_deaths: undefined,
                  total_vaccinated: undefined,
                  iso_alpha_3: 'USA',
                },
                {
                  rank: 2,
                  country_name: 'PHILIPPINES',
                  total_cases: undefined,
                  total_deaths: undefined,
                  total_vaccinated: undefined,
                  iso_alpha_3: 'PHL',
                },
                {
                  rank: 3,
                  country_name: 'KOREA',
                  total_cases: undefined,
                  total_deaths: undefined,
                  total_vaccinated: undefined,
                  iso_alpha_3: 'KOR',
                },
                {
                  rank: 4,
                  country_name: 'ISRAEL',
                  total_cases: undefined,
                  total_deaths: undefined,
                  total_vaccinated: undefined,
                  iso_alpha_3: 'ISR',
                },
                {
                  rank: 5,
                  country_name: 'SAUDI',
                  total_cases: undefined,
                  total_deaths: undefined,
                  total_vaccinated: undefined,
                  iso_alpha_3: 'SAU',
                },
              ]}
            />
          </div>
          <LineChart label="Deaths" />
        </div>

        <div className="m-4 w-full max-w-[560px]">
          <LineChart label="Vaccinated" />
          <LineChart label="Recovered" />
        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
