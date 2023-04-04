import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Typography, Paper } from "@mui/material";

type Props = { item: string };

function Slides({ item }: Props) {
  return (
    <>
      {" "}
      <Paper sx={{ padding: "0.75rem 0.5rem", background: "#202022" }}>
        <Typography sx={{ fontWeight: 500, color: "white" }} variant="body1">
          {item}
        </Typography>
        <Typography sx={{ fontWeight: 300, color: "#CBCFD4" }} variant="body2">
          N25 000
        </Typography>
      </Paper>
    </>
  );
}

export default Slides;
