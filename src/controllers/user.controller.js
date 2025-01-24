const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new User
exports.createUser = async (req, res) => {
  const { email, name } = req.body; // Include authorId
  const result = await prisma.users.create({
    data: {
      email: email,
      name: name,
    },
  });
  res.json(result);
};

// Get all users
exports.getusers = async (req, res) => {
  const users = await prisma.users.findMany({ // Include author details
  });
  res.json(users);
};

// Get a single User by ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const User = await prisma.users.findUnique({
    where: { id: id }, // Include author details
  });
  res.json(User);
};

// Update a User
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, name} = req.body;
  const result = await prisma.users.update({
    where: { id: id },
    data: {
      email: email,
      name: name,
    },
  });
  res.json(result);
};

// Delete a User
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const User = await prisma.users.delete({
    where: { id: id },
  });
  res.json(User);
};
