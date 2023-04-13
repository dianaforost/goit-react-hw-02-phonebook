export default function Contacts({contacts}){
    // console.log(contacts[0].name);
    return <ul>
        {contacts.length === 0 ? null :(
            <>
            {contacts.map(contact =>{
                return (
            <li key={contact.id}>
                <p>{contact.name}:</p>
                <span>{contact.number}</span>
            </li>     
                )
            })}
            </>
        )
        }
    </ul>
}