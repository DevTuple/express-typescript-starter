import path from 'path';
import {apiConfig} from '../api'
import express, { Request, Response } from "express";

export const routeConfig = (app: express.Router) => {
  //app.use((req, res, next) => {req.io = io;next()});
  app.use('/api', apiConfig(app));
  app.use('/*', (req:Request, res:Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  app.use('*', (req:Request, res:Response) => {
    res.status(404).send(`<h1>404 Page Not Found</h1>`);
  });
};
