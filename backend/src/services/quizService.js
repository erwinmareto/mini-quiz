const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class QuizService {
  static getAllQuizzes = async () => {
    const quiz = await prisma.quizGroup.findMany();
    return quiz;
  };

  static getQuizById = async (quizId) => {
    const quiz = await prisma.quizGroup.findFirst({
      where: {
        id: parseInt(quizId),
      },
    });
    if (!quiz) {
      throw { name: "NotFound" };
    }
    return quiz;
  }

  static getQuizWithQuestions = async (quizId) => {
      const quiz = await prisma.quizGroup.findFirst({
          where: {
              id: parseInt(quizId),
          },
          include: {
            Question: {
                select: {
                    id: true,
                    question: true,
                    // category: true,
                    Option: {
                        select: {
                            id: true,
                            option: true,
                            isCorrect: true
                        }
                    }
                }
            }
          }
      })
      if (!quiz) {
          throw { name: "NotFound" };
      }
      return quiz
  }

  static addQuiz = async ({title, description, image}) => {
      const quiz = await prisma.quizGroup.create({
        data: {
          title: title,
          description: description,
          image: image
        },
      });

      return quiz
  }

  static updateQuiz = async (quizId, {title, description, image}) => {
    const quiz = await prisma.quizGroup.update({
      where: {
        id: parseInt(quizId)
      },
      data: {
        title: title,
        description: description,
        image: image
      }
    })
    if (!quiz) {
      throw { name: "NotFound" };
    }
    return quiz
  }

  static deleteQuiz = async (quizId) => {
    const quiz = await prisma.quizGroup.delete({
      where: {
        id: parseInt(quizId)
      }
    })
    if (!quiz) {
      throw { name: "NotFound" };
    }
    return quiz
  }
}

module.exports = QuizService;
