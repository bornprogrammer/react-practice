
import { useDispatch, useSelector } from "react-redux";
import { selectAllContacts } from "../store/contactSlice";

const ContactFooter = () => {

    const contacts = useSelector(selectAllContacts);

    return (
        <>
            <div>No of contact is {contacts.length}</div>
        </>
    )
};

export default ContactFooter;