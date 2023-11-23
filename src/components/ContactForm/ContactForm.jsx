import { useDispatch} from 'react-redux';
// import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import css from "./contactForm.module.css"

const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const newObj = {
            name: e.target.name.value,
            phone: e.target.phone.value,
        };
        
        dispatch(addContact(newObj));
        e.target.reset();
    };

    return <form className={css.formInput } onSubmit={handleSubmitForm}>
        <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Name"
                required
            />
        <br />      
        <input
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="Phone number"
                required
            />
        <br />
        <button type="submit">Add contact</button>
    </form>
};

export default ContactForm;