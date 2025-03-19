// Player.jsx
import React from "react";
import {
  Card,
  CardContent,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  Box,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import { SportsFootball, TrendingUp, Note } from "@mui/icons-material";

const Player = ({ player }) => {
  const {
    proPlayer,
    rank,
    isInjured,
    isTrendingUp,
    hasNotes,
    age,
    draft_year,
    experience,
  } = player;

  // Function to map experience string to a readable label
  const getExperienceLabel = (experience) => {
    switch (experience) {
      case "EXPERIENCE_ROOKIE":
        return "Rookie";
      case "EXPERIENCE_SOPHOMORE":
        return "Sophomore";
      case "EXPERIENCE_VETERAN":
        return "Veteran";
      default:
        return "Unspecified";
    }
  };

  return (
    <>
      <Card variant="outlined" sx={{ marginBottom: 2 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={proPlayer.nameFull} src={proPlayer.headshotUrl} />
          </ListItemAvatar>
          <CardContent sx={{ flexGrow: 1 }}>
            {/* Player Details */}
            <Typography variant="h6">{proPlayer.nameFull}</Typography>
            <Typography variant="body2" color="text.secondary">
              {proPlayer.position} | {proPlayer.proTeamAbbreviation}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Age: {age || "N/A"} | Draft Year: {draft_year || "N/A"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Experience: {getExperienceLabel(experience)}
            </Typography>
            {/* Additional Details */}
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
              <Grid item xs={4}>
                <Typography variant="body2">Rank</Typography>
                <Typography variant="body1">{rank}</Typography>
              </Grid>
            </Grid>
          </CardContent>
          {/* Icons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isInjured && (
              <IconButton aria-label="injured" title="Injured">
                <SportsFootball sx={{ color: "red" }} />
              </IconButton>
            )}
            {isTrendingUp && (
              <IconButton aria-label="trending" title="Trending Up">
                <TrendingUp sx={{ color: "green" }} />
              </IconButton>
            )}
            {hasNotes && (
              <IconButton aria-label="notes" title="Has Notes">
                <Note sx={{ color: "orange" }} />
              </IconButton>
            )}
          </Box>
        </ListItem>
      </Card>
      <Divider component="li" />
    </>
  );
};

export default Player;
