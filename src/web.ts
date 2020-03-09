import * as express from "express";
import App from "./app";
import router from "./router/main";
import * as cors from "cors";

const app: express.Application = new App().application;
const PORT: number = parseInt(process.env.PORT) || 4000;
// set router at ./router/main
app.use(cors());
router(app);
// start point
app.listen(PORT, () => {
  console.log(`✅  Server is listening on port ${PORT}!`);
});
