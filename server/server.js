// server.js
import express from "express";
import axios from "axios";
import cors from "cors";
import config from "../config.js"; // Adjust the path as needed

const app = express();
app.use(cors()); // Enable CORS

// Get the league rosters
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
      console.error(error);
      res
        .status(500)
        .send("Error fetching from Fleaflicker API: " + error.message);
    });
});

// Get a specific roster
app.get("/api/roster", (req, res) => {
  axios
    .get(`${config.apiBaseUrl}${config.endpoints.roster}`, {
      params: {
        ...config.commonParams,
        team_id: req.query.team_id,
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

// Get Scoring Period Range
app.get("/api/league-rules", (req, res) => {
  console.log("req.query", req.query);
  axios
    .get(`${config.apiBaseUrl}${config.endpoints.leagueRules}`, {
      params: {
        ...config.commonParams,
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

// Get Player List
app.get("/api/player-listing", (req, res) => {
  const params = {
    ...config.commonParams,
    "filter.free_agent_only": true,
    // Include additional parameters if needed
    ...req.query, // Allow overriding via query parameters
  };

  console.log("API Request Params:", params); // Log the parameters being sent

  axios
    .get(`${config.apiBaseUrl}${config.endpoints.fetchPlayerListing}`, {
      params,
    })
    .then((apiResponse) => {
      console.log("API Response Data:", apiResponse.data); // Log the response data
      res.send(apiResponse.data);
    })
    .catch((error) => {
      console.error("Error fetching from Fleaflicker API:", error.message);
      res
        .status(500)
        .send("Error fetching from Fleaflicker API: " + error.message);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // Confirm server is running
});
