import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import {BsPersonFill } from 'react-icons/bs';
import { FaChildren,FaMoneyBillTransfer } from "react-icons/fa6";
import { BiBarChartAlt2  } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
 
 
 
import { GrSchedulePlay } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
 
 

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

 
 
export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

      Create a New React App
      When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

      As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

      Learn React
      People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

      If you prefer to learn by doing, start with our practical tutorial.
      If you prefer to learn concepts step by step, start with our guide to main concepts.
      Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

      First Examples
      The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

      React for Beginners
      If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!

      React for Designers
      If you’re coming from a design background, these resources are a great place to get started.

      JavaScript Resources
      The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
    </h3>
  </div>
);
const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);
 

 
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
 

export const barChartData = [
  [
    { x: 'Revenue', y: 46 },
    { x: 'Students', y: 27 },
    // { x: 'CHN', y: 26 },
  ],
  [
    { x: 'Revenue', y: 37 },
    { x: 'Students', y: 23 },
    // { x: 'CHN', y: 18 },
  ],
  [
    { x: 'Revenue', y: 38 },
    { x: 'Students', y: 17 },
    // { x: 'CHN', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Jun',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Jul',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Aug',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center' },
  { field: 'ProjectName',
    headerText: 'Members',
    width: '150',
    textAlign: 'Center' },
  { field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus },
  {
    field: 'Weeks',
    headerText: 'Time',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },
  { field: 'Budget',
    headerText: 'Subject',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center' },

  { field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const links = [
  {
    title: 'Main Menu',
    links: [
      {
        name: 'Dashboard',
        icon: <BiBarChartAlt2  />,
      },
      {
        name: 'Academy Managment',
        icon: <FiShoppingBag />
      }
    ],
  },

  {
    
    title: 'More',
    links: [
      {
        name: 'Students',
        icon: <FaChildren />,
      },
      {
        name: 'Fee payment',
        icon: <FaMoneyBillTransfer />,
      },
      {
        name: 'Enquiries',
        icon: <IoMdContacts />,
      },
      {
        name: 'Caoches',
        icon: <BsPersonFill />,
      },
      {
        name: 'Schedule',
        icon: <GrSchedulePlay />,
      },
    ],
  },
   
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'online',
    StatusBg: '#8BE78B',
    Weeks: '3:00pm - 4:00pm',
    Budget: 'Computer Science',
    Location: 'India',
  },
  {
    CustomerID: 1002,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'online',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '6:00pm - 7:00pm',
    Budget: 'DSA',
    Location: 'India',
  },
  {
    CustomerID: 1003,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'offline',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '4:00pm - 5:00pm',
    Budget: 'dev',
    Location: 'USA',
  },
  {
    CustomerID: 1004,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'online',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '2:00pm - 3:00pm',
    Budget: 'Computer Science',
    Location: 'USA',
  },
  {
    CustomerID: 1005,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'error',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '1:00pm - 2:00pm',
    Budget: 'DSA',
    Location: 'USA',
  },
  {
    CustomerID: 1006,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'online',
    StatusBg: '#8BE78B',
    Weeks: '3:00pm - 4:00pm',
    Budget: 'dev',
    Location: 'India',
  },
  {
    CustomerID: 1007,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'online',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '5:00pm - 6:00pm',
    Budget: 'Computer Science',
    Location: 'India',
  },
  {
    CustomerID: 1008,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'offline',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '4:00pm - 5:00pm',
    Budget: 'DSA',
    Location: 'USA',
  },
  {
    CustomerID: 1009,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'online',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '3:00pm - 4:00pm',
    Budget: 'dev',
    Location: 'USA',
  },
  {
    CustomerID: 1010,

    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    ProjectName: 'Weekly WP Theme',
    Status: 'error',
    CustomerImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '4:00pm - 5:00pm',
    Budget: 'DSA',
    Location: 'USA',
  },
  {
    CustomerID: 1011,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'online',
    StatusBg: '#8BE78B',
    Weeks: '4:00pm - 5:00pm',
    Budget: 'Computer Science',
    Location: 'India',
  },
  {
    CustomerID: 1012,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'online',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '4:00pm - 5:00pm',
    Budget: 'dev',
    Location: 'India',
  },
  {
    CustomerID: 1013,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'offline',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '5:00pm - 6:00pm',
    Budget: 'DSA',
    Location: 'USA',
  },
  {
    CustomerID: 1014,

    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    ProjectName: 'MedicalPro WP Theme',
    Status: 'online',
    CustomerImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '5:00pm - 6:00pm',
    Budget: 'Computer Science',
    Location: 'USA',
  },
  // {
  //   CustomerID: 1015,

  //   CustomerName: 'Michael',
  //   CustomerEmail: 'michael@gmail.com',
  //   ProjectName: 'Weekly WP Theme',
  //   Status: 'Cancel',
  //   CustomerImage:
  //     avatar2,
  //   StatusBg: 'red',
  //   Weeks: '34',
  //   Budget: '$16.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1016,
  //   CustomerName: 'Nirav Joshi',
  //   CustomerEmail: 'nirav@gmail.com',
  //   CustomerImage:
  //     avatar2,
  //   ProjectName: 'Hosting Press HTML',
  //   Status: 'Active',
  //   StatusBg: '#8BE78B',
  //   Weeks: '40',
  //   Budget: '$2.4k',
  //   Location: 'India',
  // },
  // {
  //   CustomerID: 1017,

  //   CustomerName: 'Sunil Joshi',
  //   CustomerEmail: 'sunil@gmail.com',
  //   ProjectName: 'Elite Admin',
  //   Status: 'Active',
  //   CustomerImage:
  //     avatar3,

  //   StatusBg: '#8BE78B',
  //   Weeks: '11',
  //   Budget: '$3.9k',
  //   Location: 'India',
  // },
  // {
  //   CustomerID: 1018,

  //   CustomerName: 'Andrew McDownland',
  //   CustomerEmail: 'andrew@gmail.com',
  //   ProjectName: 'Real Homes WP Theme',
  //   Status: 'Pending',
  //   CustomerImage:
  //     avatar4,
  //   StatusBg: '#FEC90F',
  //   Weeks: '19',
  //   Budget: '$24.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1019,

  //   CustomerName: 'Christopher Jamil',
  //   CustomerEmail: 'jamil@gmail.com',
  //   ProjectName: 'MedicalPro WP Theme',
  //   Status: 'Completed',
  //   CustomerImage:
  //     avatar,
  //   StatusBg: '#8BE78B',
  //   Weeks: '34',
  //   Budget: '$16.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1020,

  //   CustomerName: 'Michael',
  //   CustomerEmail: 'michael@gmail.com',
  //   ProjectName: 'Weekly WP Theme',
  //   Status: 'Cancel',
  //   CustomerImage:
  //     avatar2,
  //   StatusBg: 'red',
  //   Weeks: '34',
  //   Budget: '$16.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1021,
  //   CustomerName: 'Nirav Joshi',
  //   CustomerEmail: 'nirav@gmail.com',
  //   CustomerImage:
  //     avatar2,
  //   ProjectName: 'Hosting Press HTML',
  //   Status: 'Active',
  //   StatusBg: '#8BE78B',
  //   Weeks: '40',
  //   Budget: '$2.4k',
  //   Location: 'India',
  // },
  // {
  //   CustomerID: 1022,

  //   CustomerName: 'Sunil Joshi',
  //   CustomerEmail: 'sunil@gmail.com',
  //   ProjectName: 'Elite Admin',
  //   Status: 'Active',
  //   CustomerImage:
  //     avatar3,

  //   StatusBg: '#8BE78B',
  //   Weeks: '11',
  //   Budget: '$3.9k',
  //   Location: 'India',
  // },
  // {
  //   CustomerID: 1023,

  //   CustomerName: 'Andrew McDownland',
  //   CustomerEmail: 'andrew@gmail.com',
  //   ProjectName: 'Real Homes WP Theme',
  //   Status: 'Pending',
  //   CustomerImage:
  //     avatar4,
  //   StatusBg: '#FEC90F',
  //   Weeks: '19',
  //   Budget: '$24.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1024,

  //   CustomerName: 'Christopher Jamil',
  //   CustomerEmail: 'jamil@gmail.com',
  //   ProjectName: 'MedicalPro WP Theme',
  //   Status: 'Completed',
  //   CustomerImage:
  //     avatar,
  //   StatusBg: '#8BE78B',
  //   Weeks: '34',
  //   Budget: '$16.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1025,

  //   CustomerName: 'Michael',
  //   CustomerEmail: 'michael@gmail.com',
  //   ProjectName: 'Weekly WP Theme',
  //   Status: 'Cancel',
  //   CustomerImage:
  //     avatar2,
  //   StatusBg: 'red',
  //   Weeks: '34',
  //   Budget: '$16.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1026,
  //   CustomerName: 'Nirav Joshi',
  //   CustomerEmail: 'nirav@gmail.com',
  //   CustomerImage:
  //     avatar2,
  //   ProjectName: 'Hosting Press HTML',
  //   Status: 'Active',
  //   StatusBg: '#8BE78B',
  //   Weeks: '40',
  //   Budget: '$2.4k',
  //   Location: 'India',
  // },
  // {
  //   CustomerID: 1027,

  //   CustomerName: 'Sunil Joshi',
  //   CustomerEmail: 'sunil@gmail.com',
  //   ProjectName: 'Elite Admin',
  //   Status: 'Active',
  //   CustomerImage:
  //     avatar3,

  //   StatusBg: '#8BE78B',
  //   Weeks: '11',
  //   Budget: '$3.9k',
  //   Location: 'India',
  // },
  // {
  //   CustomerID: 1028,

  //   CustomerName: 'Andrew McDownland',
  //   CustomerEmail: 'andrew@gmail.com',
  //   ProjectName: 'Real Homes WP Theme',
  //   Status: 'Pending',
  //   CustomerImage:
  //     avatar4,
  //   StatusBg: '#FEC90F',
  //   Weeks: '19',
  //   Budget: '$24.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1029,

  //   CustomerName: 'Christopher Jamil',
  //   CustomerEmail: 'jamil@gmail.com',
  //   ProjectName: 'MedicalPro WP Theme',
  //   Status: 'Completed',
  //   CustomerImage:
  //     avatar,
  //   StatusBg: '#8BE78B',
  //   Weeks: '34',
  //   Budget: '$16.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1030,

  //   CustomerName: 'Michael',
  //   CustomerEmail: 'michael@gmail.com',
  //   ProjectName: 'Weekly WP Theme',
  //   Status: 'Cancel',
  //   CustomerImage:
  //     avatar2,
  //   StatusBg: 'red',
  //   Weeks: '34',
  //   Budget: '$16.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1031,
  //   CustomerName: 'Nirav Joshi',
  //   CustomerEmail: 'nirav@gmail.com',
  //   CustomerImage:
  //     avatar2,
  //   ProjectName: 'Hosting Press HTML',
  //   Status: 'Active',
  //   StatusBg: '#8BE78B',
  //   Weeks: '40',
  //   Budget: '$2.4k',
  //   Location: 'India',
  // },
  // {
  //   CustomerID: 1032,

  //   CustomerName: 'Sunil Joshi',
  //   CustomerEmail: 'sunil@gmail.com',
  //   ProjectName: 'Elite Admin',
  //   Status: 'Active',
  //   CustomerImage:
  //     avatar3,

  //   StatusBg: '#8BE78B',
  //   Weeks: '11',
  //   Budget: '$3.9k',
  //   Location: 'India',
  // },
  // {
  //   CustomerID: 1033,

  //   CustomerName: 'Andrew McDownland',
  //   CustomerEmail: 'andrew@gmail.com',
  //   ProjectName: 'Real Homes WP Theme',
  //   Status: 'Pending',
  //   CustomerImage:
  //     avatar4,
  //   StatusBg: '#FEC90F',
  //   Weeks: '19',
  //   Budget: '$24.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1034,

  //   CustomerName: 'Christopher Jamil',
  //   CustomerEmail: 'jamil@gmail.com',
  //   ProjectName: 'MedicalPro WP Theme',
  //   Status: 'Completed',
  //   CustomerImage:
  //     avatar,
  //   StatusBg: '#8BE78B',
  //   Weeks: '34',
  //   Budget: '$16.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1035,

  //   CustomerName: 'Michael',
  //   CustomerEmail: 'michael@gmail.com',
  //   ProjectName: 'Weekly WP Theme',
  //   Status: 'Cancel',
  //   CustomerImage:
  //     avatar2,
  //   StatusBg: 'red',
  //   Weeks: '34',
  //   Budget: '$16.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1036,
  //   CustomerName: 'Nirav Joshi',
  //   CustomerEmail: 'nirav@gmail.com',
  //   CustomerImage:
  //     avatar2,
  //   ProjectName: 'Hosting Press HTML',
  //   Status: 'Active',
  //   StatusBg: '#8BE78B',
  //   Weeks: '40',
  //   Budget: '$2.4k',
  //   Location: 'India',
  // },
  // {
  //   CustomerID: 1037,

  //   CustomerName: 'Sunil Joshi',
  //   CustomerEmail: 'sunil@gmail.com',
  //   ProjectName: 'Elite Admin',
  //   Status: 'Active',
  //   CustomerImage:
  //     avatar3,

  //   StatusBg: '#8BE78B',
  //   Weeks: '11',
  //   Budget: '$3.9k',
  //   Location: 'India',
  // },
  // {
  //   CustomerID: 1038,

  //   CustomerName: 'Andrew McDownland',
  //   CustomerEmail: 'andrew@gmail.com',
  //   ProjectName: 'Real Homes WP Theme',
  //   Status: 'Pending',
  //   CustomerImage:
  //     avatar4,
  //   StatusBg: '#FEC90F',
  //   Weeks: '19',
  //   Budget: '$24.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1039,
  //   CustomerName: 'Christopher Jamil',
  //   CustomerEmail: 'jamil@gmail.com',
  //   ProjectName: 'MedicalPro WP Theme',
  //   Status: 'Completed',
  //   CustomerImage:
  //     avatar,
  //   StatusBg: '#8BE78B',
  //   Weeks: '34',
  //   Budget: '$16.5k',
  //   Location: 'USA',
  // },
  // {
  //   CustomerID: 1040,
  //   CustomerName: 'Michael',
  //   CustomerEmail: 'michael@gmail.com',
  //   ProjectName: 'Weekly WP Theme',
  //   Status: 'Cancel',
  //   CustomerImage:
  //     avatar2,
  //   StatusBg: 'red',
  //   Weeks: '34',
  //   Budget: '$16.5k',
  //   Location: 'USA',
  // },

];

export const pieChartData = [
  { x: 'Amount Pending', y: 8, text: '8%' },
  { x: 'Amount Recieved', y: 18, text: '18%' },
  // { x: 'Production', y: 15, text: '15%' },
  // { x: 'License', y: 11, text: '11%' },
  // { x: 'Facilities', y: 18, text: '18%' },
  // { x: 'Taxes', y: 14, text: '14%' },
  // { x: 'Insurance', y: 16, text: '16%' },
];

 

 

 
