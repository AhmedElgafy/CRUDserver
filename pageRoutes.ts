import { randomUUID } from "crypto";
import bcrypt from "bcrypt";
import express, { Request, Response } from "express";
import { User } from "./router";
export const pagesRoutes = express.Router();
pagesRoutes.get("/signIn", (req: Request, res: Response) => {
  res.status(301);
  res.render("pages/signInPage.ejs", { name: "ahmed" });
});
pagesRoutes.post("/logIn", async (req: Request, res: Response) => {
  try {
    const data = await fetch(`http://localhost:3000/users`);
    const users = await data.json();
    console.log(users);
    //create a function that check if the user is in db
    res.status(200);
    res.send(req.body);
  } catch {
    res.status(503);
    res.send("some thing wrong");
  }
});

pagesRoutes.post("/signUp", async (req: Request, res: Response) => {
  const hashedPass = await bcrypt.hash(req.body.pass, 10);
  const user = { id: randomUUID(), name: req.body.name, pass: hashedPass };
  try {
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(user),
    });
    res.status(204);
    console.log("hi");
    res.end();
  } catch {
    res.status(503);
    res.end();
  }
});
pagesRoutes.get("/signUp", async (req: Request, res: Response) => {
  res.render("pages/signUpPage.ejs");
});
pagesRoutes.get("/users", (req: Request, res: Response) => {
  res.render("pages/usersList.ejs", { usersList: [] });
});
