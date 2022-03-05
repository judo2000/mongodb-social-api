const router = require("express").Router();
const {
  createThought,
  getAllThoughts,
  getThoughtById,
} = require("../../../controllers/thoughtController");

router.route("/").post(createThought).get(getAllThoughts);

router.route("/:userId").get(getThoughtById);

module.exports = router;
