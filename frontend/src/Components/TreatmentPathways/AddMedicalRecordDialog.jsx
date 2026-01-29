import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Stack,
  Typography,
  IconButton
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CloseIcon from "@mui/icons-material/Close";

export default function AddMedicalRecordDialog({ open, onClose }) {
  const [formData, setFormData] = React.useState({
    recordType: "Consultation",
    doctorName: "Dr. Smith",
    diagnosis: "",
    observations: "",
    rationale: "",
    recommendations: ""
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: { borderRadius: 3 }
      }}
    >
      {/* Header */}
      <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <DescriptionOutlinedIcon color="primary" />
        <Typography variant="h6" flexGrow={1}>
          Add Medical Record
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Content */}
      <DialogContent>
        <Stack spacing={2.5} mt={1}>
          <TextField
            select
            label="Record Type"
            value={formData.recordType}
            onChange={handleChange("recordType")}
            fullWidth
          >
            <MenuItem value="Consultation">Consultation</MenuItem>
            <MenuItem value="Diagnosis">Diagnosis</MenuItem>
            <MenuItem value="Progress Note">Progress Note</MenuItem>
          </TextField>

          <TextField
            label="Doctor Name"
            value={formData.doctorName}
            onChange={handleChange("doctorName")}
            fullWidth
          />

          <TextField
            label="Diagnosis"
            placeholder="Primary diagnosis..."
            value={formData.diagnosis}
            onChange={handleChange("diagnosis")}
            fullWidth
            multiline
            minRows={2}
          />

          <TextField
            label="Clinical Observations"
            placeholder="Detailed clinical observations..."
            value={formData.observations}
            onChange={handleChange("observations")}
            fullWidth
            multiline
            minRows={3}
          />

          <TextField
            label="Treatment Rationale"
            placeholder="Reasoning for treatment approach..."
            value={formData.rationale}
            onChange={handleChange("rationale")}
            fullWidth
            multiline
            minRows={3}
          />

          <TextField
            label="Recommendations"
            placeholder="Follow-up recommendations..."
            value={formData.recommendations}
            onChange={handleChange("recommendations")}
            fullWidth
            multiline
            minRows={3}
          />
        </Stack>
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ p: 2 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ borderRadius: 2 }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: 2, px: 3 }}
        >
          Save Record
        </Button>
      </DialogActions>
    </Dialog>
  );
}