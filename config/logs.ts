import util from 'util';
import chalk from 'chalk';
import express, { Request, Response } from "express";

export const logConfig = (app: express.Application) => {
  app.use("*", (req: Request, res: Response, next) => {
    console.log(
      "--------------------------------------------------------------------------"
    );
    console.log(
      util.format(chalk.red("%s: %s %s"), "REQUEST ", req.method, req.baseUrl)
    );
    console.log(
      util.format(chalk.yellow("%s: %s"), "QUERY   ", util.inspect(req.query))
    );
    console.log(
      util.format(chalk.cyan("%s: %s"), "BODY    ", util.inspect(req.body))
    );
    console.log(
      util.format(
        chalk.cyan("%s: %s"),
        "COOKIES    ",
        util.inspect(req.cookies)
      )
    );
    next();
  });
};
