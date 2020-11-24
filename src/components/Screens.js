import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Colors from "../constants/colors";
import logo13 from "../images/13.webp";
import logo12 from "../images/12.webp";
import logo11 from "../images/11.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(43),
      height: theme.spacing(36),
    },
    justifyContent: "space-around",
    marginTop: 40,
    marginBottom: 50,
  },
}));

const StyledPaper = withStyles({
  root: {
    fontFamily: "Mate SC, serif",
    //backgroundColor: "",
    backgroundColor: Colors.screens,
    borderRadius: 5,
  },
})(Paper);

const Screens = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>The Latest Blog Posts</h1>
      <div className={classes.root}>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/top-15-most-useful-tools-in-2020/">
            <img
              className="image"
              src={logo13}
              width="350px"
              height="290px"
              alt="blog-post-13-logo"
            />
          </a>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/top-15-resources-to-learn-coding/">
            <img
              className="image"
              src={logo12}
              width="350px"
              height="290px"
              alt="blog-post-12-logo"
            />
          </a>
        </StyledPaper>
        <StyledPaper elevation={6}>
          <a href="https://create-react-app.com/11-php/">
            <img
              className="image"
              src={logo11}
              width="350px"
              height="290px"
              alt="blog-post-11-logo"
            />
          </a>
        </StyledPaper>
      </div>
    </div>
  );
};

export default Screens;
