import express, { Request, Response } from "express";
export const notFound = express.Router();
// const routes =
notFound.get("*", (req: Request, res: Response, next) => {
  //   res.send("hi");
  res.render("pages/notfound.ejs", { name: "ahmed" });
});
