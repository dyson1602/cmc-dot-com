import '../styles/contact-form.css';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import sendEmail from '../email/sendEmail';

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formComplete, setFormComplete] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit: SubmitHandler<ContactFormValues> = async (userInputs) => {
    const status = await sendEmail(userInputs);
    if (status === 200) reset();
  };

  useEffect(() => {
    const { name, email, message } = watch();
    if (name && email && message) setFormComplete(true);
    else setFormComplete(false);
  }, [watch()]);

  const validEmailPattern =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <label>Name: </label>
      <br />
      <input
        type="text"
        placeholder="Your name..."
        {...register('name', { required: true })}
      />
      <br />
      <label>Email: </label>
      <br />
      <input
        type="text"
        placeholder="Your email address..."
        {...register('email', {
          required: true,
          pattern: {
            value: validEmailPattern,
            message: 'it is not an email',
          },
        })}
      />

      <br />
      <label>Message:</label>
      <br />
      <textarea
        placeholder="What do you want to say?"
        {...register('message', { required: true })}
      />
      <br />
      <br />
      <input
        // disabled={formComplete ? false : true}
        className={formComplete ? 'csb complete' : 'csb'}
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default ContactForm;
