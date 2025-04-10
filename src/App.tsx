import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const cardStyles = {
  perspective: "1000px",
  width: "100%",
  maxWidth: 330,
  margin: "auto",
  mt: 4,
};

const innerStyles = (flipped: boolean) => ({
  position: "relative",
  width: "100%",
  height: 710,
  transformStyle: "preserve-3d",
  transition: "transform 0.8s",
  transform: flipped ? "rotateY(180deg)" : "none",
});

const faceStyles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  borderRadius: 12,
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
};

const frontStyles = {
  ...faceStyles,
};

const backStyles = {
  ...faceStyles,
  backgroundColor: "#fffdf7",
  transform: "rotateY(180deg)",
  // padding: '0.5rem',
  overflowY: "auto",
  fontFamily: '"Indie Flower", cursive',
};

export default function App() {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box sx={cardStyles} onClick={() => setFlipped(!flipped)}>
      <Box sx={innerStyles(flipped)}>
        <Box sx={frontStyles}>
          <Card>
            <CardMedia
              component="img"
              image="tuna.jpg"
              alt="Tuna the cat"
              sx={{ height: 710, objectFit: "cover" }}
            />
          </Card>
        </Box>
        <Box sx={backStyles}>
          <CardContent
            sx={{
              height: "100%",
              maxHeight: 710,
              overflowY: "auto",
              paddingRight: 1, // optional: makes room for the scrollbar
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                textAlign: "right",
                pr: 2,
                fontSize: "0.875rem", // slightly smaller than default body1
                color: "rgba(0, 0, 0, 0.6)", // more transparent black
              }}
            >
              {`April 8, 2025`}
            </Typography>

            <Typography
              variant="body1"
              component="div"
              sx={{ whiteSpace: "pre-line", fontSize: "1.1rem" }}
            >
              {`To my dearest love,

Since I can't hand you a physical card this time, I’m sending you one via the interwebs. I hope your flight went smoothly.

Some of the many things I wish for you: peace of mind, that joyful feeling that makes you kick your feet under the covers, and an overflowing sense of love.

I want to re-emphasize that you can always count on me to listen no matter how hard the topic or feeling. I’m with you, even when we’re apart. Thank you for trusting me with what you’ve shared, I know that isn’t always easy, and I don’t take that for granted.

Any anxiety or sadness that may arise is natural but you don’t have to face it alone if you don’t want. Processing everything from these past months (and even the last year) will take time. Be patient and loving towards yourself because you deserve it.

When thoughts feel overwhelming or irrational, try to notice them without buying into the “story” too much. That little shift can sometimes ease the weight. And remember that your feelings and concerns are real and valid. Just check in with yourself now and then and ask: “Do I need to go through this again right now?”

I hope you find your rhythm soon. One that lets you seize the day, soak in every thrill and tiny comfort, and squeeze all the marrow out of life.

I love you,
Karen

`}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
}
