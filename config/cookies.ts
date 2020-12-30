import cookieParser from 'cookie-parser';
import express from "express";
export const cookiesConfig = (app: express.Application) => {
  app.use(cookieParser());
};
