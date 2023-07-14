import { NavLink } from "react-router-dom";
import splashImage from "../../images/splash.png";

const Splash = () => {
  return (
    <>
    <img src={splashImage} alt="splashImage" style={{height: "100%", width: "100%"}}></img>
      <nav>
        <NavLink to="/home">
          Home
        </NavLink>
      </nav>
    </>
  );
};

export default Splash;