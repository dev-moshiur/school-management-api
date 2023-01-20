const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const JWT = require("jsonwebtoken");

const uri =
  "mongodb+srv://moshiur:(masud422)@cluster0.oacn2vj.mongodb.net/?retryWrites=true&w=majority";

const dataGuard = require("./middleweres/dataGuard");

const classes = require("./router/class");

const news = require("./router/news");
const opinion = require("./router/opinion");
const person = require("./router/person");
const gellary = require("./router/gellary");
const notice = require("./router/notice");
const info = require("./router/info");
const teacher = require("./router/teacher");
const register = require("./router/register");
const message = require("./router/message");
const addmission = require("./router/addmission");
const banner = require("./router/banner");
const result = require("./router/clientReq");
const checkAdmin = require("./router/checkAdmin");
const homePage = require("./router/homePage");

const upload = require("./middleweres/multer");

dotenv.config();
const port = process.env.PORT || 8002;
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://school-management-beta.vercel.app",
      "https://school-management-beta.netlify.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static("upload"));

app.get("/", (req, res) => {
  res.send("connected successfully");
});
app.use("/classes", dataGuard, classes);
app.use("/register", register);

app.use("/news", news);
app.use("/opinion", dataGuard, opinion);
app.use("/person", person);
app.use("/gellary", gellary);
app.use("/teacher", teacher);
app.use("/notice", notice);
app.use("/info", info);
app.use("/message", message);
app.use("/addmission", addmission);
app.use("/banner", banner);
app.use("/result", result);
app.use("/checkAdmin", checkAdmin);
app.use("/homePage", homePage);

app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an upload error!");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("success");
  }
});

mongoose
  .connect(uri)
  .then(() => console.log("DB is connected mow"))
  .catch((err) => console.log("Not Connected", err));

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

// 3Y68jXYf6PWAo0wq
// scholl-management-sarver
