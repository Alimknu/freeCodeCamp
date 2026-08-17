import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { inputCleaner, inputValidator } from "./middleware.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.redirect("/form");
});

app.get("/form", (req, res, next) => {
  res.status(200).sendFile(__dirname + "/public/index.html");
});

app.post("/submit", inputCleaner, inputValidator, (req, res, next) => {
  res.json({
    username: req.body.username,
    comment: req.body.comment,
  });
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
