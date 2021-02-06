import './Form.scss';

const Form = () => {
  return (
    <section className="form">
      <h2 className="form__title">Contact me</h2>
      <form className="form__form">
        <label htmlFor="name" className="form__label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form__input"
          placeholder="Momchil Mitev"
        />
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="form__input"
          placeholder="example@gmail.com"
        />
        <label htmlFor="message" className="form__label">
          Message
        </label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          className="form__textarea"
          placeholder="How can I help?"
        ></textarea>
        <button className="btn btn--dark">send message</button>
      </form>
    </section>
  );
};

export default Form;
