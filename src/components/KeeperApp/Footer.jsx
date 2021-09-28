import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const foteer= {
    position: "absolute",
  textAlign: "center",
  bottom: "0",
  width: "100%",
  height: "2.5rem"
  }
  
  return (
    <footer style={foteer}>
      <p style={{color: "#ccc"}}>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
