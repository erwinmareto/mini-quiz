const bcrypt = require("bcrypt");
const { generateToken } = require("../lib/jwt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class AuthService {
  static register = async ({ username, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });
    if (!user) {
      throw { name: "NotFound" };
    }
    return user;
  };

  static login = async ({ username, password }) => {
    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (!user) {
      throw { name: "InvalidCred" };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw { name: "InvalidCred" };
    }
    const userData = {
      id: user.id,
      username: user.username,
    };
    const token = generateToken({ id: user.id });

    return { ...userData, token };
  };
}

module.exports = AuthService;
