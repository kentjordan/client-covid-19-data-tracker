import React from "react";

import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type props = {
    label: string,
}

const LineChart = ({ label }: props) => {
    return <div className="max-w-[512px] w-full my-2 shadow rounded border-[1px] border-stone-300 p-8">
        <h1 className="font-bold mb-5 text-2xl">{label}</h1>
        <Line data={{

            labels: ['Jan', 'Feb', 'March', 'April'],
            datasets: [
                {
                    label: label,
                    data: [1, 34, 5, 4, 56, 86, 24, 32, 56, 87, 83, 54, 21, 11, 22, 33, 33, 34, 7, 97, 54, 75]
                },

            ]
        }} />
    </div>
};

export default LineChart;
