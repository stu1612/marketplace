// npm
import { useLocation, Link } from "react-router-dom";

// files
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

import data from "../data/navbar";

export default function Navbar() {
  // properties
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const icons = { OfferIcon, ExploreIcon, PersonOutlineIcon };

  const NavList = data.map((item, index) => {
    const Icon = icons[`${item.icon}Icon`];
    return (
      <Link className="navbarListItem" to={item.path} key={index}>
        <Icon
          fill={pathMatchRoute(`${item.path}`) ? "#2c2c2c" : "#8f8f8f"}
          width="36px"
          height="36px"
        />
        <p
          className={
            pathMatchRoute(`${item.path}`)
              ? "navbarListItemNameActive"
              : "navbarListItemName"
          }
        >
          {item.name}
        </p>
      </Link>
    );
  });

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">{NavList}</ul>
      </nav>
    </footer>
  );
}
