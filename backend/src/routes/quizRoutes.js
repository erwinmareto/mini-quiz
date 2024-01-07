const express = require("express");
const router = express.Router();
const QuizController = require("../controllers/quizController");

router.get("/", QuizController.getAllQuizzes);
router.get("/:id", QuizController.getQuizById);
router.get("/quiz/:id", QuizController.getQuizWithQuestions);
router.post("/", QuizController.addQuiz);
router.put("/:id", QuizController.updateQuiz);
router.delete("/:id", QuizController.deleteQuiz);

module.exports = router;