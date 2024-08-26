import express from "express";
import colors from "colors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongodbConfig from "./db/mongodb.config.js";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import userRoute from "./routes/user.route.js";
import { app, server } from "./socket/socket.js";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
// rest object
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// routers
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", index.html));
});

// listen
server.listen(PORT, () => {
  mongodbConfig();
  console.log(`Server Running on port ${PORT}`.bgMagenta.white);
});
