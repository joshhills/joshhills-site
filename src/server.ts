import express from 'express';
import payload from 'payload';

require('dotenv').config({path: './config/.env'});
const app = express();

console.log(process.env.MONGODB_URI);

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(3000);