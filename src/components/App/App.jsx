import { useEffect } from "react";  
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList"
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";
import { fetchContacts } from 'redux/operations';
import ClipLoader from 'react-spinners/ClipLoader';


const App = () => {      
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    
    return (
        <div>
            <h2>Phonebook</h2>
            <ContactForm/>
            <h3>Contacts</h3>
            <Filter />
            {isLoading && !error && <ClipLoader />}
            <ContactList />   
        </div>
    );
}
 
export default App;
