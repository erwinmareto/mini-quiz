const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ScoreService {

    static getAllScores = async () => {
        const scores = await prisma.score.findMany();
        return scores;
    }
    
    static getScoreById = async (scoreId) => {
        const score = await prisma.score.findFirst({
            where: {
                id: parseInt(scoreId),
            },
        });
        if (!score) {
            throw { name: "NotFound" };
        }
        return score;
    }

    static getScoreByUserId = async (userId) => {
        const score = await prisma.score.findMany({
            where: {
                userId: parseInt(userId),
            },
        });
        if (!score) {
            throw { name: "NotFound" };
        }
        return score;
    }

    static getScoreByQuizId = async (quizId) => {
        const score = await prisma.score.findMany({
            where: {
                quizId: parseInt(quizId),
            },
        });
        if (!score) {
            throw { name: "NotFound" };
        }
        return score;
    }

    static getScoreWithDetails = async (quizId) => {
        const score = await prisma.score.findMany({
            where: {
                quizId: parseInt(quizId),
            },
            select: {
                score: true,
                user: {
                    select: {
                        username: true
                    }
                },
                quiz: {
                    select: {
                        title: true
                    }
                }
            }
        })
        if (!score) {
            throw { name: "NotFound" };
        }
        return score;
    }

    static addScore = async ({userId, quizId, score}) => {
        const scoreData = await prisma.score.create({
            data: {
                userId: parseInt(userId),
                quizId: parseInt(quizId),
                score: parseFloat(score)
            },
        });
        return scoreData
    }

    static editScore = async (scoreId, {userId, quizId, score}) => {
        const scoreData = await prisma.score.update({
            where: {
                id: parseInt(scoreId),
            },
            data: {
                userId: parseInt(userId),
                quizId: parseInt(quizId),
                score: parseFloat(score)
            },
        });
        return scoreData
    }

    static deleteScore = async (scoreId) => {
        const scoreData = await prisma.score.delete({
            where: {
                id: parseInt(scoreId)
            }
        })
        if (!scoreData) {
            throw { name: "NotFound" };
        }
        return scoreData
    }
}

module.exports = ScoreService
