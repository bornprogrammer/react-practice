import { useDispatch, useSelector } from "react-redux";
import { selectAllContacts, contactSlice, addContact } from "../store/reducers/contactSlice";

const ContactPromise = () => {

    const dispatch = useDispatch();

    const contacts = useSelector(selectAllContacts);

    const addContactHandler = () => {
        dispatch(addContact());
    }

    let jsxElement = null;

    let addContactJsx = <div><button onClick={addContactHandler}>Add Contact</button></div>;

    if (contacts.length === 0) {
        jsxElement = <div>there are no contact found</div>;
    }

    else if (contacts.length > 0) {
        jsxElement = <div>{contacts.map((contact) => {
            return (
                <div key={contact.id}><span>{contact.name}</span></div>
            )
        })}</div>
    }

    return (
        <>{addContactJsx}{jsxElement}</>
    )
};

export default ContactPromise;