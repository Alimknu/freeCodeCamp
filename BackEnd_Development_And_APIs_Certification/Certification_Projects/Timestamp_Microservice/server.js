import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Do not change code above this line
app.get("/api", (req, res) => {
  const now = new Date();
  res.json({
    unix: now.getTime(),
    utc: now.toUTCString(),
  });
});

app.get("/api/:date", (req, res) => {
  const { date } = req.params;
  let inputDate;

  inputDate = /^\d+$/.test(date) ? new Date(parseInt(date)) : new Date(date);

  if (isNaN(inputDate.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: inputDate.getTime(),
    utc: inputDate.toUTCString()
  });
});
// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
