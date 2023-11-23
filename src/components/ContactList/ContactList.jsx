import { selectFilteredContacts} from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';

// import Contact from "../Contact/Contact";

import css from "./contact.module.css";

const ContactList = () => {
    const dispatch = useDispatch();
    
    const filteredContacts = useSelector(selectFilteredContacts);

    return <table>
        <tbody>
            {filteredContacts.map(contact => (
                <tr className={css.contact} key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td><button className={css.btnDelete} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button></td>
            </tr>
            )
            )}
        </tbody>
    </table>
}
export default ContactList;