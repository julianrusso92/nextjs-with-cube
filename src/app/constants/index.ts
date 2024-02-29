import cubejs from "@cubejs-client/core";

export const COLORS_SERIES = [
    '#5b8ff9',
    '#5ad8a6',
    '#5e7092',
    '#f6bd18',
    '#6f5efa',
    '#6ec8ec',
    '#945fb9',
    '#ff9845',
    '#299796',
    '#fe99c3',
  ];

export const PALE_COLORS_SERIES = [
    '#d7e3fd',
    '#daf5e9',
    '#d6dbe4',
    '#fdeecd',
    '#dad8fe',
    '#dbf1fa',
    '#e4d7ed',
    '#ffe5d2',
    '#cce5e4',
    '#ffe6f0',
  ];

export const commonOptions: any = {
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxRotation: 0,
          padding: 12,
          minRotation: 0,
        },
      },
    },
  };

const apiUrl = 'http://localhost:4000/cubejs-api/v1';
const cubeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDg5NTU2NTMsImV4cCI6MTcwOTA0MjA1M30.9LZmwMzhCDwWgMkU0JkR3UU5nL112GI-cFv-wwmfsEM';

export const cubejsApi = cubejs(
  cubeToken,
  { apiUrl }
);
