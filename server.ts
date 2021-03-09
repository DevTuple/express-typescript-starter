import errorHandler from "errorhandler";
import App from "./app";

let app = new App().app;
/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === "development") {
     app.use(errorHandler());
}


/**
 * Start Express server.
 */
const server = app.listen(process.env.PORT, () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        process.env.PORT,
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;
