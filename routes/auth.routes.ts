import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  //socketReconnect,
  //getsocketid,
  //socketDisconnect
} from "../controllers/auth.controller";
import express from 'express';

export const authRoutes = (app: express.Router): express.Router => {
  app.post("/login", LOGIN);
  app.post("/signup", SIGNUP);
  app.post("/logout", LOGOUT);

  //app.post("/socketReconnect", socketReconnect);
  //app.post("/getsocketid", getsocketid);
  return app;
};
