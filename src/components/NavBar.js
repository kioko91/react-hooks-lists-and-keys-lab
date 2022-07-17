import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksHeaders = links.map(linksData => {
    return (
      <a key={linksData} href={'#'+linksData}>{linksData}</a>
    )
  })

  return <nav>{linksHeaders}</nav>;
}

export default NavBar;
