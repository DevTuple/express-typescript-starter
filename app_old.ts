import express from 'express';
import path from 'path';
import bodyParser from "body-parser";
import compression from 'compression';
import helmet from 'helmet';
import {cookiesConfig} from './config/cookies';
import { routeConfig} from './config/routes'
import { sessionConfig } from './config/sessions';
import { logConfig } from './config/logs';
import { staticConfig } from './config/static';
import { corsConfig } from './config/cors';
import { authConfig } from './config/auth';
import models, { dbConfig } from './config/db'

// rest of the code remains same
const app = express();
const PORT = 8000;
//app.get('/', (req, res) => res.send('Express + TypeScript Server'));

//Express configuraion 

//app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Security
app.use(helmet());

/*
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  pingInterval: 2000,
  pingTimeout: 5000
});
*/



dbConfig();

authConfig();
sessionConfig(app);
cookiesConfig(app);
corsConfig(app);
staticConfig(app);
logConfig(app);

const router = express.Router();
app.use('/',router);
routeConfig(router);
//require("./setup/socketio")(io);
//require("./setup/start")(server);


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});


module.exports = app;


export default app;