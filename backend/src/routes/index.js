const express = require("express");
const router = express.Router();
const authRouter = require("./authRoutes");
const userRoutes = require("./userRoutes");
const quizRoutes = require("./quizRoutes");
const questionRoutes = require("./questionRoutes");
const optionRoutes = require("./optionRoutes");
const scoreRoutes = require("./scoreRoutes");
const userResponseRoutes = require("./userResponseRoutes");

router.use("/auth", authRouter);
router.use("/users", userRoutes);
router.use("/quizzes", quizRoutes);
router.use("/questions", questionRoutes);
router.use("/options", optionRoutes);
router.use("/scores", scoreRoutes);
router.use("/userResponses", userResponseRoutes);

module.exports = router;