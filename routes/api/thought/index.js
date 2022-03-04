const router = require("express").Router();
const {
  createThought,
  getAllThoughts,
} = require("../../../controllers/thoughtController");

router.route("/").post(createThought).get(getAllThoughts);

// router
//   .route("/:userId")
//   .get(getUserById)
//   .put(updateUserById)
//   .delete(deleteUserById);

module.exports = router;
