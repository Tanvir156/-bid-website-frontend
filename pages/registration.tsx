import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useRouter } from "next/router";
import { createUser } from "./api/users/register";
function Registration({ history }) {
  const router = useRouter();
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        router.push("/");
      }
    }
  }, [router]);
  const theme = createTheme();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const strongPasswordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const checkPasswordStrength = (password) => {
    if (strongPasswordPattern.test(password)) {
      setPasswordStrength("strong");
      setPasswordError("");
    } else if (password === "") {
      setPasswordStrength("");
      setPasswordError("");
    } else {
      setPasswordStrength("weak");
      setPasswordError("Please provide a strong password.");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password === "") {
      setMessage("Please provide required field");
    } else if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else {
      try {
        const userData = {
          name,
          email,
          password,
        };
        const response = await createUser(userData);
        localStorage.setItem("userInfo", JSON.stringify(response));
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className="googlestyle">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1 }}
              style={{ background: "#1976d2", marginTop: "-40px" }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={submitHandler}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="firstName"
                    required
                    fullWidth
                    label="Name"
                    autoFocus
                    value={name}
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    error={passwordError !== ""}
                    helperText={passwordError}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      checkPasswordStrength(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Confirm Password"
                    type="password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading} // Add the disabled attribute based on the loading state
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item style={{ marginBottom: "20px" }}>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
export default Registration;
