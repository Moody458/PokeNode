const express = require("express");
const { getLeaderboard, submitScore } = require("../controllers/leaderboard");

const router = express.Router();

router.route("/").get(getLeaderboard).post(submitScore);

module.exports = router;
