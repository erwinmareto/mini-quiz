const UserResponseService = require("../services/userResponseService");

class UserResponseController {
  static getAllUserResponses = async (req, res, next) => {
    try {
      const userResponses = await UserResponseService.getAllUserResponses();
      return res.status(200).json({
        message: "Successfully retrieved user data",
        data: userResponses,
      });
    } catch (error) {
      next(error);
    }
  };

  static getUserResponseById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userResponse = await UserResponseService.getUserResponseById(id);
      return res.status(200).json({
        message: "Successfully retrieved user data",
        data: userResponse,
      });
    } catch (error) {
      next(error);
    }
  };

  static getUserResponseByUserId = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const userResponse = await UserResponseService.getUserResponseByUserId(
        userId
      );
      return res.status(200).json({
        message: "Successfully retrieved user data",
        data: userResponse,
      });
    } catch (error) {
      next(error);
    }
  };

  static getUserResponseByQuizId = async (req, res, next) => {
    try {
      const { quizId } = req.params;
      const userResponse = await UserResponseService.getUserResponseByQuizId(
        quizId
      );
      return res.status(200).json({
        message: "Successfully retrieved user data",
        data: userResponse,
      });
    } catch (error) {
      next(error);
    }
  };

  static getUserResponseByQuestionId = async (req, res, next) => {
    try {
      const { questionId } = req.params;
      const userResponse =
        await UserResponseService.getUserResponseByQuestionId(questionId);
      return res.status(200).json({
        message: "Successfully retrieved user data",
        data: userResponse,
      });
    } catch (error) {
      next(error);
    }
  };

  static getUserResponseByUserIdAndQuestionId = async (req, res, next) => {
    try {
      const { userId, questionId } = req.params;
      const userResponse =
        await UserResponseService.getUserResponseByUserIdAndQuestionId(
          userId,
          questionId
        );
      return res.status(200).json({
        message: "Successfully retrieved user data",
        data: userResponse,
      });
    } catch (error) {
      next(error);
    }
  };

  static countCorrectAnswers = async (req, res, next) => {
    try {
      const { userId, quizId } = req.params;
      const userResponse = await UserResponseService.countCorrectAnswers(
        userId,
        quizId
      );
      return res.status(200).json({
        message: "Successfully retrieved user data",
        data: userResponse,
      });
    } catch (error) {
      next(error);
    }
  };

  static addUserResponse = async (req, res, next) => {
    try {
      const userResponse = await UserResponseService.addUserResponse(req.body);
      return res
        .status(201)
        .json({ message: "Successfully added user", data: userResponse });
    } catch (error) {
      next(error);
    }
  };

  static editUserResponse = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userResponse = await UserResponseService.editUserResponse(
        id,
        req.body
      );
      return res
        .status(200)
        .json({ message: "Successfully edited user data", data: userResponse });
    } catch (error) {
      next(error);
    }
  };

  static insertUserResponse = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userResponse = await UserResponseService.insertUserResponse(
        id,
        req.body
      );
      return res
        .status(200)
        .json({ message: "Successfully edited user data", data: userResponse });
    } catch (error) {
      next(error);
    }
  };

  static deleteUserResponse = async (req, res, next) => {
    try {
      const { id } = req.params;
      const userResponse = await UserResponseService.deleteUserResponse(id);
      return res
        .status(200)
        .json({ message: "Successfully deleted user", data: userResponse });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserResponseController;
