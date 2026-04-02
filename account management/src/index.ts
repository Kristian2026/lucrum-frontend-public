import express from "express";
import cors from "cors";
import signupRoute from "./routes/signup.route";
import loginRoute from "./routes/login.route";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/auth", signupRoute);
app.use("/auth", loginRoute);

app.get("/", (req, res) => {
  res.send("Lucrum Account Management System is running");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});