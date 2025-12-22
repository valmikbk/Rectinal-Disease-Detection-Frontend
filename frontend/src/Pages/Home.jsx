import React from "react";
import { Grid } from "@mui/material";
import DetectionPanel from "../Components/DetectionPanel";
import MedicalActions from "../Components/MedicalActions";

export default function Home() {
  return (
    <Grid container minHeight="100vh">
      <Grid item xs={12} md={6}>
        <DetectionPanel />
      </Grid>
      <Grid item xs={12} md={6}>
        <MedicalActions />
      </Grid>
    </Grid>
  );
}
