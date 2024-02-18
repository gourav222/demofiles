import express from "express";
// const {
//   allMessages,
//   allMessages,,
// } = require("../controller/messageController.js");
// const { protect } = require("../middleware/authMiddleware");
import  protect  from "../middleware/authMiddleware.js";
const router = express.Router();

import { allMessages, sendMessage } from "../controller/messageController.js";

router.route("/getAllMsg/:chatId").get(protect, allMessages);
router.route("/storeMessage").post(protect, sendMessage);



export default router;
