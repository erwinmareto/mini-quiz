const express = require("express");
const router = express.Router();
const QuestionController = require("../controllers/questionController");

router.get("/", QuestionController.getAllQuestions);
router.get("/:id", QuestionController.getQuestionById);
router.get("/quiz/:quizId", QuestionController.getQuestionsByQuizId);
router.get("/question/:id", QuestionController.getQuestionsWithOptions);
router.post("/", QuestionController.addQuestionComplete);
router.put("/:id", QuestionController.updateQuestionComplete);
router.delete("/:id", QuestionController.deleteQuestion);

module.exports = router;