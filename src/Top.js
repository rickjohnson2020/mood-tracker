import React, { useState, useEffect } from 'react'
import { getMood } from './api/getMood'
import { MoodContent } from './components/MoodContent'
import { PieChart, Pie, Cell } from "recharts";
import useMedia from 'use-media';

import './Top.css'


const COLORS = ['#FFCC33', '#98FB98', '#DDA0DD', '#D3D3D3'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (

      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>

  );
};





export const Top = () => {
  const initialState = {
    id: '',
    date: '',
    mood: '',
  }

  const[mood, setMood] = useState(initialState);
  const[loading, setLoading] = useState(true);


  useEffect(() => {
    getMood()
    .then(d => {
      setMood(d)
      setLoading(false)
    })
    .catch(err => console.log(err));
  },[])

  // added
  let data = [
    { name: 'rad', count: 0 },
    { name: 'good', count: 0 },
    { name: 'meh', count: 0 },
    { name: 'bad', count: 0 },
  ];

  // ここにmap関数で取り出し、個数を数える
  Array.from(mood).map((value) => {
    if (value.mood === 'rad') {
      data[0].count += 1;
    }else if(value.mood === 'good') {
      data[1].count += 1;
    }else if(value.mood === 'meh') {
      data[2].count += 1;
    }else{
      data[3].count += 1;
    }
  });

  const isWide = useMedia({minWidth: '1000px'});

  return(
    <div>
      {
        loading ?
        <h1>loading...</h1>
        :

        (
          isWide ?
          <div className='whole-body'>

            <div className='Top'>
            {Array.from(mood).map( d => <MoodContent {...d}  /> )}
            </div>

            <div className='pie-chart-parent'>
              <div>
                <h1 className='label'>rad</h1>
                <div className='label-color1'></div>
                <h1 className='label'>good</h1>
                <div className='label-color2'></div>
                <h1 className='label'>meh</h1>
                <div className='label-color3'></div>
                <h1 className='label'>bad</h1>
                <div className='label-color4'></div>
              </div>

              <PieChart className='pie-chart-child' width={400} height={400}>
                <Pie
                  data={data}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>

            </div>

          </div>
          :
          <div className='whole-body'>

            <div className='PhoneTop'>
            {Array.from(mood).map( d => <MoodContent {...d}  /> )}
            </div>

            <div className='PhonePieChartParent'>
              <div>
                <h1 className='label'>rad</h1>
                <div className='label-color1'></div>
                <h1 className='label'>good</h1>
                <div className='label-color2'></div>
                <h1 className='label'>meh</h1>
                <div className='label-color3'></div>
                <h1 className='label'>bad</h1>
                <div className='label-color4'></div>
              </div>

              <PieChart className='pie-chart-child' width={400} height={400}>
                <Pie
                  data={data}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>

            </div>

          </div>

        )
      }
    </div>
  )

}
