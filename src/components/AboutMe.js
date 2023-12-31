// import aboutMeImg from "../images/aboutme.jpeg";
// import { motion } from "framer-motion";
// import SocialIcons from "../components/SocialIcons";
// import { useInView } from "react-intersection-observer";
// import { useState, useEffect } from "react";
// import resume from "../pages/about/michael-yeates-resume.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
  // const [ref, inView] = useInView({
  //   threshold: 0.2,
  //   triggerOnce: true,
  // });

  // const [downloading, setDownloading] = useState(false);

  // useEffect(() => {
  //   setDownloading(false);
  // }, [downloading]);

  // const handleDownload = () => {
  //   setDownloading(true);
  //   const link = document.createElement("a");
  //   link.href = resume;
  //   link.download = "Michael-Yeates-Resume.pdf";
  //   link.onload = () => {
  //     link.remove();
  //     setDownloading(false);
  //   };
  //   document.body.appendChild(link);
  //   link.click();
  // };

  return (
    <p style={{ color: "grey", margin: "50px", fontSize: "25px"}}><p>I'm Teresa, lover of stories and psychology geek. You might be wondering, then why copywriting?</p>

<br></br>

      My background in psychology studies, published journalism, and professional copywriting makes an advertising career more of a passion than simply something that pays the bills.

<br></br>

      Understanding people, and what makes them tick, is kind of my thing.
      I'm a team player, a go-getter, and a "what's the next challenge?" type of partner. 

<br></br>
<br></br>
      
      As for what kind of a writer I am? To answer I'd ask, "Who exactly am I writing for?"</p>
    // <div className="aboutContainer container">
    //   <div className="row">
    //     <motion.div
    //       className="personalImage col-12 col-lg-4"
    //       ref={ref}
    //       initial={{ x: "-10vw", opacity: 0 }}
    //       animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
    //       transition={{ duration: 0.4, ease: "easeInOut" }}
    //     >
    //       <img src={aboutMeImg} alt={name} />
    //     </motion.div>
    //     <motion.div
    //       className="personalInfo col-12 col-lg-8"
    //       ref={ref}
    //       initial={{ x: "10vw", opacity: 0 }}
    //       animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
    //       transition={{ duration: 0.4, ease: "easeInOut" }}
    //     >
    //       <div className="contentContainer">
    //         <h4>Nice to meet you</h4>
    //         <h5>I'm a Software Engineer who crafts amazing digital experiences!</h5>
    //         <div className="contentDescription">
    //           <p>{brand}</p>
    //         </div>
    //         <div className="infoContainer">
    //           <div className="row">
    //             <div className="col-12 col-md-6 info">
    //               <span>Name:</span>
    //               <p>Michael Yeates</p>
    //             </div>
    //             <div className="col-12 col-md-6 info">
    //               <span>Email:</span>
    //               <p>
    //                 <a href={`mailto:${email}`}>{email}</a>
    //               </p>
    //             </div>
    //           </div>
    //           <div className="row">
    //             <div className="col-12 col-md-6 info">
    //               <span>Location:</span>
    //               <p>{location}</p>
    //             </div>
    //             <div className="col-12 col-md-6 info">
    //               <span>Availability:</span>
    //               <p>{availability}</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="buttonContainer">
    //           <button className="btn downloadCV" /*onClick={handleDownload}*/ disabled={downloading}>
    //             {downloading ? "Downloading..." : "Download Resume"}
    //           </button>{" "}
    //           <SocialIcons />
    //         </div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
  );
};

export default AboutMe;
