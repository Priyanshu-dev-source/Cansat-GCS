// import { SerialPort } from 'serialport';
// import { ReadlineParser } from '@serialport/parser-readline';
// const portName = 'COM3';

// const port = new SerialPort({
//   path: portName,
//   baudRate: 9600,
// });

// const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

// port.on('open', () => {
//   console.log(`Serial port ${portName} opened at ${port.baudRate} baud.`);
// });

// parser.on('data', (line) => {
//   try {
//     const jsonData = JSON.parse(line);

//     console.log(jsonData.LATITUDE)
//     console.log("Received JSON:");
//     console.log(jsonData);
//   } catch (e) {
//     console.log(e)
//     console.log("Non-JSON or malformed data received:", line);
//   }
// });

// port.on('error', (err) => {
//   console.error('Error: ', err.message);
// });


// gcsDataGenerator.js
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*', // Replace with your frontend origin in production
  },
});

const portName = 'COM3';
const port = new SerialPort({ path: portName, baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

io.on('connection', (socket) => {
  console.log('Frontend connected via Socket.IO');
});

port.on('open', () => {
  console.log(`Serial port ${portName} opened at ${port.baudRate} baud.`);
});

parser.on('data', (line) => {
  try {
    const jsonData = JSON.parse(line);
    console.log("Received JSON:", jsonData);

    // Emit the data to all connected clients
    io.emit('telemetryData', jsonData);

  } catch (e) {
    console.log("Malformed or non-JSON data:", line);
  }
});

httpServer.listen(5000, () => {
  console.log('Socket.IO server running on port 5000');
});
