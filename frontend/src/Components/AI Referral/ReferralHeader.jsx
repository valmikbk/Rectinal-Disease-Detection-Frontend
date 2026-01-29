import React from "react";
import {
  AppBar,
  Tabs,
  Tab
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

export default function ReferralHeader() {
  const location = useLocation();

  // Map routes to tab index
  const currentTab = () => {
    if (location.pathname === "/register-patient") return 1;
    // if (location.pathname === "/ai-screening") return 2;
    // if (location.pathname === "/referrals") return 3;
    if (location.pathname === "/follow-ups") return 4;
    return 0; // overview
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: "#fff", color: "#000" }}
    >
      <Tabs
        value={currentTab()}
        textColor="primary"
        indicatorColor="primary"
        sx={{ px: 3 }}
      >
        <Tab
          label="Overview"
          component={Link}
          to="/ai-referral-overview"
        />

        <Tab
          icon={<PersonAddAltIcon />}
          iconPosition="start"
          label="Register Patient"
          component={Link}
          to="/register-patient"
        />

        {/* <Tab
          label="AI Screening"
          component={Link}
          to="/ai-screening"
        /> */}

        {/* <Tab
          label="Referrals"
          component={Link}
          to="/referrals"
        /> */}

        <Tab
          label="Follow-ups"
          component={Link}
          to="/follow-ups"
        />
      </Tabs>
    </AppBar>
  );
}
