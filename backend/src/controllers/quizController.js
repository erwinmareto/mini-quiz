const QuizService = require("../services/quizService");

class QuizController {
  static getAllQuizzes = async (req, res, next) => {
    try {
      const quiz = await QuizService.getAllQuizzes();
      return res
        .status(200)
        .json({ message: "Successfully retrieved quiz groups", data: quiz });
    } catch (error) {
      next(error);
    }
  };

  static getQuizById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const quiz = await QuizService.getQuizById(id);
      return res
        .status(200)
        .json({ message: "Successfully retrieved quiz group", data: quiz });
    } catch (error) {
      next(error);
    }
  };

  static getQuizWithQuestions = async (req, res, next) => {
    try {
      const { id } = req.params;
      const quiz = await QuizService.getQuizWithQuestions(id);
      return res
        .status(200)
        .json({ message: "Successfully retrieved quiz data", data: quiz });
    } catch (error) {
      next(error);
    }
  }

  static addQuiz = async (req, res, next) => {
    try {
      const quiz = await QuizService.addQuiz(req.body);
      return res
        .status(201)
        .json({ message: "Successfully added quiz group", data: quiz });
    } catch (error) {
      next(error);
    }
  };

  static updateQuiz = async (req, res, next) => {
    try {
      const { id } = req.params;
      const quiz = await QuizService.updateQuiz(id, req.body);
      return res
        .status(200)
        .json({ message: "Successfully edited quiz group", data: quiz });
    } catch (error) {
      next(error);
    }
  };

  static deleteQuiz = async (req, res, next) => {
    try {
      const { id } = req.params;
      const quiz = await QuizService.deleteQuiz(id);
      return res
        .status(200)
        .json({ message: "Successfully deleted quiz group", data: quiz });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = QuizController;
