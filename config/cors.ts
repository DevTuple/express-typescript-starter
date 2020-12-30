import cors from 'cors';
import express from "express";

export const corsConfig = (app: express.Application) => {
  const whitelist = ['http://localhost:8080'];
  const corsOptions = {
    origin: function(origin: any, callback: any) {
      callback(null, whitelist.indexOf(origin) !== -1);
    },
    credentials: true,
  };
  app.use(cors(corsOptions));
};
