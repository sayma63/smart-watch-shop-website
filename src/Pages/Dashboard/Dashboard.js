
import React from 'react';
import './Dashboard.css'

import { LineChart, Line, XAxis, YAxis, Legend, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart, AreaChart, ReferenceLine, Area, } from 'recharts';


const Dashboard = () => {



    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
       

                <div className=' container  ' >


                   <div className="row">
                   <div className=' col col-12 col-md-6'>
                        <h1 className='heading'>MONTH WISE SELL</h1>
 
                       
                      <ResponsiveContainer width='100%' height={500}>
                      <LineChart width={500} height={500} data={data}>
                            
                            <Line dataKey={'sell'}stroke="#82ca9d" ></Line>
                            <XAxis dataKey={'month'}></XAxis>
                            <Tooltip></Tooltip>
                            <YAxis></YAxis>
                            <Legend></Legend>
                        </LineChart>
                      </ResponsiveContainer>
                           
                 
                      
                    </div>



                    <div  className=' col col-12 col-md-6'>
                        <h1 className='heading'>Investment VS Revenue</h1>
                      <ResponsiveContainer  width='100%' height={500}>
                      <BarChart
                             width={500}
                            height={500}
                            data={data}

                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>

                    </div>
                   </div>


                </div>










          


















    );
};

export default Dashboard;