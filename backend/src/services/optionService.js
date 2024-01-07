const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class OptionService {
  static getAllOptions = async () => {
    const options = await prisma.option.findMany();
    return options;
  };

  static getOptionById = async (optionId) => {
    const optionData = await prisma.option.findFirst({
      where: {
        id: parseInt(optionId),
      },
    });
    if (!optionData) {
      throw { name: "NotFound" };
    }
    return optionData;
  };

  static getOptionsByQuestionId = async (questionId) => {
    const options = await prisma.option.findMany({
      where: {
        questionId: parseInt(questionId),
      },
    });
    if (!options) {
      throw { name: "NotFound" };
    }
    return options;
  };

  static addOption = async ({ questionId, option, isCorrect }) => {
    const optionData = await prisma.option.create({
      data: {
        questionId: parseInt(questionId),
        option: option,
        isCorrect: JSON.parse(isCorrect),
      },
    });
    return optionData;
  };

  static updateOption = async (optionId, { questionId, option, isCorrect }) => {
    const optionData = await prisma.option.update({
      where: {
        id: parseInt(optionId),
      },
      data: {
        questionId: parseInt(questionId),
        option: option,
        isCorrect: JSON.parse(isCorrect),
      },
    });
    if (!optionData) {
      throw { name: "NotFound" };
    }
    return optionData;
  };

  static deleteOption = async (optionId) => {
    const optionData = await prisma.option.delete({
      where: {
        id: parseInt(optionId),
      },
    });
    if (!optionData) {
      throw { name: "NotFound" };
    }
    return optionData;
  };
}

module.exports = OptionService;
