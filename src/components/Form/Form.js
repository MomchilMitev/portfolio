import './Form.scss';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [messageErr, setMessageErr] = useState('');
  const [sendMsg, setSendMsg] = useState('');

  const templateParams = {
    name,
    email,
    message,
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameErr('Name is required!');
      return;
    } else if (!email) {
      setEmailErr('Email is required!');
      return;
    } else if (!emailRegex.test(email)) {
      setEmailErr('Please provide a correct email address!');
      return;
    } else if (!message) {
      setMessageErr('Message is required!');
      return;
    }

    const sendBtn = document.querySelector('#sendBtn');
    sendBtn.disabled = true;
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSendMsg('Message sent!');
        },
        (err) => {
          console.log('FAILED...', err);
          setSendMsg('There was a problem sending the message!');
        }
      );
    setName('');
    setEmail('');
    setMessage('');
    setNameErr('');
    setEmailErr('');
    setMessageErr('');
    sendBtn.disabled = false;
  };

  return (
    <section className="form">
      <h2 className="form__title">Contact Me</h2>
      <form className="form__form" onSubmit={onSubmit}>
        <label htmlFor="name" className="form__label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className={nameErr ? 'form__input error' : 'form__input'}
          placeholder="Momchil Mitev"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameErr('');
          }}
        />
        {nameErr ? <p style={{ color: 'red' }}>{nameErr}</p> : null}
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          type="text"
          id="email"
          className={emailErr ? 'form__input error' : 'form__input'}
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailErr('');
          }}
        />
        {emailErr ? <p style={{ color: 'red' }}>{emailErr}</p> : null}
        <label htmlFor="message" className="form__label">
          Message
        </label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          className={messageErr ? 'form__textarea error' : 'form__textarea'}
          placeholder="How can I help?"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setMessageErr('');
          }}
        ></textarea>
        {messageErr ? <p style={{ color: 'red' }}>{messageErr}</p> : null}
        <button id="sendBtn" className="btn btn--dark">
          send message
        </button>
        {sendMsg ? <p>{sendMsg}</p> : null}
      </form>
    </section>
  );
};

export default Form;
