import express from 'express';
import {initApplication} from './loaders';
import config from './config';
const app = express();
const PORT = config.port;

const startServer = async ()=>{
  await initApplication({expressApp: app});
    await app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`)
    })
}

startServer();
