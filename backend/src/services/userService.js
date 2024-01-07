const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

class UserService {
  static getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
  };

  static getUserById = async (userId) => {
    const user = await prisma.user.findFirst({
      where: {
        id: parseInt(userId)
      }
    })
    return user
  }
  
  static addUser = async ({username, password}) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword
      },
    });
    if (!user) {
      throw { name: "NotFound" };
    }
    return user;
  }

  static updateUser = async (id, { username, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
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

  static deleteUser = async (id) => {
    const user = await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    if (!user) {
      throw { name: "NotFound" };
    }
    return user;
  };
}

module.exports = UserService;
