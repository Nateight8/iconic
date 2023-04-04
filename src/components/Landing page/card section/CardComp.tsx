import React from "react";
import { Typography, Box, Paper, CardActionArea } from "@mui/material";
import Image from "next/image";

type Props = {
  cardItem: {
    src: string;
    heading: string;
  };
  index: number;
};

function CardComp({ cardItem, index }: Props) {
  const { src, heading } = cardItem;

  // const [clicked, setClicked] = React.useState();
  const [setActive, setsetActive] = React.useState(null);

  const handleClick = (index) => {
    setsetActive(index);
  };

  return (
    <CardActionArea
      onClick={() => {}}
      sx={
        setActive === index
          ? {
              flex: 5,
              marginY: "1rem",
              backgroundImage: `${src}`,
              position: "relative",
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
              borderRadius: "0.5rem",
            }
          : {
              flex: 1,
              marginY: "1rem",
              backgroundImage: `${src}`,
              position: "relative",
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
              borderRadius: "0.5rem",
            }
      }
    >
      <Paper
        sx={{
          color: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
          background: "transparent",
          height: "100%",
        }}
      >
        <>
          <Box sx={{ zIndex: 10, position: "relative" }}>
            <Typography variant="h6" pb={2}>
              {heading}
            </Typography>
            <Typography variant="body2">
              Subtitle reinforces the message that investment is the key to
              achieving long-term financial success, and highlights Iconic
              Trade&apos;s focus on diversified investment opportunities
            </Typography>
          </Box>
          <div
            style={{
              background: "#202022",
              position: "absolute",
              inset: 0,
              zIndex: 0,
              opacity: 0.7,
              borderRadius: "0.5rem",
            }}
          />
        </>
      </Paper>
    </CardActionArea>
  );
}

export default CardComp;
