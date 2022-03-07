const router = require("express").Router();
const {
  createThought,
  getAllThoughts,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
} = require("../../../controllers/thoughtController");

router.route("/").post(createThought).get(getAllThoughts);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

module.exports = router;
