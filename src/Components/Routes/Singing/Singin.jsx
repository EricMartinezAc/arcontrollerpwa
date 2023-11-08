import React, { Component, useState, useEffect } from "react";
import { AssistWalkerTwoTone } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Cookies from "universal-cookie";
import axios from "axios";

import ValideCookies from "../../Comun/ModulosSis/ValideCookies";
import ReqResDatos_auth_API from "../../Comun/ModulosSis/class_authAPI";
//import RestarApp from '../../Comun/ModulosSis/RestarApp';

import Login from "./Login/Login";
import Registro from "./Login/Registro";
import DescriptionAlerts from "../../Comun/DescriptionAlerts";
import Loading from "../../Comun/Loading";
import pages from "../../../const/pages";

import PropTypes from "prop-types";

function Singin(props) {
  const [visibleFormAuth, setVisibleFormAuth] = useState(true);
  const cookies = new Cookies();
  const reqResDatos_auth_API = new ReqResDatos_auth_API();
  //window loading and alert
  const [stateLoading, setStateLoading] = useState("none");
  const [AlertDialogs, setAlertDialogs] = useState(["none", "", "", "", ""]);
  useEffect(() => {
    setTimeout(() => {
      setStateLoading("none");
      setAlertDialogs(["none", "", "", "", ""]);
    }, 6000);
  }, [stateLoading, AlertDialogs]);
  //validar cookies previo
  const rspValideCookies = ValideCookies("Singin", cookies);
  //valide aceptación de politicas
  useEffect(() => {
    if (typeof cookies.get("aceptLegacy") !== "undefined") {
      setAlertDialogs([
        true,
        "error",
        "APLICACIÓN VERIFICADA",
        "permisos denegados: ",
        "Debes aceptar políticas de aplicación para usarla",
      ]);
      setTimeout(() => {
        window.location = pages.local;
      }, 6000);
    }
  }, []);
  //valide sesión
  useEffect(() => {
    if (rspValideCookies.value) {
      setAlertDialogs([
        "block",
        "info",
        "validación de sesión",
        "Sesión activa.",
        rspValideCookies.msj,
      ]);
      setTimeout(() => {
        setStateLoading("block");
        setTimeout(() => {
          reqResDatos_auth_API.GetAPP(cookies.get("token", axios));
        }, 2000);
      }, 6000);
    }
  }, []);
  //

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#a9a",
        height: "auto",
        //`repeat(auto-fit, minmax('150px', '1fr'))`
      }}
    >
      {/* ALERTAS */}
      <Box
        sx={{
          display: stateLoading,
          backgroundColor: "rgba(238, 221, 238, 0.742)",
          zIndex: 10,
          position: "absolute",
          width: "100%",
          height: "125%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading />
      </Box>
      <Box
        sx={{
          display: AlertDialogs[0],
          zIndex: 10,
          width: "100%",
          height: "auto",
          position: "absolute",
          top: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DescriptionAlerts
          AlertSeverity={AlertDialogs[1]}
          AlertTilte={AlertDialogs[2]}
          AlertMsjLow={AlertDialogs[3]}
          AlertMsjHight={AlertDialogs[4]}
        />
      </Box>

      {/* Forms */}
      <Grid
        sx={{
          padding: "0 5%",
        }}
        item
        md={5}
        xs={12}
      >
        {/* RGTR */}
        {/* <Box
          sx={{
            display: visibleFormAuth ? "none" : "true",
          }}
        >
          <Registro />
        </Box> */}
        {/* LOGIN */}
        <Box
          sx={{
            display: visibleFormAuth ? "true" : "none",
          }}
        >
          <Login />
        </Box>
      </Grid>
      {/* Handle visible forms */}
      <Grid
        sx={{
          backgroundColor: "#ede",
        }}
        item
        md={7}
        xs={12}
      >
        <Box
          borderLeft={3}
          borderColor="#989"
          sx={{
            padding: "50px 100px 0 100px",
            height: "100vh",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              width: "100%",
            }}
          >
            {visibleFormAuth
              ? "Si desea incorporar un nuevo usuario"
              : "Inicie sesión con usuario registrado"}
            <Link
              sx={{ marginLeft: "5px" }}
              // onClick={CambiarVisibleFormAuth}
            >
              clic aquí
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

Singin.propTypes = {};

export default Singin;
