import express from "express";
import { routes } from "./router";
import { pagesRoutes } from "./pageRoutes";
import { notFound } from "./notFound";
const app = express();
app.set("view engine", "ejs");
console.log(process.cwd() + "public");
app.use(express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(routes);
app.use(pagesRoutes);
app.use(notFound);
app.listen(8000, () =>
  console.log("server is listing at http://localhost:8000/")
);
