const express = require("express")
const router = express.Router()
const UserController = require("../controllers/userController")

router.get("/", UserController.getAllUsers)
router.get("/:id" ,UserController.getUserById);
router.post("/" ,UserController.addUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteuser);

module.exports = router