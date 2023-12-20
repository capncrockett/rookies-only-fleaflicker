import express from "express";
import axios from "axios";
import cors from "cors";
import {} from "constants";

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
        scoring_period: req.query.scoring_period,
        external_id_type: req.query.external_id_type,
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

app.get("/api/FetchRoster", (req, res) => {
  axios
    .get("https://www.fleaflicker.com/api/FetchRoster", {
      params: {
        sport: req.query.sport,
        league_id: req.query.league_id,
        team_id: req.query.team_id,
        season: req.query.season,
        scoring_period: req.query.scoring_period,
        external_id_type: req.query.external_id_type,
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
app.get("/api/FetchPlayerListing", (req, res) => {
  axios
    .get("https://www.fleaflicker.com/api/FetchPlayerListing", {
      params: {
        sport: req.query.sport,
        league_id: req.query.league_id,
        sort: req.query.sort,
        "filter.position.label": req.query["filter.position.label"],
        "filter.position.group": req.query["filter.position.group"],
        "filter.position.eligibility": req.query["filter.position.eligibility"],
        "filter.position.min": req.query["filter.position.min"],
        "filter.position.max": req.query["filter.position.max"],
        "filter.position.start": req.query["filter.position.start"],
        "filter.position.colors": req.query["filter.position.colors"],
        "filter.position_eligibility": req.query["filter.position_eligibility"],
        "filter.free_agent_only": req.query["filter.free_agent_only"],
        "filter.experience": req.query["filter.experience"],
        "filter.mlb_upcoming_pitchers_only":
          req.query["filter.mlb_upcoming_pitchers_only"],
        "filter.player_id": req.query["filter.player_id"],
        "filter.query": req.query["filter.query"],
        result_offset: req.query.result_offset,
        sort_season: req.query.sort_season,
        sort_period: req.query.sort_period,
        external_id_type: req.query.external_id_type,
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

app.get("/api/FetchLeagueRules", (req, res) => {
  axios
    .get("https://www.fleaflicker.com/api/FetchLeagueRules", {
      params: {
        sport: req.query.sport,
        league_id: req.query.league_id,
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
