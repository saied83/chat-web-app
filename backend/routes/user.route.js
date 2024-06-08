const express = require("express");
const { getUser } = require("../controllers/getUser.controller");
const { protectRoute } = require("../middleware/protectRoute");

const router = express.Router();

router.get("/", protectRoute, getUser);

module.exports = router;
