const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { mongodbConfig } = require("./db/mongodb.config");

// config
dotenv.config();

// rest object
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// routers
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/messages", require("./routes/message.route"));
app.use("/api/users", require("./routes/user.route"));

// listen
app.listen(PORT, () => {
  mongodbConfig();
  console.log(`Server Running on port ${PORT}`.bgMagenta.white);
});
