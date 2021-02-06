import './Form.scss';

const Form = () => {
  return (
    <section className="contact">
      <h2 className="contact__title">Contact me</h2>
      <form className="contact__form">
        <label htmlFor="name" className="contact__label">
          Name
        </label>
        <input type="text" id="name" className="contact__input" />
        <label htmlFor="email" className="contact__label">
          Email
        </label>
        <input type="text" id="email" className="contact__input" />
        <label htmlFor="message" className="contact__label">
          Message
        </label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          className="contact__textarea"
        ></textarea>
        <button className="btn btn--dark">send message</button>
      </form>
    </section>
  );
};

export default Form;
