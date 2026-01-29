import React, { useState } from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  Button
} from "@mui/material";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import ReferralHeader from "./ReferralHeader";
import MedicareHeader from "../MedicareHeader";

export default function Referrals() {
  const [filter, setFilter] = useState("all");

  // ===== Dummy Referral Data =====
  const referrals = [
    {
      id: 1,
      patient: "Ravi Kumar",
      referredBy: "Dr. Sharma",
      department: "Cardiology",
      priority: "urgent",
      status: "pending",
      date: "29 Jan 2026"
    },
    {
      id: 2,
      patient: "Anita Verma",
      referredBy: "Dr. Mehta",
      department: "Neurology",
      priority: "normal",
      status: "completed",
      date: "27 Jan 2026"
    },
    {
      id: 3,
      patient: "Suresh Patel",
      referredBy: "Dr. Singh",
      department: "Orthopedics",
      priority: "urgent",
      status: "pending",
      date: "28 Jan 2026"
    },
    {
      id: 4,
      patient: "Pooja Nair",
      referredBy: "Dr. Rao",
      department: "Dermatology",
      priority: "normal",
      status: "completed",
      date: "25 Jan 2026"
    }
  ];

  // ===== Filter Logic =====
  const filteredReferrals =
    filter === "all"
      ? referrals
      : filter === "urgent"
      ? referrals.filter(r => r.priority === "urgent")
      : referrals.filter(r => r.status === filter);

  // ===== Stats =====
  const total = referrals.length;
  const pending = referrals.filter(r => r.status === "pending").length;
  const urgent = referrals.filter(r => r.priority === "urgent").length;
  const completed = referrals.filter(r => r.status === "completed").length;

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
          <DescriptionOutlinedIcon sx={{ color: "#2563eb", fontSize: 28 }} />
          <Typography variant="h5" fontWeight={800}>
            Referral Management
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
          <StatCard title="Total Referrals" value={total} color="#499451ff" />
          <StatCard title="Pending" value={pending} color="#d97706" />
          <StatCard title="Urgent / Emergency" value={urgent} color="#dc2626" />
          <StatCard title="Completed" value={completed} color="#16a34a" />
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
              { label: "Urgent", value: "urgent" },
              { label: "Completed", value: "completed" }
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

          {/* ===== Referral List ===== */}
          {filteredReferrals.length === 0 ? (
            <Box
              sx={{
                height: 220,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Typography color="text.secondary">
                No referrals found
              </Typography>
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" gap={2}>
              {filteredReferrals.map((item) => (
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
                    {/* <Typography color="text.secondary" fontSize={14}>
                      {item.department} • {item.referredBy}
                    </Typography> */}
                    <Typography color="text.secondary" fontSize={13}>
                      {item.date}
                    </Typography>
                  </Box>

                  <Typography
                    fontWeight={700}
                    sx={{
                      color:
                        item.priority === "urgent"
                          ? "#dc2626"
                          : item.status === "completed"
                          ? "#16a34a"
                          : "#d97706"
                    }}
                  >
                    {item.priority === "urgent"
                      ? "URGENT"
                      : item.status.toUpperCase()}
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
