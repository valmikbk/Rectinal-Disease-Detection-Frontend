import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  Chip
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { label: "Overview", path: "/patient-details", count: null },
  { label: "Journey", path: "/patient-journey", count: null },
  { label: "Appointments", path: "/patient-appointments", count: 2 },
  { label: "Medical Records", path: "/medical-records", count: 2 },
  { label: "Treatments", path: "/treatments-page", count: 1 },
  { label: "Retinal Images", path: "/retinal-images", count: 0 }
];

export default function PatientHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = tabs.findIndex(
    (tab) => tab.path === location.pathname
  );

  const handleChange = (e, newValue) => {
    navigate(tabs[newValue].path);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        color: "#000",
        borderBottom: "1px solid #e5e7eb"
      }}
    >
      {/* Top Section */}
      {/* <Toolbar sx={{ px: 3 }}>
        <Box>
          <Typography fontWeight={700}>James Wilson</Typography>
          <Typography variant="caption" color="text.secondary">
            Patient ID: P-001
          </Typography>
        </Box>
      </Toolbar> */}

      {/* Tabs */}
      <Tabs
        value={currentTab}
        onChange={handleChange}
        sx={{ px: 3 }}
        textColor="primary"
        indicatorColor="primary"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            sx={{ textTransform: "none", fontWeight: 500 }}
            label={
              <Box display="flex" alignItems="center" gap={1}>
                <Typography>{tab.label}</Typography>
                {/* {tab.count !== null && (
                  <Chip
                    label={tab.count}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: 12,
                      bgcolor: "#f3f4f6",
                      fontWeight: 600
                    }}
                  />
                )} */}
              </Box>
            }
          />
        ))}
      </Tabs>
    </AppBar>
  );
}
