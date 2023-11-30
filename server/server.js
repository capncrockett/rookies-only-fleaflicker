const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS

// Replace with your actual Fleaflicker API endpoint and parameters
app.get("/api/league-rosters", (req, res) => {
  axios
    .get("https://www.fleaflicker.com/api/FetchLeagueRosters", {
      params: {
        sport: req.query.sport,
        league_id: req.query.league_id,
        season: req.query.season,
        // Include any other parameters you need
      },
    })
    .then((apiResponse) => {
      res.send(apiResponse.data);
    })
    .catch((error) => {
      res
        .status(500)
        .send("Error fetching from Fleaflicker API: " + error.message);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
