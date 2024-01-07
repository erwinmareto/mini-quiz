const express = require("express");
const router = express.Router();
const OptionController = require("../controllers/optionController");

router.get("/", OptionController.getAllOptions);
router.get("/:id", OptionController.getOptionById);
router.get("/question/:questionId", OptionController.getOptionsByQuestionId);
router.post("/", OptionController.addOption);
router.put("/:id", OptionController.updateOption);
router.delete("/:id", OptionController.deleteOption);

module.exports = router;
