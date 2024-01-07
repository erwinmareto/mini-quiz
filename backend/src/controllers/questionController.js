const QuestionService = require("../services/questionService");

class QuestionController {
    static getAllQuestions = async (req, res, next) => {
        try {
            const questions = await QuestionService.getAllQuestions();
            return res
                .status(200)
                .json({ message: "Successfully retrieved questions", data: questions });
        } catch (error) {
            next(error);
        }
    };
    
    static getQuestionById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const question = await QuestionService.getQuestionById(id);
            return res
                .status(200)
                .json({ message: "Successfully retrieved question", data: question });
        } catch (error) {
            next(error);
        }
    };
    
    static getQuestionsByQuizId = async (req, res, next) => {
        try {
            const { quizId } = req.params;
            const questions = await QuestionService.getQuestionsByQuizId(quizId);
            return res
                .status(200)
                .json({ message: "Successfully retrieved questions", data: questions });
        } catch (error) {
            next(error);
        }
    };

    static getQuestionsWithOptions = async (req, res, next) => {
        try {
            const { id } = req.params;
            const questions = await QuestionService.getQuestionWithOptions(id);
            return res
                .status(200)
                .json({ message: "Successfully retrieved questions", data: questions });
        } catch (error) {
            next(error);
        }
    }
    
    static addQuestion = async (req, res, next) => {
        try {
            const question = await QuestionService.addQuestion(req.body);
            return res
                .status(201)
                .json({ message: "Successfully added question", data: question });
        } catch (error) {
            next(error);
        }
    }

    static addQuestionComplete = async (req, res, next) => {
        try {
            const question = await QuestionService.addQuestionComplete(req.body);
            return res
                .status(201)
                .json({ message: "Successfully added question", data: question });
        } catch (error) {
            next(error);
        }
    }

    static updateQuestion = async (req, res, next) => {
        try {
            const { id } = req.params;
            const question = await QuestionService.updateQuestion(id, req.body);
            return res
                .status(200)
                .json({ message: "Successfully edited question", data: question });
        } catch (error) {
            next(error);
        }
    }

    static updateQuestionComplete = async (req, res, next) => {
        try {
            const { id } = req.params;
            const question = await QuestionService.updateQuestionComplete(id, req.body);
            return res
                .status(200)
                .json({ message: "Successfully edited question", data: question });
        } catch (error) {
            next(error);
        }
    }

    static deleteQuestion = async (req, res, next) => {
        try {
            const { id } = req.params;
            const question = await QuestionService.deleteQuestion(id);
            return res
                .status(200)
                .json({ message: "Successfully deleted question", data: question });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = QuestionController
