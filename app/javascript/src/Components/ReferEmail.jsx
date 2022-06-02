import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ReferEmail = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    var templateParams = {
      message: props.referral_link,
      user_email: form.current.user_email.value
    };

    emailjs.send('service_ltrq3al', 'template_a3hadi5', templateParams, 'qlzCiuj3wjRxVPjo1')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="user_email" />
      <input type="submit" value="Send" />
    </form>
  );
};
