const XLSX = require('xlsx');
const fs = require('fs');

const trackerData = [
    { Date:"17/7/24",Task:"Task A",Status:"Pending"},
    { Date:"17/7/24",Task:"Task B",Status:"completed"},
    { Date:"17/7/24",Task:"Task c",Status:"In Progress"},
];

function writeToExcel(data){
        
    const workbook = XLSX.utils.book_new();

    const worksheet = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(workbook,worksheet,'Tracker');


    const fileName = 'sample_data.xlsx';
    XLSX.writeFile(workbook,fileName);

    console.log(`excel report generated successfully ${fileName}`);
}

function readFromExcel(fileName) {
    const workbook = XLSX.readFile(fileName);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet);
  }
  
  // Example usage to read from Excel
  const dataFromExcel = readFromExcel('sample_data.xlsx');
  console.log("Data read from Excel:");
  console.log(dataFromExcel);

  writeToExcel(trackerData);
