// const express = require("express");
// const {
//   accessChat,
//   fetchChats,
//   createGroupChat,
//   removeFromGroup,
//   addToGroup,
//   renameGroup,
// } = require("../controller/chatController");
// const { protect } = require("../middleware/authMiddleware");

import express from "express";
import {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
  getUser
} from "../controller/chatController.js";
import  protect  from "../middleware/authMiddleware.js";
const router = express.Router();
router.route("/accessChat").post(protect, accessChat);
router.route("/allChats").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/getUser").post(protect, getUser);
export default router;
