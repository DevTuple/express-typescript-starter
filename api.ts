import {authConfig} from './config/auth'
import express, { Request, Response } from "express";
import { authRoutes} from './routes/auth.routes'


export const apiConfig= (app : express.Router): express.Router => {
    app.use(authConfig().initialize());
    app.get("/", (req: Request, res: Response) => res.send("API /"));
    app.use("/auth", authRoutes(app));
    return app;
}

