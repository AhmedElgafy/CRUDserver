import { randomUUID } from "crypto";
import express, { Request, Response } from "express";
export const routes = express.Router();
export interface User {
  id: string;
  name: string;
  pass: string;
}
let users: User[] = [
  { id: randomUUID(), name: "default user", pass: "default pass" },
];

//                          READ
routes.get("/", (req: Request, res: Response) => {
  // res.redirect("/signIn");
  res.render("pages/main.ejs", { title: "welcome" });
  // res.send(JSON.stringify(users));
});

//                          CREATE
routes.post("/", (req: Request, res: Response) => {
  const obj: User[] = req.body;
  //   obj.id = randomUUID();
  console.log(obj.length);
  try {
    // array of object
    obj.forEach((ele) => {
      ele.id = randomUUID();
      users.push(ele);
    });
  } catch {
    //one object
    const data: User = req.body;
    // obj.push(data);
    console.log(req.body);
  }
  res.send(JSON.stringify(users));
});

//                          UPDATE
routes.patch("/:id", (req: Request, res: Response) => {
  console.log("req.body");
  res.send(req.body);
});

//                          DELETE
routes.delete("/:id", (req: Request, res: Response) => {
  let id = req.params.id;
  users = users.filter((ele) => ele.id !== id);
  res.send(req.body);
});
export default users;
