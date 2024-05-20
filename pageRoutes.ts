import { randomUUID } from "crypto";
import bcrypt from "bcrypt";
import express, { Request, Response } from "express";
import users from "./router";
export const pagesRoutes = express.Router();
pagesRoutes.get("/signIn", (req: Request, res: Response) => {
  res.status(301);
  res.render("pages/signInPage.ejs", { name: "ahmed" });
});
pagesRoutes.post("/signUp", async (req: Request, res: Response) => {
  const hashedPass = await bcrypt.hash(req.body.pass, 10);
  users.push({ id: randomUUID(), name: req.body.name, pass: hashedPass });
  console.log(users);
  // res.redirect(302, "/users");
  res.status(204);
  res.end();
});
pagesRoutes.get("/users", (req: Request, res: Response) => {
  console.log(users);
  res.render("pages/usersList.ejs", { usersList: users });
});
