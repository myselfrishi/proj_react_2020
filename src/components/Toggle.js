import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core";
import Colors from "../constants/colors";
import clip5 from "../images/dc2.png";
import clip3 from "../images/clip-3.png";

const StyledSwitch = withStyles({
  switchBase: {
    color: Colors.blog,
    "&$checked": {
      color: Colors.screens,
    },
    "&$checked + $track": {
      backgroundColor: Colors.gray,
    },
  },
  checked: {},
  track: {},
})(Switch);

const SwitchLabels = (props) => {
  const [logo, setLogo] = useState(clip5);
  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    event.target.checked === true ? setLogo(clip3) : setLogo(clip5);
  };

  return (
    <div className="togglePic">
      <FormGroup row>
        <FormControlLabel
          control={
            <StyledSwitch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label=""
        />
      </FormGroup>
      <img src={logo} alt="Logo" width="350px" className="headerClip" />
    </div>
  );
};

export default SwitchLabels;
