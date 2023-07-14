import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";
import Header from "../../components/Header";


const About = ({ name, location, brand, email, availability }) => {
  return (
    <>
    <Header />
    <section className="about">
      <PageHeader title="About me"/>
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} />
    </section>
    </>
  );
};

export default About;
