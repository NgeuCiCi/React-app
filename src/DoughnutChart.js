import { blue } from '@material-ui/core/colors';
import React from 'react';
import './Hoidap.css';

import { Doughnut } from 'react-chartjs-2';
import { BiCalendarEvent } from "react-icons/bi";

const data = {
    labels: ['Red', 'Blue', 'Yellow'],

    datasets: [
        {
            label: '# of Votes',
            data: [2305.35, 1184.4, 740.25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1,
        },
    ],
};

const DoughnutChart = () => (
    <>
        <div className='header'>
            <h4 style={{ textJustify: "inherit", fontSize: 16, marginBottom: 24 }}> Sales Report</h4>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
                <BiCalendarEvent style={{ marginTop: 3, fontSize: 18, backgroundColor: blue }} />
                <p className="reportDate">Jan 01 - Jan 31</p>
                <b >$4230</b>
            </div>
        </div>
        <Doughnut data={data} height={150} />
    </>
);

export default DoughnutChart;