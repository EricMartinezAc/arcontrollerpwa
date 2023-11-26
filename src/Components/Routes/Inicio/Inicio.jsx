import React, { Component, useEffect, useState } from "react";

//recursos
import "./Inicio.css";

//components

import Loading from "../../Comun/Loading";
import Header from "./Partials/Header/Header";
import Main from "./Partials/Main/Main";
import Aside from "./Partials/Aside/Aside";
import AlertCookies from "../Comun/Politicas/cookies/AlertCookies";
import Footer from "../Comun/Footer/Footer";

//funcionaidades
import Cookies from "universal-cookie";
import ValideCookies from "../../Comun/ModulosSis/ValideCookies";
import RestarApp from "../../Comun/ModulosSis/RestarApp";

import DescriptionAlerts from "../../Comun/DescriptionAlerts";
import ValideInputREGEXP from "../../Comun/ModulosSis/ValideInputREGEXP";
import { Box } from "@mui/material";
import { WindPower } from "@mui/icons-material";
import PropTypes from "prop-types";

function Inicio(props) {
  //window loading and alert
  const [stateLoading, setStateLoading] = useState("none");
  const [AlertDialogs, setAlertDialogs] = useState(["none", "", "", "", ""]);
  //legacy cookies
  const [stat_acept_cookies, setStat_acept_cookies] = useState(false);
  const [stat_inicio_sesion, setStat_inicio_sesion] = useState(false);

  //VALIDACIÓN DE COOKIES
  const cookies = new Cookies();

  const AceptacionCookies = () => {
    cookies.set("aceptLegacy", true, {
      path: "/",
      secure: true,
      sameSite: "strict",
      maxAge: 360000,
    });
    console.log(cookies.getAll());
    setStat_acept_cookies(true);
    setStat_inicio_sesion(true);
    setAlertDialogs([
      "block",
      "success",
      "Políticas de manejo de datos",
      "Ahora puedes usar al aplicación.",
      "Da clic en inicio de seión para continuar",
    ]);
    setTimeout(() => {
      setAlertDialogs(["none", "", "", "", ""]);
    }, 6000);
  };
  const DenegarCookies = () => {
    setAlertDialogs([
      true,
      "warning",
      "Políticas de manejo de datos",
      "Lo sentimos, las cookies son necesarias para el funcionamiento del sistema",
      "Puedes ver y usar otros servicios",
    ]);
    setTimeout(() => {
      setAlertDialogs(["none", "", "", "", ""]);
    }, 6000);
  };

  useEffect(() => {
    const rspValideCookies = ValideCookies("Inicio", cookies);
    if (rspValideCookies.routeTarjet === "none") {
      console.log("app segura");
    } else {
      setAlertDialogs([
        "block",
        "info",
        "Hola!",
        "Tiene un mensaje de servidor",
        rspValideCookies.msj,
      ])((window.location = rspValideCookies.routeTarjet));
    }
  }, []);

  return (
    <>
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
      <header>
        <Header
          setStateLoading={setStateLoading}
          stat_inicio_sesion={stat_inicio_sesion}
        />
      </header>
      <section
        className="section_alertCookies"
        style={{ display: stat_acept_cookies ? "none" : "block" }}
      >
        <AlertCookies
          AceptacionCookies={AceptacionCookies}
          DenegarCookies={DenegarCookies}
        />
      </section>
      <section className="section_inicio">
        <main>
          <Main />
        </main>
        <aside className="aside_inicio">
          <Aside />
        </aside>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

Inicio.propTypes = {};

export default Inicio;

// componentDidUpdate () {
//   if (state.stateAlertDialogs)
//     setTimeout(
//       () => CambiarEstadoDescriptionAlerts(false, '', '', '', ''),
//       4000
//     )
//   console.log(cookies.getAll())
// }
