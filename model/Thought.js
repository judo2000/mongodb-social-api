const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      masLength: 280,
      required: [
        true,
        "Thought text is required and must be a minimum of 1 and mzximum of 280 characters.",
      ],
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
