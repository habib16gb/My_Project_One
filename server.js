import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import colors from "colors";

config();
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    access: true,
    data: {
      message: "hello from server js",
      path: "/",
    },
  });
});

app.listen(port, () =>
  console.log(
    `server started in ${process.env.NODE_ENV} mode on http://localhost:${port}`
      .bgGreen.bold
  )
);
