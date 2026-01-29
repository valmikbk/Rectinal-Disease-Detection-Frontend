import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Button,
  Grid,
  Avatar,
  Divider,
  TextField
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MedicareHeader from "./MedicareHeader";

/* ================= CONSTANTS ================= */

const START_DATE = dayjs("2025-02-01");
const END_DATE = dayjs("2025-02-10");

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00",
  "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

/* 🔴 Dummy booked slots */
const bookedSlotsByDate = {
  "Sat, Feb 01": ["09:00", "09:30"],
  "Sun, Feb 02": [...timeSlots], // fully booked
  "Mon, Feb 03": ["10:30", "12:00"],
  "Wed, Feb 05": ["15:30"],
  "Thu, Feb 06": [...timeSlots] // fully booked
};

/* ================= UTIL ================= */

const generateDates = () => {
  const list = [];
  let d = START_DATE;

  while (d.isBefore(END_DATE) || d.isSame(END_DATE, "day")) {
    list.push(d.format("ddd, MMM DD"));
    d = d.add(1, "day");
  }

  return list;
};

const dates = generateDates();

/* ================= COMPONENT ================= */

export default function ScheduleAppointment() {
  const [selectedDate, setSelectedDate] = useState("");
  const [calendarDate, setCalendarDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [mode, setMode] = useState("In-Person");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState(2);

  const location = useLocation();
  const referralData = location.state || {};

  const bookedSlotsForSelectedDate =
    bookedSlotsByDate[selectedDate] || [];

  const isDateFullyBooked = (date) =>
    (bookedSlotsByDate[date]?.length || 0) === timeSlots.length;

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <MedicareHeader />

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Button startIcon={<ArrowBackIcon />} sx={{ mb: 2 }}>
          Back to Results
        </Button>

        <Card sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" fontWeight={700}>
              Schedule Appointment
            </Typography>

            {/* ===== DATE ===== */}
            <Box mt={4}>
              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <CalendarTodayOutlinedIcon fontSize="small" />
                <Typography fontWeight={600}>Select Date</Typography>
              </Box>

              <Grid container spacing={2}>
                {dates.map((date) => {
                  const fullyBooked = isDateFullyBooked(date);

                  return (
                    <Grid item xs={6} sm={4} key={date}>
                      <Button
                        fullWidth
                        disabled={fullyBooked}
                        onClick={() => {
                          setSelectedDate(date);
                          setSelectedTime("");
                          setCalendarDate(null);
                        }}
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 600,
                          backgroundColor: fullyBooked
                            ? "#c03728ff"
                            : selectedDate === date
                              ? "#4caf93"
                              : "#fff",
                          color: fullyBooked ? "#d32f2f" : "#000"
                        }}
                      >
                        {date}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>

              {/* Calendar */}
              <Box mt={3} maxWidth={260}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    minDate={START_DATE}
                    maxDate={END_DATE}
                    label="Choose date from calendar"
                    shouldDisableDate={(date) =>
                      isDateFullyBooked(date.format("ddd, MMM DD"))
                    }
                    value={calendarDate}
                    onChange={(newDate) => {
                      setCalendarDate(newDate);
                      setSelectedDate(newDate.format("ddd, MMM DD"));
                      setSelectedTime("");
                    }}
                    slotProps={{ textField: { size: "small", fullWidth: true } }}
                  />
                </LocalizationProvider>
              </Box>
            </Box>

            {/* ===== TIME ===== */}
            {selectedDate && (
              <Box mt={5}>
                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <AccessTimeIcon fontSize="small" />
                  <Typography fontWeight={600}>Select Time</Typography>
                </Box>

                <Grid container spacing={2}>
                  {timeSlots.map((time) => {
                    const isBooked =
                      bookedSlotsForSelectedDate.includes(time);

                    return (
                      <Grid item xs={6} sm={3} key={time}>
                        <Button
                          fullWidth
                          disabled={isBooked}
                          onClick={() => setSelectedTime(time)}
                          sx={{
                            py: 1.4,
                            borderRadius: 2,
                            backgroundColor: isBooked
                              ? "#c03728ff"
                              : selectedTime === time
                                ? "#86cb9cff"
                                : "#fff",
                            color: isBooked ? "#d32f2f" : "#000"
                          }}
                        >
                          {time}
                        </Button>
                      </Grid>
                    );
                  })}
                </Grid>

                {/* MODE */}
                <Box mt={5}>
                  <Typography fontWeight={600} mb={2}>
                    Appointment Mode
                  </Typography>
                  <Grid container spacing={2}>
                    {["In-Person", "Online"].map((item) => (
                      <Grid item xs={6} key={item}>
                        <Button
                          fullWidth
                          onClick={() => setMode(item)}
                          sx={{
                            py: 1.6,
                            borderRadius: 2,
                            color: "black",
                            backgroundColor:
                              mode === item ? "#6fbb9eff" : "#fff"
                          }}
                        >
                          {item}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* NOTES */}
                <Box mt={4}>
                  <Typography fontWeight={600} mb={1}>
                    Notes (Optional)
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </Box>

                {/* CONFIRM */}
                <Box mt={5}>
                  <Button
                    fullWidth
                    disabled={!selectedTime}
                    variant="contained"
                    onClick={() =>
                      navigate("/smart-referral-confirmed", {
                        state: {
                          appointment: {
                            hospital: referralData.hospital || "N/A",
                            address: referralData.address || "N/A",
                            specialization: referralData.specialization || referralData.doctorSpecialty,
                            doctor: referralData.doctor || "Assigned at hospital",
                            doctorSpecialty: referralData.doctorSpecialty || "Ophthalmology",
                            date: selectedDate,
                            time: selectedTime,
                            mode,
                            costRange: referralData.costRange || referralData.fee || "N/A",
                            distance: "5.2 km (estimated)"
                          }
                        }
                      })
                    }

                    sx={{
                      py: 1.8,
                      borderRadius: 2,
                      backgroundColor: "#009688"
                    }}
                  >
                    Confirm Appointment
                  </Button>
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
