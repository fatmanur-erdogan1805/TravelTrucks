import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import sprite from "../../../public/sprite.svg";

const Logo = () => {
  return (
    <NavLink to="/" className={css.logo}>
      <svg width={136} height={16}>
        <use href={`${sprite}#icon-TravelTrucks`} />
      </svg>
    </NavLink>
  );
};

export default Logo;
