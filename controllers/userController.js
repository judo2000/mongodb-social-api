const { isEmail } = require("validator");
const { User } = require("../model");

module.exports = {
  createUser: async (req, res) => {
    const { username, email } = req.body;
    if (!isEmail(email)) {
      return res
        .status(401)
        .json({ error: "Email must b a valid email address." });
    }
    try {
      const newUser = await User.create({
        username,
        email,
      });
      res.json(newUser);
    } catch (error) {
      res.json(error);
    }
  },
};
