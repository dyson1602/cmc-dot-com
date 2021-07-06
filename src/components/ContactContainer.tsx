import '../styles/contact-container.css';
import useCustomForm from '../hooks/useCustomForm';
import emailjs, { init } from 'emailjs-com';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from '../assets/SECRET-KEY';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

export const ContactContainer: React.FC = () => {
  const { values, handleChange, handleSubmit } =
    useCustomForm({
      initialValues,
      onSubmit: (event) => sendEmail(event),
    });

  const sendEmail = async (event: any) => {
    init('user_FC4RZdhJccrBhWOaL720C');
    try {
      const response = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        event.target
      );
      console.log('Success!', response.status, response.text);
    } catch (error) {
      console.log('Failed...', error);
    }
  };

  return (
    <section id="contact">
      <h1>Contact</h1>
      <form id="contact-form"onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        <label>Email: </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <label>Message:</label>
        <textarea
          name="message"
          onChange={handleChange}
          value={values.message}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};
