import React, {Component} from 'react';
import { nanoid } from 'nanoid';
export default class PhoneBookd extends Component{
    constructor(){
        super();
        this.state = {
          name: '',
          number: ''
        }
    }
    // handleChange = evt =>{
    //     evt.preventDefault();
    //     console.log(evt.target.value);
    //     // const form = evt.target;
    //     // console.log(form);
    //     // const name = evt.target.closest('form').elements.name.value;
    //     // const id = nanoid();
    //     // const number = evt.target.closest('form').elements.number.value;
    //     // this.setState({ [name]: name, [id]: id });
    //     // form.reset();
    // }
    phonebookValue = e => this.setState({ name: e.target.value });
  numberValue = e => this.setState({ number: e.target.value });
    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }
    handleSubmit = e => {
        // e.preventDefault();
        // this.props.onSubmit(this.state);
        e.preventDefault();
        const form = e.target;
        form.reset();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });

    // this.setState({ name: '', number: '' });
        };
    render(){

    return <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
    <input
  type="text"
  name="name"
  onChange={this.handleChange}
  placeholder="Like Name Surname"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<label htmlFor="number">Number</label>
<input
  type="tel"
  name="number"
  onChange={this.handleChange}
  placeholder="Like 111-11-11"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<button type="submit">Add contact</button>
    </form>
    }
}


// export default function PhoneBookd({onSubmit}){
//     return <form onSubmit={onSubmit}>
//         <label htmlFor="name">Name</label>
//     <input
//   type="text"
//   name="name"
//   placeholder="Like Name Surname"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
// />
// <label htmlFor="number">Number</label>
// <input
//   type="tel"
//   name="number"
//   placeholder="Like 111-11-11"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
// />
// <button type="submit">Add contact</button>
//     </form>
// }