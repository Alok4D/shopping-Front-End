import { Helmet } from "react-helmet-async";
import ContactFrom from "./ContactFrom";
import GoogleMap from "./GoogleMap";


const ContactUs = () => {
  return (
    <div>
      <Helmet><title>Ecobazar | Contact Us</title></Helmet>
      <ContactFrom></ContactFrom>
        <GoogleMap></GoogleMap>
    </div>
  );
};

export default ContactUs;
