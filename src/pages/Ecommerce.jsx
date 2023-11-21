import React from 'react';
 
import { Header } from '../components';
 
import Pie from './Charts/Pie.jsx';
import Bar from './Charts/Bar.jsx';
import Customers from './Customers.jsx';

 

const Ecommerce = () => {
  

  return (
    <div className="flex flex-col">
      

      <div className="flex w-full justify-between pl-10 pr-10 border-1 border-gray-300 mt-4">
        <div className="flex w-400 justify-between">
        <Header category="Active Students" title="5000" />
        <Header category="Active Coaches" title="5" />
        </div>
        <div className="flex w-1/2 justify-between">
        <button type="button" class="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-white focus:outline-none bg-zinc-700 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Students</button>
        <button type="button" class="py-2 px-5 me-2 mb-2 mt-2 text-sm font-medium text-white focus:outline-none bg-zinc-700  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Collect fee</button>
        <button type="button" class="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-white focus:outline-none bg-zinc-700 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Enquiry</button>
        </div>
      </div>
      <div className="flex w-full">
      <Pie/>
      <Bar/>
      </div>
      <Customers/>
      
    </div>
  );
};

export default Ecommerce;
