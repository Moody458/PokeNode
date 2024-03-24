const Leaderboard = require("../schemas/Leaderboard");

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ score: -1 }).limit(10);
    res.json(leaderboard);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const submitScore = async (req, res) => {
  try {
    const newScore = new Leaderboard(req.body);
    await newScore.save();
    res.status(201).json(newScore);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getLeaderboard,
  submitScore,
};
