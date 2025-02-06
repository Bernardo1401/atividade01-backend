const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/movies", movieController.getAllMovie);
router.post("/movies", movieController.addMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);
router.get("/movies/:id", movieController.getMovieById);

module.exports = router;