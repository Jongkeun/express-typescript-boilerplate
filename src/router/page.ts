import * as express from "express";
let router = express.Router();

router.get("/about", (req: express.Request, res: express.Response) => {
  res.send("page default!");
});

router.get("/a", (req: express.Request, res: express.Response) => {
  res.send("page a!");
});

router.get("/b", function(req: express.Request, res: express.Response) {
  res.send("page b!");
});

export default router;
