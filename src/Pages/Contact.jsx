import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const Contact = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8bua3zq",
        "template_lz2f0gb",
        form.current,
        "eqIpj-5-UsSX0NoQY"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setShowSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

    <StyledContactFormContainer>
      <StyledContactForm showSuccessMessage={showSuccessMessage} ref={form} onSubmit={sendEmail}>
        {!showSuccessMessage && (
          <>
          <h2>We love to hear from you.</h2>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </>
        )}
      </StyledContactForm>
      {showSuccessMessage && (
        <SuccessMessage>
          Your message has been successfully sent. We'll contact you soon. Thank you for booking your lash service.
        </SuccessMessage>
      )}
    </StyledContactFormContainer>
  );
};

const StyledContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #E1DCDE;
`;

const StyledContactForm = styled.form`
  display: ${({ showSuccessMessage }) => (showSuccessMessage ? 'none' : 'block')};
  width: 50%;
  height: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: #8C8587;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: light;
    font-size: 20px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #8C8587;
    border-radius: 5px;
  }

  input[type="submit"] {
    cursor: pointer;
    background-color: #FFC7C2;
    color: black;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 24px;
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  font-size: 26px;
  padding: 20px;
  border-radius: 5px;
  background-color: #FBE4EA;
  border: 1px solid #8C8587;
  color: #8C8587;
`;

export default Contact;
