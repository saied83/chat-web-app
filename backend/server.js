import express from "express";
import colors from "colors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongodbConfig from "./db/mongodb.config.js";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import userRoute from "./routes/user.route.js";
import { app, server } from "./socket/socket.js";

// rest object
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// routers
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);

// listen
server.listen(PORT, () => {
  mongodbConfig();
  console.log(`Server Running on port ${PORT}`.bgMagenta.white);
});
