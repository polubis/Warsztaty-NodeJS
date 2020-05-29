import 'reflect-metadata';
import dotenv from 'dotenv';

dotenv.config();

import App from './App';

process.on('uncaughtException', (err: any) => {
  console.error(`
    --------------------
    Unhandled Exception:
    ${err.message}
    --------------------
    `);
});

process.on('unhandledRejection', (err: any) => {
  console.error(`
    --------------------
    Unhandled Rejection:
    ${err.message}
    --------------------
    `);
});

module.exports = App.server;
