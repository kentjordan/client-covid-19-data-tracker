import React from 'react';
import FlagUS from '@assets/icons/countries/us.svg';
import Image from 'next/image';

interface CountryFields {
  rank: number;
  country_name: string;
  total_cases?: number;
  total_deaths?: number;
  total_vaccinated?: number;
  iso_alpha_3: string;
}

interface Props {
  fields?: Array<CountryFields>;
}

const Table = ({ fields }: Props) => {
  return (
    <div className="h-[auto] overflow-auto">
      <table className="text-center text-sm">
        <thead className="border-b">
          <tr>
            <th className="px-4 py-8 text-stone-400">RANK</th>
            <th className="px-4 py-8 text-stone-400">COUNTRY</th>
            <th className="px-4 py-8 text-stone-400">TOTAL CASES</th>
            <th className="px-4 py-8 text-stone-400">TOTAL DEATHS</th>
            <th className="px-4 py-8 text-stone-400">TOTAL REOCOVERED</th>
          </tr>
        </thead>
        <tbody>
          {fields?.map((field, i) => {
            return (
              <tr key={i} className="border-b">
                <td className="py-8">{field.rank}</td>
                <td className="py-8">
                  <div className="flex items-center">
                    <Image
                      className="mr-1"
                      src={`https://countryflagsapi.com/png/${field.iso_alpha_3.toLowerCase()}`}
                      width={32}
                      height={32}
                      alt={`${field.iso_alpha_3} Flag`}
                    />
                    <p className="ml-1 text-sm">{field.country_name}</p>
                  </div>
                </td>
                <td className="py-8">
                  {field.total_cases === undefined
                    ? 'undefined'
                    : field.total_cases.toLocaleString('en-US')}
                </td>
                <td className="py-8">
                  {field.total_deaths === undefined
                    ? 'undefined'
                    : field.total_deaths.toLocaleString('en-US')}
                </td>
                <td className="py-8">
                  {field.total_vaccinated === undefined
                    ? 'undefined'
                    : field.total_vaccinated.toLocaleString('en-US')}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
