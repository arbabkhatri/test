import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * @typedef {{
 *   name: string,
 *   price: number,
 *   date: string,
 * }} DataPoint
 *
 * @param {{
 *   data: DataPoint[],
 *   metalName: string,
 * }} props
 */
const HistoricalDataChart = ({ data, metalName }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="price" name={metalName} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HistoricalDataChart;