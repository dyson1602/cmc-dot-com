import '../styles/contact-form.css'

import { useForm, SubmitHandler } from 'react-hook-form';
import sendEmail from '../email/sendEmail';

export type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (userInputs) => {
    const status = await sendEmail(userInputs);
    if (status === 200) reset();
  };

  const validEmailPattern =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return (
      <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <label>Name: </label>
        <br />
        <input type="text" placeholder="Your name..." {...register('name', { required: true })} />
        <br />
        <label>Email: </label>
        <br />
        <input
          type="text"
          placeholder='Your email address...'
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
        <textarea placeholder='What do you want to say?' {...register('message', { required: true })} />
        <br />
        <br />
        <input id="contact-submit-button" type="submit" value="Submit" />
      </form>
  );
};

export default ContactForm;
