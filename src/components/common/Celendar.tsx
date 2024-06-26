import { useTheme } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../theme";

const celendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateClick = () => {
    const title = prompt("pleas")
  }
  return <div>celendar</div>;
};

export default celendar;
