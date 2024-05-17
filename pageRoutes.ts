import { randomUUID } from "crypto";
import bcrypt from "bcrypt";
import express, { Request, Response } from "express";
import users from "./router";
export const pagesRoutes = express.Router();
pagesRoutes.get("/signIn", (req: Request, res: Response) => {
  res.status(301);
  res.render("pages/signInPage.ejs", { name: "ahmed" });
});
pagesRoutes.post("/signIn", async (req: Request, res: Response) => {
  const hashedPass = await bcrypt.hash(req.body.pass, 10);
  users.push({ id: randomUUID(), name: req.body.name, pass: hashedPass });
  console.log(users);
  res.send();
});
