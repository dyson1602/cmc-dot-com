import { Inputs } from '../components/ContactForm';
import emailjs, { init } from 'emailjs-com';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../assets/SECRET-KEY';

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

export default sendEmail