import React, { Component } from 'react';
import css from './PhonebookForm.module.css';

class PhonebookForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = e => { 
        const { name, value } = e.currentTarget;
          this.setState({ [name]: value })
          console.log(e.currentTarget.value);
    };
    
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit({...this.state});
        this.setState({name: '', number: '' })
    };

    render() {
        const { name, number } = this.state;
    return (
        <form className={css.form} onSubmit={this.handleSubmit}>
            <label>Name
                 <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.handleChange}
        />
            </label>
            <label>Number
                <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.handleChange}
/>
       </label>
        <button type="submit" className={css.formBtn}>
          Add contacts
        </button>
      </form>
    );
  }
}

export default PhonebookForm;
