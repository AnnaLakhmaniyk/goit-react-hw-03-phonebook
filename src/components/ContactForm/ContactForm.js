import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
const INITIAL_STATE = { name: '', number: '' };
class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };
  keyEl = nanoid();

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state, id: this.keyEl });
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label htmlFor="keyEl" className={s.label}>
          Name
        </label>
        <input
          className={s.input}
          onChange={this.handleChange}
          id="keyEl"
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="keyEl" className={s.label}>
          Number
        </label>
        <input
          className={s.input}
          onChange={this.handleChange}
          id="keyEl"
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;
