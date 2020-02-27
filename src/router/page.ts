import * as express from "express";
let router = express.Router();
// localhost/page/about
router.get("/about", (req: express.Request, res: express.Response) => {
  res.send("page default!");
});
// localhost/page/a
router.get("/a", (req: express.Request, res: express.Response) => {
  res.send("page a!");
});
// localhost/page/b
router.get("/b", function(req: express.Request, res: express.Response) {
  res.send("page b!");
});

export default router;
