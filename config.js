// config.js
const API_BASE_URL = "https://www.fleaflicker.com/api";
const LEAGUE_ROSTERS_ENDPOINT = "/FetchLeagueRosters";
const ROSTER_ENDPOINT = "/FetchRoster";

const config = {
  apiBaseUrl: API_BASE_URL,
  endpoints: {
    leagueRosters: LEAGUE_ROSTERS_ENDPOINT,
    roster: ROSTER_ENDPOINT,
  },
  commonParams: {
    sport: "NFL",
    league_id: process.env.LEAGUE_ID,
    season: 2023,
    // Add other non-sensitive parameters here
  },
};

export default config;
