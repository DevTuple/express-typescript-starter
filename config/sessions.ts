import session from 'express-session';
import mongoose from 'mongoose';
import mongo from 'connect-mongo';
import express from "express";
import {SESSION_SECRET} from '../util/env' 

const MongoStore = mongo(session);

export const sessionConfig = (app: express.Application) => {
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 600000 },
      store: process.env.DB_URI
        ? new MongoStore({ mongooseConnection: mongoose.connection })
        : null,
    })
  );
};
