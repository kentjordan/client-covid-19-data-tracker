export interface IDashboard {
  date: string;
  total_cases: number;
  new_cases: number;
  total_deaths: number;
  new_deaths: number;
  total_vaccinations: number;
  total_boosters: number;
  people_vaccinated: number;
  people_fully_vaccinated: number;
  top_5_countries?: Array<unknown>;
  historial_data?: {
    vaccinated: Array<unknown>;
    cases: Array<unknown>;
    deaths: Array<unknown>;
  };
}
