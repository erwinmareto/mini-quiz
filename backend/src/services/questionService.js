const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class QuestionService {
    static getAllQuestions = async () => {
        const questions = await prisma.question.findMany();
        return questions;
    };

    static getQuestionById = async (questionId) => {
        const questionData = await prisma.question.findFirst({
            where: {
                id: parseInt(questionId),
            },
        });
        if (!questionData) {
            throw { name: "NotFound" };
        }
        return questionData;
    }

    static getQuestionWithOptions = async (questionId) => {
        const questionData = await prisma.question.findFirst({
            where: {
                id: parseInt(questionId),
            },
            include: {
                Option: {
                    select: {
                        id: true,
                        option: true,
                        isCorrect: true
                    }
                }
            }
        });
        if (!questionData) {
            throw { name: "NotFound" };
        }
        return questionData;
    }

    static getQuestionsByQuizId = async (quizId) => {
        const questions = await prisma.question.findMany({
            where: {
                quizId: parseInt(quizId),
            },
            select: {
                id: true,
                quizId: true,
                question: true,
                Option: {
                    select: {
                        id: true,
                        option: true,
                        isCorrect: true
                    }
                }
            }
        });
        if (!questions) {
            throw { name: "NotFound" };
        }
        return questions;
    }

    static addQuestion = async ({quizId, question}) => {
        const questionData = await prisma.question.create({
            data: {
                quizId: parseInt(quizId),
                question: question,
                // category: category
            },
        });
        return questionData
    }

    static addQuestionComplete = async ({quizId, question, option1, isCorrect1, option2, isCorrect2, option3, isCorrect3, option4, isCorrect4}) => {
        console.log("Data received:", { quizId, question, option1, isCorrect1, option2, isCorrect2, option3, isCorrect3, option4, isCorrect4 });

        const quiz = await prisma.question.create({
          data: {
            quizId: parseInt(quizId),
            question: question,
            Option: {
                create: [
                    {
                        option: option1,
                        isCorrect: JSON.parse(isCorrect1)
                    },
                    {
                        option: option2,
                        isCorrect: JSON.parse(isCorrect2)
                    },
                    {
                        option: option3,
                        isCorrect: JSON.parse(isCorrect3)
                    },
                    {
                        option: option4,
                        isCorrect: JSON.parse(isCorrect4)
                    }
                ]
            }
          },
        })
        return quiz
      }

    static updateQuestion = async (questionId, {quizId, question}) => {
        const questionData = await prisma.question.update({
            where: {
                id: parseInt(questionId)
            },
            data: {
                quizId: parseInt(quizId),
                question: question,
                // category: category
            }
        })
        if (!questionData) {
            throw { name: "NotFound" };
        }
        return questionData
    }

    static updateQuestionComplete = async (questionId, {quizId, question, option1, isCorrect1, option2, isCorrect2, option3, isCorrect3, option4, isCorrect4, optionId1, optionId2, optionId3, optionId4}) => {
        console.log("Data received:", { questionId, quizId, question, option1, isCorrect1, option2, isCorrect2, option3, isCorrect3, option4, isCorrect4 });
        const updatedQuestion = await prisma.question.update({
            where: {
                id: parseInt(questionId)
            },
            data: {
                quizId: parseInt(quizId),
                question: question,
            }
        })
        const updatedOptions = await Promise.all([
            prisma.option.update({ where: { id: optionId1 }, data: { option: option1, isCorrect: JSON.parse(isCorrect1) } }),
            prisma.option.update({ where: { id: optionId2 }, data: { option: option2, isCorrect: JSON.parse(isCorrect2) } }),
            prisma.option.update({ where: { id: optionId3 }, data: { option: option3, isCorrect: JSON.parse(isCorrect3) } }),
            prisma.option.update({ where: { id: optionId4 }, data: { option: option4, isCorrect: JSON.parse(isCorrect4) } }),
          ]);
        
          return { updatedQuestion, updatedOptions };
    }

    static deleteQuestion = async (questionId) => {
        const questionData = await prisma.question.delete({
            where: {
                id: parseInt(questionId)
            }
        })
        if (!questionData) {
            throw { name: "NotFound" };
        }
        return questionData
    }
}

module.exports = QuestionService