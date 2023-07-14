import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";
import Header from "../../components/Header";


const Contact = ({ name, email, location }) => {
  return (
    <>
    <Header />
    <section className="contact">
      <PageHeader title="Contact" description="Get in touch" />
      <div className="contactWrap container" style={{display: "flex", justifyContent: "center"}}>
        {/* <div className="row"> */}
          {/* <div className="col-12 col-lg-6">
            <Form />
          </div> */}
          <div className="col-12 col-lg-6">
            <ContactInfo name="Teresa Cowden" location={location} email="teresacowden@gmail.com" />
          </div>
        </div>
      {/* </div> */}
      {/* <SocialIcons /> */}
    </section>
    </>
  );
};

export default Contact;
