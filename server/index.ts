/* eslint-disable global-require */
/* eslint-disable no-console */
import path from 'path';
import next from 'next';
import nextBuild from 'next/dist/build';
import express from 'express';
import payload from 'payload';
import { config as dotenv } from 'dotenv';

dotenv({
  path: path.resolve(__dirname, '../.env'),
});

const dev = process.env.NODE_ENV !== 'production';
const server = express();

payload.init({
  license: process.env.PAYLOAD_LICENSE_KEY,
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: server,
  ...process.env.ENVIRONMENT === 'production' ? {
    email: {
      transportOptions: {
        host: process.env.SMTP_HOST,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        },
        port: 465,
        secure: true,
        tls: {
          rejectUnauthorized: false
        }
      },
      fromName: 'noreply',
      fromAddress: 'noreply@joshhills.dev'
    }
  } : {}
});

if (!process.env.NEXT_BUILD) {
  const nextApp = next({ dev });

  const nextHandler = nextApp.getRequestHandler();

  server.get('*', (req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    console.log('NextJS started');

    server.listen(process.env.SITE_PORT, async () => {
      console.log(`Server listening on ${process.env.SITE_PORT}...`);
    });
  });
} else {
  server.listen(process.env.SITE_PORT, async () => {
    console.log('NextJS is now building...');
    await nextBuild(path.join(__dirname, '../'));
    process.exit();
  });
}