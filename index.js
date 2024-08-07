// const XLSX = require('xlsx');

// // Sample data
// const salesData = [
//   { Date: "2024-07-01", Product: "Product A", Sales: 500 },
//   { Date: "2024-07-02", Product: "Product B", Sales: 700 },
//   { Date: "2024-07-03", Product: "Product A", Sales: 900 },
//   // Add more data as needed
// ];

// // Create a new workbook
// const workbook = XLSX.utils.book_new();

// // Convert data to worksheet format
// const worksheet = XLSX.utils.json_to_sheet(salesData);

// // // // Apply bold style to the header row
// // worksheet["A1"].s = { font: { bold: true } };
// // worksheet["B1"].s = { font: { bold: true } };
// // worksheet["C1"].s = { font: { bold: true } };

// // Add the worksheet to the workbook
// XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales Report');

// // Save the workbook to a file
// const fileName = 'sales_report.xlsx';
// XLSX.writeFile(workbook, fileName);

// console.log(`Excel report '${fileName}' has been generated successfully.`);

const XLSX = require('xlsx');

const SampleData=[
    {Date:"2024-9-01",Product:"product a",Sales:700},
    {Date:"2024-9-01",Product:"product a",Sales:700},
    {Date:"2024-9-01",Product:"product a",Sales:700}
]

const workbook = XLSX.utils.book_new();

const worksheet = XLSX.utils.json_to_sheet(SampleData);

XLSX.utils.book_append_sheet(workbook,worksheet,'SampleData');

 const fileName = 'samplereport.xlsx';
 XLSX.writeFile(workbook, fileName);

 console.log(`excel rpoert genereated successfully ${fileName}`);

