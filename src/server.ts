require("dotenv").config();

import express, { Application, Request, response } from "express";
import cors from "cors";
import "dotenv/config";
const dataBase = require("./index");
import auth from "./routes/auth";
// import admin from './routes/admin'
// import port from './routes/port'
// import user from './routes/user'

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://www.smartshoping.club",
      "https://smartshoping.club",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
  })
);

app.use("/api/auth", auth);
// app.use('/api/admin',admin)
// app.use('/api/port',port)
// app.use('/api/user',user)

dataBase.startServer();

export { app };
