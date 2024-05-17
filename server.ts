import express from "express";
import { routes } from "./router";
import { pagesRoutes } from "./pageRoutes";
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(routes);
app.use(pagesRoutes);
app.listen(8000, () =>
  console.log("server is listing at http://localhost:8000/")
);
