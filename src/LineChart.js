import React from 'react';
import { Line } from 'react-chartjs-2';

// const data = {
//     labels: ['1', '2', '3', '4', '5', '6'],
//     datasets: [
//         {
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             fill: false,
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgba(255, 99, 132, 0.2)',
//         },
//     ],
// };

const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [{
        label: 'Monthly Earning',
        data: [5, 9, 7, 8, 5, 3, 5, 4],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const LineChart = () => (
    <>
        <div className='header'>
            <h4 style={{ fontSize: 16, paddingLeft: 20 }}>Monthly Earning</h4>
        </div>
        <Line data={data} options={options} width={'90%'} height={'70%'} />
    </>
);

export default LineChart;