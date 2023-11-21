import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => (
  <div className="m-4 md:m-10 mt-8 p-10 w-1/2 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    {/* <ChartsHeader category="" title="Project Cost Breakdown" /> */}
    <div className="flex justify-between text-black w-full ">
      <h5>fee payment summary</h5>
      <h5>Last 30 days</h5>
    </div>
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
    <div className="flex justify-between text-sm text-black w-full ">
      <h5>624,000 by 400 students</h5>
      <h5>334,000 by 123 students</h5>
    </div>
  </div>
);

export default Pie;
