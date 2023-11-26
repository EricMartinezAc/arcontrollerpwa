import React, { useState } from "react";
import clsx from "clsx";
import rutaImgLogoPNG from "../../../Assets/Imgs/logos/logo_153x124.png";
import { Badge, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Colores from "../../Comun/ModulosGen/Colores";
import { CameraEnhance } from "@mui/icons-material";
import PropTypes from "prop-types";

function Toolbar_dashboard({
  fecha,
  user,
  actions,
  setActions,
  handleDrawer,
  openDrawer,
  CerrarApp,
}) {
  const MonstrarNotificaiones = () => {
    return true;
  };
  const MostrarMensajes = () => {
    return true;
  };
  return (
    <>
      <Toolbar
        sx={{
          background: Colores.azul,
        }}
      >
        {/* boton de menu icono */}
        <IconButton
          edge="start"
          aria-label="open drawer"
          onClick={handleDrawer}
          className={clsx(openDrawer)}
        >
          <img
            alt="logo"
            style={{
              width: 50,
              borderRadius: "0",
              marginRight: 30,
              marginTop: 4,
            }}
            src={rutaImgLogoPNG}
          />
        </IconButton>
        <Grid direction="row" justifyContent="flex-end" container spacing={1}>
          {/* //tittle */}
          <Grid item xs={8}>
            <Typography
              style={{ fontFamily: "Poppins" }}
              component="h1"
              variant="h6"
              noWrap
            >
              {user.name || "Invitado"} /{user.area || "Sin Área"}
            </Typography>
          </Grid>
          {/* barra de Notificaciones */}
          <Grid item lg={1}>
            <IconButton>
              <Badge badgeContent={actions[0]} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Grid>
          {/* barra de mensajes */}
          <Grid item lg={1}>
            <IconButton>
              <Badge badgeContent={actions[1]} color="secondary">
                <MessageIcon />
              </Badge>
            </IconButton>
          </Grid>
          {/* Boton apagado */}
          <Grid item lg={1}>
            <IconButton onClick={CerrarApp}>
              <PowerSettingsNewIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}

Toolbar_dashboard.propTypes = {};

export default Toolbar_dashboard;
