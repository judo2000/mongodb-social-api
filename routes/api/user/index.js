const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  getUserById,
} = require("../../../controllers/userController");

router.route("/").post(createUser).get(getAllUsers);

router.route("/:userId").get(getUserById);
module.exports = router;
