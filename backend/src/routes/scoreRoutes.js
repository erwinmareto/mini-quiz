const express = require("express");
const router = express.Router();
const ScoreController = require("../controllers/scoreController");

router.get("/", ScoreController.getAllScores);
router.get("/:id", ScoreController.getScoreById);
router.get("/user/:userId", ScoreController.getScoreByUserId);
router.get("/quiz/:quizId", ScoreController.getScoreByQuizId);
router.get("/details/:quizId", ScoreController.getScoreWithDetails);
router.post("/", ScoreController.addScore);
router.put("/:id", ScoreController.editScore);
router.delete("/:id", ScoreController.deleteScore);

module.exports = router;
