import * as express from "express";
import aboutRouter from "./about";
import pageRouter from "./page";

// setting router and bind
export default function(app: express.Application) {
  // localhost/
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send("start!");
  });
  // localhost/about
  app.get("/about", function(req: express.Request, res: express.Response) {
    res.send("about!");
    // res.render("about.html");
  });
  // declare use
  app.use("/about", aboutRouter);
  app.use("/page", pageRouter);
}
