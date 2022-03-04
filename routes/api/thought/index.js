const router = require("express").Router();
const { createThought } = require("../../../controllers/thoughtController");

router.route("/").post(createThought);

// router
//   .route("/:userId")
//   .get(getUserById)
//   .put(updateUserById)
//   .delete(deleteUserById);

module.exports = router;
