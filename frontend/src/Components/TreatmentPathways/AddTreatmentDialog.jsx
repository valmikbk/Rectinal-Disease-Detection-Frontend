import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Grid,
  Typography,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function AddTreatmentDialog({ open, onClose }) {
  const [form, setForm] = React.useState({
    type: "Medication",
    name: "",
    startDate: null,
    endDate: null,
    dosage: "",
    frequency: "",
    status: "Active",
    notes: ""
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{ sx: { borderRadius: 3 } }}
    >
      {/* Header */}
      <DialogTitle
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <EditOutlinedIcon color="primary" />
        <Typography variant="h6" flexGrow={1}>
          Add Treatment
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Content */}
      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container spacing={2.5} mt={0.5}>
            {/* Row 1 */}
            <Grid item xs={12} md={6}>
              <TextField
                select
                label="Treatment Type"
                value={form.type}
                onChange={handleChange("type")}
                fullWidth
              >
                <MenuItem value="Medication">Medication</MenuItem>
                <MenuItem value="Injection">Injection</MenuItem>
                <MenuItem value="Procedure">Procedure</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Treatment Name"
                placeholder="e.g., Anti-VEGF Injection"
                value={form.name}
                onChange={handleChange("name")}
                fullWidth
              />
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} md={6}>
              <DatePicker
                label="Start Date"
                value={form.startDate}
                onChange={(value) =>
                  setForm({ ...form, startDate: value })
                }
                slotProps={{ textField: { fullWidth: true } }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <DatePicker
                label="End Date (Optional)"
                value={form.endDate}
                onChange={(value) =>
                  setForm({ ...form, endDate: value })
                }
                slotProps={{ textField: { fullWidth: true } }}
              />
            </Grid>

            {/* Row 3 */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Dosage"
                placeholder="e.g., 0.5mg"
                value={form.dosage}
                onChange={handleChange("dosage")}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Frequency"
                placeholder="e.g., Once monthly"
                value={form.frequency}
                onChange={handleChange("frequency")}
                fullWidth
              />
            </Grid>

            {/* Row 4 */}
            <Grid item xs={12} md={6}>
              <TextField
                select
                label="Status"
                value={form.status}
                onChange={handleChange("status")}
                fullWidth
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Paused">Paused</MenuItem>
              </TextField>
            </Grid>

            {/* Notes */}
            <Grid item xs={12}>
              <TextField
                label="Notes"
                placeholder="Additional treatment notes..."
                value={form.notes}
                onChange={handleChange("notes")}
                fullWidth
                multiline
                minRows={4}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ px: 4 }}
        >
          Save Treatment
        </Button>
      </DialogActions>
    </Dialog>
  );
}