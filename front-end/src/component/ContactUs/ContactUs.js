import React from "react";
import ContactIntro from "./_ContactIntro";
import ContactHelp from "./_ContactHelp";
import ContactQuestions from "./_ContactQuestion";
import './Styles/ContactUs.scss';
const ContactUs = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <main className="ContactUs">
      <ContactIntro />
      <ContactHelp />
      <ContactQuestions />
    </main>
  );
};

export default ContactUs;
