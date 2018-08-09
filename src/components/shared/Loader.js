import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Paper } from "material-ui";

const Loader = ({ loading }) => {
  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <div>
            <CircularProgress size={70} thickness={5} />
            <br />
            <p style={styles.loadText}>Loading...</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Paper
        className="col-lg-10 col-md-10 col-xs-10"
        style={styles.mainContainer}
      >
        hello
      </Paper>
    );
  }
};

const styles = {
  mainContainer: {
    height: "600px",
    paddingTop: "20px",
    overflow: "auto",
    paddingBottom: "20px",
  },
  container: {
    position: "fixed",
    zIndex: "10",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    backgroundColor: `rgba(238, 238, 238, 1)`,
  },
  content: {
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  loadText: { paddingTop: "30px", color: "#ff8f00", fontSize: "16px" },
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
