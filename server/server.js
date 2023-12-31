// server.js
import express from "express";
import axios from "axios";
import cors from "cors";
import config from "../config.js"; // Adjust the path as needed

const app = express();
app.use(cors()); // Enable CORS

app.get("/api/league-rosters", (req, res) => {
  console.log("req.query", req.query); // Log the request query
  axios
    .get(`${config.apiBaseUrl}${config.endpoints.leagueRosters}`, {
      params: {
        ...config.commonParams, // Spread the common params from your config
        ...req.query, // This will include and override any params in the request
      },
    })
    .then((apiResponse) => {
      res.send(apiResponse.data);
    })
    .catch((error) => {
      console.error(error); // Log the full error
      res
        .status(500)
        .send("Error fetching from Fleaflicker API: " + error.message);
    });
});

app.get("/api/roster", (req, res) => {
  axios
    .get(`${config.apiBaseUrl}${config.endpoints.roster}`, {
      params: {
        ...config.commonParams,
        team_id: req.query.team_id, // This is specific to the roster endpoint
        ...req.query,
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
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // Confirm server is running
});
