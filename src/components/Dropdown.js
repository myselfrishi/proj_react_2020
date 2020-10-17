import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropDown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" variant="info" title="Menu">
      <Dropdown.Item>
        <Link to="/">Home Page</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Link to="/about">About</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Link to="/contact">Contact</Link>
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDown;
