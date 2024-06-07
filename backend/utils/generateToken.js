const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res.cookie("jwtToken", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000, // ms
    httpOnly: true, //Prevent XSS attacks cross-site scripting attacks
    sameSites: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

module.exports = {
  generateTokenAndSetCookie,
};
