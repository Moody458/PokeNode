//---BASE------------------------------------------------------------------------------------
const express = require("express"); // import Express Library

const app = express(); // to set up our Actual Server while using Express, you call Express
// as a function

require("dotenv").config(); // import dotenv Library

const cors = require("cors"); // import cors Library

require("colors"); // import colors for terminal

const connectDB = require("./dbinit"); // MongoDB connect import
connectDB(); // MongoDB connect exec

const pokemon = require("./routes/pokemonRoute"); // pokemon router import

const leaderboard = require("./routes/leaderboardRoute"); // leaderboard router import

const port = process.env.PORT || 8080; // Defining Port

//---MIDDLEWARES-----------------------------------------------------------------------------
app.use(express.json()); // setting up json middleware

app.use(cors()); // setting up cors middleware

app.use(express.urlencoded({ extended: true })); // setting up middleware to parse incoming
// request bodies that are URL-encoded, allowing the application to access form data submitted
// from HTML forms

//---ROUTES-----------------------------------------------------------------------------------
app.use("/pokemon", pokemon); // router implementation

app.use("/leaderboard", leaderboard);

// basepath (landing)
app.get("/", (req, res) => {
  res.send("Welcome to MAM's Poke-API");
});

//---SERVER----------------------------------------------------------------------------------
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`.blue.underline);
});
