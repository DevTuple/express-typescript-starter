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

class App {
  public app: express.Application;
 
  constructor() {
    this.app = express();
 
    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.config()
    //this.initializeErrorHandling();
  }
 
  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }
 
  private initializeMiddlewares() {

    this.app.use(compression());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    //Security
    this.app.use(helmet());
  }

  private initializeRoutes() {
    const router = express.Router();
    this.app.use('/',router);
    routeConfig(router);
  }

  private config(){
    authConfig();
    sessionConfig(this.app);
    cookiesConfig(this.app);
    corsConfig(this.app);
    staticConfig(this.app);
    logConfig(this.app);
  }
 
  /*
  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

 
  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
    */
 
  private connectToTheDatabase() {
    dbConfig();
  }
}
 
export default App;