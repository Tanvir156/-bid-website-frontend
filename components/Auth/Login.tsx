import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loginUser } from "./../../pages/api/users/login";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";
export default function Login() {
  const router = useRouter();
  const defaultTheme = createTheme();
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        router.push("/");
      }
    }
  }, [router]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading,setLoading]=useState(false)
  const handleSubmit = async (e) => {
    event.preventDefault();
    setLoading(true)
    if (password === "" || email === "") {
       toast.error("Fill required field");
        setLoading(false)
    } else {
      try {
        const userData = {
          email,
          password,
        };
        const response = await loginUser(userData);
        localStorage.setItem("userInfo", JSON.stringify(response));
        toast.success("Login Success");
        setLoading(false)
        router.push("/");
      } catch (error) {
        console.error(error);
        setLoading(false)
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
        <Toaster position="top-center" reverseOrder={false} />
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                {loading ? "Logging ..." : "Log In"}
                {loading && (
                  <CircularProgress size={24} sx={{ marginLeft: 2 }} />
                )}
              </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/registration" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
