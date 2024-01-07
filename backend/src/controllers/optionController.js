const OptionService = require("../services/optionService");

class OptionController {
    static getAllOptions = async (req, res, next) => {
        try {
            const options = await OptionService.getAllOptions();
            return res
                .status(200)
                .json({ message: "Successfully retrieved options", data: options });
        } catch (error) {
            next(error);
        }
    };

    static getOptionById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const option = await OptionService.getOptionById(id);
            return res
                .status(200)
                .json({ message: "Successfully retrieved option", data: option });
        } catch (error) {
            next(error);
        }
    };
    
    static getOptionsByQuestionId = async (req, res, next) => {
        try {
            const { questionId } = req.params;
            const options = await OptionService.getOptionsByQuestionId(questionId);
            return res
                .status(200)
                .json({ message: "Successfully retrieved options", data: options });
        } catch (error) {
            next(error);
        }
    }

    static addOption = async (req, res, next) => {
        try {
            const option = await OptionService.addOption(req.body);
            return res
                .status(201)
                .json({ message: "Successfully added option", data: option });
        } catch (error) {
            next(error);
        }
    }

    static updateOption = async (req, res, next) => {
        try {
            const { id } = req.params;
            const option = await OptionService.updateOption(id, req.body);
            return res
                .status(200)
                .json({ message: "Successfully edited option", data: option });
        } catch (error) {
            next(error);
        }
    }

    static deleteOption = async (req, res, next) => {
        try {
            const { id } = req.params;
            const option = await OptionService.deleteOption(id);
            return res
                .status(200)
                .json({ message: "Successfully deleted option", data: option });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = OptionController