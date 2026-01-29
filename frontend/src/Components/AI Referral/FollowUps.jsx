import React, { useState } from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  Button
} from "@mui/material";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import ReferralHeader from "./ReferralHeader";
import MedicareHeader from "../MedicareHeader";

export default function FollowUps() {
  const [filter, setFilter] = useState("all");

  // ===== Dummy Follow-up Data =====
  const followUps = [
    {
      id: 1,
      patient: "Ravi Kumar",
      // doctor: "Dr. Sharma",
      date: "29 Jan 2026",
      status: "pending"
    },
    {
      id: 2,
      patient: "Anita Verma",
      // doctor: "Dr. Mehta",
      date: "27 Jan 2026",
      status: "overdue"
    },
    {
      id: 3,
      patient: "Suresh Patel",
      // doctor: "Dr. Singh",
      date: "29 Jan 2026",
      status: "due_today"
    },
    {
      id: 4,
      patient: "Pooja Nair",
      // doctor: "Dr. Rao",
      date: "30 Jan 2026",
      status: "pending"
    }
  ];

  // ===== Filter Logic =====
  const filteredFollowUps =
    filter === "all"
      ? followUps
      : followUps.filter((f) => f.status === filter);

  // ===== Stats =====
  const total = followUps.length;
  const pending = followUps.filter(f => f.status === "pending").length;
  const overdue = followUps.filter(f => f.status === "overdue").length;
  const dueToday = followUps.filter(f => f.status === "due_today").length;

  // ===== Stat Card =====
  const StatCard = ({ title, value, color }) => (
    <Card
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
      }}
    >
      <Typography color="text.secondary" fontWeight={500}>
        {title}
      </Typography>
      <Typography variant="h4" fontWeight={800} sx={{ mt: 1, color }}>
        {value}
      </Typography>
    </Card>
  );

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* ===== Headers ===== */}
      <MedicareHeader />
      <ReferralHeader />

      {/* ===== Content ===== */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        {/* ===== Page Title ===== */}
        <Box display="flex" alignItems="center" gap={1.5} mb={4}>
          <NotificationsNoneOutlinedIcon
            sx={{ color: "#2563eb", fontSize: 28 }}
          />
          <Typography variant="h5" fontWeight={800}>
            Follow-Up Tracking
          </Typography>
        </Box>

        {/* ===== Stats ===== */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr)"
            },
            gap: 3,
            mb: 4
          }}
        >
          <StatCard title="Total Follow-ups" value={total} color="Green" />
          <StatCard title="Pending" value={pending} color="#d97706" />
          <StatCard title="Overdue" value={overdue} color="#dc2626" />
          <StatCard title="Due Today" value={dueToday} color="#ea580c" />
        </Box>

        {/* ===== Filter + List ===== */}
        <Card
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: "0 6px 18px rgba(0,0,0,0.06)"
          }}
        >
          {/* ===== Filters ===== */}
          <Box display="flex" gap={2} mb={4}>
            {[
              { label: "All", value: "all" },
              { label: "Pending", value: "pending" },
              { label: "Overdue", value: "overdue" },
              { label: "Due Today", value: "due_today" }
            ].map((item) => (
              <Button
                key={item.value}
                onClick={() => setFilter(item.value)}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  backgroundColor:
                    filter === item.value ? "#3b60d4" : "#f3f4f6",
                  color:
                    filter === item.value ? "#fff" : "#374151",
                  "&:hover": {
                    backgroundColor:
                      filter === item.value ? "#2f4ec7" : "#e5e7eb"
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* ===== Follow-up List ===== */}
          {filteredFollowUps.length === 0 ? (
            <Box
              sx={{
                height: 220,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Typography color="text.secondary">
                No follow-ups found
              </Typography>
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" gap={2}>
              {filteredFollowUps.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    border: "1px solid #e5e7eb",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Box>
                    <Typography fontWeight={700}>
                      {item.patient}
                    </Typography>
                    <Typography color="text.secondary" fontSize={14}>
                      {item.date}
                    </Typography>
                  </Box>

                  <Typography
                    fontWeight={700}
                    sx={{
                      color:
                        item.status === "pending"
                          ? "#d97706"
                          : item.status === "overdue"
                          ? "#dc2626"
                          : "#ea580c"
                    }}
                  >
                    {item.status.replace("_", " ").toUpperCase()}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Card>
      </Container>
    </Box>
  );
}
