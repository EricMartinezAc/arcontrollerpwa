import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Cookies from "universal-cookie";

function Dashboard(props) {
  const cookies = new Cookies();
  useEffect(() => {
    alert(cookies.get("token"));
  }, []);

  return <div>Dashboard</div>;
}

Dashboard.propTypes = {};

export default Dashboard;
