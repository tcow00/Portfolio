import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../../images/me.svg";
import Draw from "../../components/Draw";
// import SocialIcons from "../../components/SocialIcons";
import Header from "../../components/Header";


const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    // landingImage: {
    //   position: "absolute",
    //   bottom: "0",
    //   opacity: "0.3",
    //   mixBlendMode: "lighten",
    //   height: "80%",
    // },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <>
    <Header />
    <section className="landing" style={styles.landing}>
      <Draw />
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description" style={{margin: "50px"}}>
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                  .typeString("What makes you stand out in a crowd? Your familiar style is probably not as loud as an unsightly sweater, merry stocking cap, and a pair of iconic round specs. Or, maybe it is. Whatever your company's “thing,” my expertise is making sure your target audience can’t unsee it.")
                .pauseFor(1500)
                // .deleteAll()
                // .typeString("Sleep. ")
                // .pauseFor(500)
                // .typeString("Eat. ")
                // .pauseFor(500)
                // .typeString("Repeat.")

                .start();
            }}
          />
        </div>
      </div>
      <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Michael Yeates"
        />
      </div>
      {/* <SocialIcons /> */}
    </section>
    </>
  );
};

export default Landing;
