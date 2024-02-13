require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const indexRouter = require("./routes");
const PORT = Number(process.env.PORT);
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/assests", express.static("public"));
app.use("/", indexRouter);
app.use((e, req, res, next) => {
  e = e ? e.toString() : "Something went wrong";
  res.status(500).json({ msg: e });
});
app.listen(PORT, () => {
  console.log(`application is running${PORT}`);
});
