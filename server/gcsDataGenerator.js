// import express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import { SerialPort } from 'serialport';
// import { ReadlineParser } from '@serialport/parser-readline';
// import * as XLSX from 'xlsx';
// import fs from 'fs';

// const EXCEL_FILE = './telemetry_data.xlsx';

// const app = express();
// const httpServer = createServer(app);

// const io = new Server(httpServer, {
//   cors: {
//     origin: '*',
//   },
// });

// const portName = 'COM3';
// const port = new SerialPort({ path: portName, baudRate: 9600 });
// const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

// function saveToExcel(rawData) {
//   let workbook, worksheet;

//   const data = {
//     ...rawData,
//     ACCELEROMETER_X: rawData.ACCELEROMETER_DATA?.[0] ?? '',
//     ACCELEROMETER_Y: rawData.ACCELEROMETER_DATA?.[1] ?? '',
//     ACCELEROMETER_Z: rawData.ACCELEROMETER_DATA?.[2] ?? '',
//     GYRO_X: rawData.GYRO_SPIN_RATE?.[0] ?? '',
//     GYRO_Y: rawData.GYRO_SPIN_RATE?.[1] ?? '',
//     GYRO_Z: rawData.GYRO_SPIN_RATE?.[2] ?? '',
//   };

//   delete data.ACCELEROMETER_DATA;
//   delete data.GYRO_SPIN_RATE;

//   if (fs.existsSync(EXCEL_FILE)) {
//     const fileBuffer = fs.readFileSync(EXCEL_FILE);
//     workbook = XLSX.read(fileBuffer, { type: 'buffer' });

//     worksheet = workbook.Sheets[workbook.SheetNames[0]];
//     const existingData = XLSX.utils.sheet_to_json(worksheet);
//     existingData.push(data);

//     worksheet = XLSX.utils.json_to_sheet(existingData);
//     workbook.Sheets[workbook.SheetNames[0]] = worksheet;
//   } else {
//     worksheet = XLSX.utils.json_to_sheet([data]);
//     workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Telemetry');
//   }

//   const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
//   fs.writeFileSync(EXCEL_FILE, excelBuffer);
//   console.log('Data saved to Excel.');
// }

// io.on('connection', (socket) => {
//   console.log('Frontend connected via Socket.IO');
// });

// port.on('open', () => {
//   console.log(`Serial port ${portName} opened at ${port.baudRate} baud.`);
// });

// parser.on('data', (line) => {
//   try {
//     const jsonData = JSON.parse(line);
//     console.log('Received JSON:', jsonData);
//     io.emit('telemetryData', jsonData);
//     saveToExcel(jsonData);
//   } catch (e) {
//     console.log('Malformed or non-JSON data:', e.message);
//   }
// });

// httpServer.listen(5000, () => {
//   console.log('Socket.IO server running on port 5000');
// });
