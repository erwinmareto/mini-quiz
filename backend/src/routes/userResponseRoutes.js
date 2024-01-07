const express = require("express");
const router = express.Router();
const UserResponseController = require("../controllers/userResponseController");

router.get("/", UserResponseController.getAllUserResponses);
router.get("/:id", UserResponseController.getUserResponseById);
router.get("/user/:userId", UserResponseController.getUserResponseByUserId);
router.get("/quiz/:quizId", UserResponseController.getUserResponseByQuizId);
router.get(
  "/question/:questionId",
  UserResponseController.getUserResponseByQuestionId
);
router.get(
  "/user/:userId/question/:questionId",
  UserResponseController.getUserResponseByUserIdAndQuestionId
)
router.get("/count/:userId/:quizId", UserResponseController.countCorrectAnswers);
router.post("/", UserResponseController.addUserResponse);
router.put("/edit/:id", UserResponseController.editUserResponse);
router.put("/insert/:id", UserResponseController.insertUserResponse)
router.delete("/:id", UserResponseController.deleteUserResponse);

module.exports = router;
