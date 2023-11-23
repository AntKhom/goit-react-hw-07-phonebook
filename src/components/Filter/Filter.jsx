import { selectContactsFilter} from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectContactsFilter);

    const filterChangeHandler = e => {
        dispatch(setContactsFilter(e.target.value));
    };
    
    return <input
                onChange={filterChangeHandler}
                value={filter}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Find by name"
            />
}

export default Filter;