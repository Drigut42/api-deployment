import express from "express";
import dotenv from "dotenv";

// const port = 6000;
const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.json("Hello FROM API");
});

app.listen(port, () => {
  console.log("Server runs on 6000");
});
