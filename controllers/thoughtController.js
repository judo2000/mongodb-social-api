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
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find().populate({
        path: "username",
      });
      res.json(thoughts);
    } catch (error) {
      res.json(error);
    }
  },
  getThoughtById: async (req, res) => {
    const { thoughtId } = req.params;
    try {
      const thought = await Thought.findById(thoughtId);
      res.json(thought);
    } catch (error) {
      res.json(error);
    }
  },
};
