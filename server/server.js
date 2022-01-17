import express from "express";
import { dirname } from "./lib/pathHelpers.js";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import getAll from "./controller/all.controller.js";

const __dirname = dirname(import.meta.url);

dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const serverPort = process.env.PORT || 4000;

const server = express();
mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
);

server.use(express.json());
server.use(cors());

const db = mongoose.connection;
db.on("error", console.log.bind(console, "Mongodb connection error"));
db.once("open", function (callback) {
  console.log("Mongodb connection succeeded");
});

server.get("/api", getAll);

//Static assets (images, css, js)
server.use(express.static(path.join(__dirname, "../client/dist")));

server.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

server.listen(serverPort, () =>
  console.log(`Server is up and running on port ${serverPort}`)
);
