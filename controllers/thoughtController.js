const { Thought, User } = require("../model");

module.exports = {
  createThought: async (req, res) => {
    const { thoughtText, username, userId } = req.body;
    try {
      const newThought = await Thought.create({
        thoughtText,
        username,
      })
        .then(({ _id }) => {
          return User.findOneAndUpdate(
            { _id: userId },
            { $push: { thoughts: _id } },
            { new: true, runValidators: true }
          );
        })
        .then((thoughtData) => {
          //console.log(thoughtData._id);
          res.json(thoughtData);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
