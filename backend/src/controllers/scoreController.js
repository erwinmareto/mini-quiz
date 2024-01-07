const ScoreService = require("../services/scoreService");

class ScoreController {

    static getAllScores = async (req, res, next) => {
        try {
            const scores = await ScoreService.getAllScores();
            return res
                .status(200)
                .json({ message: "Successfully retrieved scores", data: scores });
        } catch (error) {
            next(error);
        }
    }

    static getScoreById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const score = await ScoreService.getScoreById(id);
            return res
                .status(200)
                .json({ message: "Successfully retrieved score", data: score });
        } catch (error) {
            next(error);
        }
    }

    static getScoreByUserId = async (req, res, next) => {
        try {
            const { userId } = req.params;
            const score = await ScoreService.getScoreByUserId(userId);
            return res
                .status(200)
                .json({ message: "Successfully retrieved score", data: score });
        } catch (error) {
            next(error);
        }
    }

    static getScoreByQuizId = async (req, res, next) => {
        try {
            const { quizId } = req.params;
            const score = await ScoreService.getScoreByQuizId(quizId);
            return res
                .status(200)
                .json({ message: "Successfully retrieved score", data: score });
        } catch (error) {
            next(error);
        }
    }

    static getScoreWithDetails = async (req, res, next) => {
        try {
            const { quizId } = req.params;
            const score = await ScoreService.getScoreWithDetails(quizId);
            return res
                .status(200)
                .json({ message: "Successfully retrieved score", data: score });
        } catch (error) {
            next(error);
        }
    }

    static addScore = async (req, res, next) => {
        try {
            const { userId, quizId, score } = req.body;
            const scoreData = await ScoreService.addScore({ userId, quizId, score });
            return res
                .status(201)
                .json({ message: "Successfully added score", data: scoreData });
        } catch (error) {
            next(error);
        }
    }

    static editScore = async (req, res, next) => {
        try {
            const { id } = req.params;
            const scoreData = await ScoreService.editScore( id, req.body );
            return res
                .status(200)
                .json({ message: "Successfully edited score", data: scoreData });
        } catch (error) {
            next(error);
        }
    }

    static deleteScore = async (req, res, next) => {
        try {
            const { id } = req.params;
            const scoreData = await ScoreService.deleteScore(id);
            return res
                .status(200)
                .json({ message: "Successfully deleted score", data: scoreData });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ScoreController