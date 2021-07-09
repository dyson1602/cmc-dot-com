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
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <label>Name: </label>
      <input type="text" {...register('name', { required: true })} />
      <label>Email: </label>
      <input
        type="text"
        {...register('email', {
          required: true,
          pattern: { value: validEmailPattern, message: 'it is not an email' },
        })}
      />
      <label>Message:</label>
      <textarea {...register('message', { required: true })} />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
