/* eslint-disable @typescript-eslint/no-misused-promises */
import { Button, Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CustomInputForm from "../../components/Form/CustomInputForm";
import FormContainer from "../../components/Form/FormContainer";
import LoginControllers from "../../controllers/LoginControllers";
import logo from "../../assets/img/Agroinnova_icono.png";

export default function LoginForm() {
  const { handleSubmitData, onSendSubmit, controlInputs, errorsData } =
    LoginControllers();

  return (
    <FormContainer
      mode="form"
      onSubmit={handleSubmitData(onSendSubmit)}
      style={{ background: "none" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} display="flex" justifyContent="left">
          <img src={logo} alt="logo Agroinnova" width="80px" />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Typography variant="h3" align="left">
            Iniciar Sesión
          </Typography>
          <Typography variant="caption" align="left">
            Portal para la automatización de procesos Agroinnova
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomInputForm
            name="user"
            control={controlInputs}
            error={errorsData.user}
            label="Correo electrónico"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInputForm
            name="password"
            type="password"
            control={controlInputs}
            error={errorsData.password}
            label="Contraseña"
          />
        </Grid>
        <Box display="flex" justifyContent="right" width="100%">
          <Link
            style={{ color: "#297348", fontSize: "12px" }}
            to="/lostpassword"
          >
            Olvidé mi contraseña
          </Link>
        </Box>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" size="small">
            Iniciar
          </Button>
        </Grid>
      </Grid>
    </FormContainer>
  );
}
