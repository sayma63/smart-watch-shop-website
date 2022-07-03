
import React from 'react';
import './Dashboard.css'

import { LineChart, Line, XAxis, YAxis, Legend, CartesianGrid, Tooltip, ResponsiveContainer, Bar, BarChart, } from 'recharts';


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
        <div >
           
           
            <div className=' row ' >
            
                <div className=' col-12 col-lg-6' >
                 
                  <div>
                    <h1 className='heading'>MONTH WISE SELL</h1>
                    </div>

                  <LineChart
                        width={500}
                        height={500}
                        data={data}
                        

                    >

                       
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line dataKey="sell" stroke="#8884d8" />


                    </LineChart>
                 

                 
                </div>
          
                <div className=' col-lg-6 col-12'>
                 
                  <div>
                    <h1 className='heading'>Investment VS Revenue</h1>
                    </div>
 
           
           <BarChart
          width={500}
          height={500}
          data={data}
            
        >
            <div>
                    <h1 className='heading'>Investment VS Revenue</h1>
                    </div>
 
           
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
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
                 
           
                </div>
            </div>


        </div>




        



    );
};

export default Dashboard;