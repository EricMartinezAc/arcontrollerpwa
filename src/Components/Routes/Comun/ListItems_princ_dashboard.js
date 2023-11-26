import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessIcon from "@mui/icons-material/Business";
import InsightsIcon from "@mui/icons-material/Insights";
import EngineeringIcon from "@mui/icons-material/Engineering";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PropTypes from "prop-types";

function ListItems_princ_dashboard({ handleWindow }) {
  return (
    <>
      {/* Dashboard */}
      <ListItem button onClick={() => handleWindow("0")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      {/* contabilidad */}
      <ListItem button onClick={() => handleWindow("1")}>
        <ListItemIcon>
          <InsightsIcon />
        </ListItemIcon>
        <ListItemText primary="Contabilidad" />
      </ListItem>
      {/* mtto */}
      <ListItem button onClick={() => handleWindow("2")}>
        <ListItemIcon>
          <EngineeringIcon />
        </ListItemIcon>
        <ListItemText primary="Mantenimiento" />
      </ListItem>
    </>
  );
}

ListItems_princ_dashboard.propTypes = {
  handleWindow: PropTypes.func,
};

export default ListItems_princ_dashboard;
