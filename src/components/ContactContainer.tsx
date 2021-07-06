import '../styles/contact-container.css';
import { useState } from 'react';

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactContainer: React.FC = () => {
  const [emailProps, setEmailProps] = useState<EmailProps>();
  const [name, setFormName] = useState<string>()

  const formSubmitHandler = () => {};

  return (
    <section id="contact">
      <h1>Contact</h1>
      <form>
        <label>Name: </label>
        <input type="text" name="name" value={name} />
        <label>Email: </label>
        <input type="text" name="email" />
        <label>Message:</label>
        <textarea name="message" />
        <input type="submit" value="Submit"/>
      </form>
    </section>
  );
};
