const AuthService = require("../services/authService");

class AuthController {
  static login = async (req, res, next) => {
    try {
      const user = await AuthService.login(req.body);
      return res
        .status(200)
        .json({ message: "Successfully logged in", data: user });
    } catch (error) {
      next(error);
    }
  };

  static register = async (req, res, next) => {
    try {
      const user = await AuthService.register(req.body);
      return res
        .status(201)
        .json({ message: "Successfully registered", data: user });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
