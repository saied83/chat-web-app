const express = require("express");
const {
  sendMessage,
  getMessage,
} = require("../controllers/message.controller");
const { protectRoute } = require("../middleware/protectRoute");

const router = express.Router();

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;
