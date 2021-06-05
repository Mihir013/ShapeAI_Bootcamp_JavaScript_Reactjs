import React from "react";

function Footer() {
  var curryear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>copyright @ {curryear}</p>
    </div>
  );
}

export default Footer;
