import { Container, Grid, Paper, Typography } from "@mui/material";
import LoginForm from "./LoginForm";
import imgLogin from "../../assets/img/smartfarm.svg";

function Login() {
  const year = new Date().getFullYear();
  return (
    <div className="login-container">
      <div className="bg-container">
        <div className="bg-img" />
        <div className="bg-blue" />
      </div>
      <div className="form-login-container">
        <Container>
          <Paper elevation={3} className="paper-form-login">
            <Grid
              container
              spacing={2}
              sx={{
                height: "97%",
              }}
            >
              <Grid
                item
                sm={12}
                md={5}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <img
                  src={imgLogin}
                  alt="imagelogin"
                  className="right-img-login"
                />
              </Grid>
              <Grid
                item
                sm={12}
                md={7}
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LoginForm />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">
                  © {year}{" "}
                  <a
                    href="https://www.sispycom.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Agroinnova - Paraguay
                  </a>
                  , All rights reserved.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    </div>
  );
}
export default Login;
