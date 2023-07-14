import { NavLink } from "react-router-dom";
import splashImage from "../../images/splash.png";
import waldoImage from "../../images/waldo.png";

const Splash = () => {
  return (
    <>
    <img src={splashImage} alt="splashImage" style={{height: "100%", width: "100%", zIndex: "1"}}></img>
    {/* <img src={waldoImage} alt="waldoImage" style={{position: "absolute", top: "25px", left: "25px", zIndex: "2"}}></img> */}
      <nav>
        <NavLink to="/home">
          <img src={waldoImage} alt="waldoImage" style={{ height: "50px", position: "absolute", bottom: "200px", right: "250px", zIndex: "2" }}></img>
        </NavLink>
      </nav>
    </>
  );
};

export default Splash;



// img {
//   position: absolute;
//   top: 25px;
//   left: 25px;
// }
// .imgA1 {
//   z - index: 1;
// }
// .imgB1 {
//   z - index: 3;
// }