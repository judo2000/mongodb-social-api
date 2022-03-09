const router = require("express").Router();
const {
  createThought,
  getAllThoughts,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  removeReaction,
} = require("../../../controllers/thoughtController");

router.route("/").post(createThought).get(getAllThoughts);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);
module.exports = router;
