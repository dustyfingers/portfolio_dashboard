import React from 'react';
import { LineChart, Line } from 'recharts'; 

const HitTimeline = () => {

    const data = [
        {
            name: 'Page A',
            uv: 400,
            pv: 2400,
            amt: 2400
        },
        {
            name: 'Page B',
            uv: 600,
            pv: 2000,
            amt: 2400
        },
        {
            name: 'Page C',
            uv: 950,
            pv: 2200,
            amt: 2400
        },
        {
            name: 'Page D',
            uv: 800,
            pv: 1900,
            amt: 2400
        },
        {
            name: 'Page E',
            uv: 750,
            pv: 1850,
            amt: 2400
        }
    ]

    return (
        <LineChart width={400} height={400} data={data} >
        </LineChart>
    );

}

export default HitTimeline;