import './Contact.scss';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__title">
        Interested in doing a project together?
      </h2>
      <Link to="/contact" className="btn">
        contact me
      </Link>
    </section>
  );
};

export default Contact;
