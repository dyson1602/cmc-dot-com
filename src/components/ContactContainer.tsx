import '../styles/contact-container.css';
import ContactForm from './ContactForm';
import { Inputs } from './ContactForm';
import emailjs, { init } from 'emailjs-com';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../assets/SECRET-KEY';

export const ContactContainer: React.FC = () => {
  const sendEmail = async (userInputs: Inputs) => {
    init('user_FC4RZdhJccrBhWOaL720C');

    try {
      console.log();
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        userInputs
      );
      console.log('Success!', response.status, response.text);
      return response.status
    } catch (error) {
      console.log('Failed...', error);
    }
  };

  return (
    <section id="contact">
      <h1>Contact</h1>
      <ContactForm sendEmail={sendEmail} />
    </section>
  );
};
