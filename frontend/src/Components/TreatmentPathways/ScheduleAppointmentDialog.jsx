import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Typography,
  Select,
  FormControl,
  InputLabel,
  Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const appointmentTypes = [
  "Screening",
  "Consultation",
  "Follow-up",
  "Treatment"
];

const treatmentTypes = [
  "Injection",
  "Laser Therapy",
  "Medication",
  "Surgery"
];

export default function ScheduleAppointmentDialog({ open, onClose }) {
  const [appointmentType, setAppointmentType] = React.useState("Screening");
  const [treatmentType, setTreatmentType] = React.useState("");

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3 }
      }}
      BackdropProps={{
        sx: { backgroundColor: "rgba(0,0,0,0.45)" }
      }}
    >
      {/* Header */}
      <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
        <EventOutlinedIcon color="primary" sx={{ mr: 1 }} />
        <Typography fontWeight={600} flexGrow={1}>
          Schedule Appointment
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 1 }}>
        {/* Appointment Type */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Appointment Type</InputLabel>
          <Select
            value={appointmentType}
            label="Appointment Type"
            onChange={(e) => setAppointmentType(e.target.value)}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "#3f3f46",
                  color: "white",
                  borderRadius: 2
                }
              }
            }}
          >
            {appointmentTypes.map((type) => (
              <MenuItem
                key={type}
                value={type}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  bgcolor:
                    appointmentType === type ? "#60a5fa" : "transparent",
                  "&:hover": { bgcolor: "#60a5fa" }
                }}
              >
                {type}
                {appointmentType === type && (
                  <CheckIcon fontSize="small" />
                )}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Treatment Type (NEW) */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Treatment Type</InputLabel>
          <Select
            value={treatmentType}
            label="Treatment Type"
            onChange={(e) => setTreatmentType(e.target.value)}
          >
            {treatmentTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Date */}
        <TextField
          label="Date"
          fullWidth
          placeholder="dd/mm/yyyy"
          margin="normal"
          InputProps={{
            endAdornment: <CalendarTodayOutlinedIcon fontSize="small" />
          }}
        />

        {/* Time */}
        <TextField
          label="Time"
          fullWidth
          placeholder="--:-- --"
          margin="normal"
          InputProps={{
            endAdornment: <AccessTimeOutlinedIcon fontSize="small" />
          }}
        />

        {/* Doctor Name (ENSURED) */}
        <TextField
          label="Doctor Name"
          fullWidth
          defaultValue="Dr. Smith"
          margin="normal"
        />
        {/* Notes */}
        <TextField
          label="Notes"
          fullWidth
          multiline
          rows={3}
          placeholder="Additional notes..."
          margin="normal"
        />
      </DialogContent>

      {/* Footer Buttons (Cancel & Schedule) */}
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Box display="flex" gap={2} width="100%">
          <Button
            variant="outlined"
            fullWidth
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            fullWidth
          >
            Schedule
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}