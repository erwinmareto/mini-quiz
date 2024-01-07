const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserResponseService {
  static getAllUserResponses = async () => {
    const userResponses = await prisma.userResponse.findMany();
    return userResponses;
  };

  static getUserResponseById = async (userResponseId) => {
    const userResponse = await prisma.userResponse.findFirst({
      where: {
        id: parseInt(userResponseId),
      },
    });
    if (!userResponse) {
      throw { name: "NotFound" };
    }
    return userResponse;
  };

  static getUserResponseByUserId = async (userId) => {
    const userResponse = await prisma.userResponse.findMany({
      where: {
        userId: parseInt(userId),
      },
    });
    if (!userResponse) {
      throw { name: "NotFound" };
    }
    return userResponse;
  };

  static getUserResponseByQuizId = async (quizId) => {
    const userResponse = await prisma.userResponse.findMany({
      where: {
        quizId: parseInt(quizId),
      },
    });
    if (!userResponse) {
      throw { name: "NotFound" };
    }
    return userResponse;
  };

  static getUserResponseByQuestionId = async (questionId) => {
    const userResponse = await prisma.userResponse.findMany({
      where: {
        questionId: parseInt(questionId),
      },
    });
    if (!userResponse) {
      throw { name: "NotFound" };
    }
    return userResponse;
  }

  static getUserResponseByUserIdAndQuestionId = async (userId, questionId) => {
    const userResponse = await prisma.userResponse.findFirst({
      where: {
        userId: parseInt(userId),
        questionId: parseInt(questionId),
      },
    });
    return userResponse;
  }

  static countCorrectAnswers = async (userId, quizId) => {
    const userResponse = await prisma.userResponse.count({
      where: {
        userId: parseInt(userId),
        quizId: parseInt(quizId),
        isCorrect: true
      },
    });
    if (!userResponse) {
      throw { name: "NotFound" };
    }
    return userResponse;
  }

  static addUserResponse = async ({userId, quizId, questionId, selectedOptionId, isCorrect}) => {
    const userResponseData = await prisma.userResponse.create({
      data: {
        userId: parseInt(userId),
        quizId: parseInt(quizId),
        questionId: parseInt(questionId),
        selectedOptionId: parseInt(selectedOptionId),
        isCorrect: JSON.parse(isCorrect),
      },
    });
    return userResponseData;
  };

  static editUserResponse = async (userResponseId, {userId, quizId, questionId, selectedOptionId, isCorrect}) => {
    const userResponseData = await prisma.userResponse.update({
      where: {
        id: parseInt(userResponseId),
      },
      data: {
        userId: parseInt(userId),
        quizId: parseInt(quizId),
        questionId: parseInt(questionId),
        selectedOptionId: parseInt(selectedOptionId),
        isCorrect: JSON.parse(isCorrect),
      },
    });
    return userResponseData;
  }

  static insertUserResponse = async (id,{userId, quizId, questionId, selectedOptionId, isCorrect}) => {
    const userResponseData = await prisma.userResponse.upsert({
      where: {
        id: parseInt(id),
      },
      create: {
        userId: parseInt(userId),
        quizId: parseInt(quizId),
        questionId: parseInt(questionId),
        selectedOptionId: parseInt(selectedOptionId),
        isCorrect: JSON.parse(isCorrect),
      },
      update: {
        selectedOptionId: parseInt(selectedOptionId),
        isCorrect: JSON.parse(isCorrect),
      }
    }
    );
    return userResponseData;
  }

  static deleteUserResponse = async (userResponseId) => {
    const userResponseData = await prisma.userResponse.delete({
      where: {
        id: parseInt(userResponseId),
      },
    });
    return userResponseData;
  };
}

module.exports = UserResponseService;
