import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Toolbar,
  Typography,
  Radio
} from "@material-ui/core";
import { Link, Route } from "react-router-dom";
import { auth } from "./firebase";

export default function Chart(props) {
  const [sleep, setSleep] = useState("");
  const [happiness, setHappiness] = useState(0);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper
        style={{ padding: 12, marginTop: 30, width: "100%", maxWidth: 400 }}
      >
        <Typography variant="h4">Chart</Typography>
      </Paper>
    </div>
  );
}
