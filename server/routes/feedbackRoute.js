const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const feedbackController = require("../controllers/feedbackController");

router.post("/feedback", feedbackController.createFeedback);


module.exports = router;
