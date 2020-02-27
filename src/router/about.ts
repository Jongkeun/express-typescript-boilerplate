import * as express from "express";
let router = express.Router();
// localhost/about/about
router.get("/about", (req: express.Request, res: express.Response) => {
  res.send("default!");
});
// localhost/about/a
router.get("/a", (req: express.Request, res: express.Response) => {
  res.send("a!");
});
// localhost/about/b
router.get("/b", function(req: express.Request, res: express.Response) {
  res.send("b!");
});

export default router;
