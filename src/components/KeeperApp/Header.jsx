import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import {Icon} from "./KeeperElements";

function Header() {
  const headerC = { 
  backgroundColor: "#f5ba13",
  margin: "auto -16px",
  padding: "16px 32px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)"
}

  return (
    <header style={headerC}>
      <Icon to="/">
        <HighlightIcon />
        KeeperApp
      </Icon>
    </header>
  );
}

export default Header;
