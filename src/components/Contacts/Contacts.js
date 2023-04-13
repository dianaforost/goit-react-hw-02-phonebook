import propTypes from 'prop-types';
export default function Contacts({ contacts, onDeleteContact }){
    return <ul>
        {contacts.length === 0 ? null :(
            <>
            {contacts.map(contact =>{
                return (
            <li key={contact.id}>
                <p>{contact.name}:</p>
                <span>{contact.number}</span>
                <button type="button"
                onClick={() => onDeleteContact(contact.id)}></button>
            </li>
                )
            })}
            </>
        )
        }
    </ul>
}
Contacts.propTypes = {
    onDeleteContact: propTypes.func.isRequired,
    contacts: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
        })
    )
}