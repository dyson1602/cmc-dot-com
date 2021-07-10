import '../styles/contact-container.css';
import ContactForm from './ContactForm';

export const ContactContainer: React.FC = () => {
  return (
    <section className="contact">
      <h1>Contact Me Here!</h1>
      <div className="form-div">
        <ContactForm />
      </div>
    </section>
  );
};
