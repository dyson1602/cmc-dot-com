import '../styles/contact-container.css';
import useCustomForm from '../hooks/useCustomForm';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

export const ContactContainer: React.FC = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useCustomForm({
      initialValues,
      onSubmit: (values) => console.log({ values }),
    });

  return (
    <section id="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
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
        <textarea name="message" onChange={handleChange} value={values.message} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};
