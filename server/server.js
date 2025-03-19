// server.js
import express from "express";
import axios from "axios";
import cors from "cors";
import config from "../config.js"; // Adjust the path as needed

const app = express();
app.use(cors()); // Enable CORS

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
