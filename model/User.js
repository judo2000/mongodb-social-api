const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new Schema(
  {
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    username: {
      type: String,
      unique: [true, "Username already taken."],
      trim: true,
      required: [true, "Username is required."],
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          return isEmail(value);
        },
        message: function (userObject) {
          return `${userObject.email} is not a valid email address`;
        },
      },
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// virtual to count friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;
