import React, { useState } from "react";
import { Button, TextField, Typography, Container, Box, LinearProgress, Paper } from "@mui/material";
import axios from "axios";

function App() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleSubmit = async () => {
    if (!resume || !jobDescription) {
      alert("Please upload a resume and provide a job description.");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);

    try {
      // Replace this URL with your actual backend/AI API endpoint
      const response = await axios.post("https://your-backend-api.com/analyze", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAdvice(response.data.advice);
    } catch (error) {
      setAdvice("There was an error analyzing your resume. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: 40 }}>
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 3 }}>
        <Typography variant="h3" color="primary" align="center" gutterBottom>
          NextStep Advisor
        </Typography>
        <Typography variant="subtitle1" align="center" mb={3}>
          Personalized career guidance and instant resume feedback for your next step!
        </Typography>

        <Box mb={3}>
          <Typography variant="h6">Upload Your Resume</Typography>
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} style={{ marginTop: 12 }} />
        </Box>

        <Box mb={3}>
          <Typography variant="h6">Paste Job Description</Typography>
          <TextField
            variant="outlined"
            multiline
            fullWidth
            rows={6}
            placeholder="Enter the job or career goal you're interested in..."
            value={jobDescription}
            onChange={handleJobDescriptionChange}
            sx={{ marginTop: 1 }}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          sx={{ mb: 2 }}
          fullWidth
          disabled={loading}
        >
          Analyze & Get Advice
        </Button>
        {loading && <LinearProgress sx={{ mb: 2 }} />}

        {advice && (
          <Paper sx={{ padding: 3, background: "#e3f2fd", mt: 2, borderRadius: 2 }}>
            <Typography variant="h6" color="primary">
              Tailored Advice:
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt: 1 }}>
              {advice}
            </Typography>
          </Paper>
        )}
      </Paper>
    </Container>
  );
}

export default App;
