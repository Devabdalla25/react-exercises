

const ContactItem = ({ contact, dispatch, setEditingContact }) => {

    const { id, name, email, phone, favorite } = contact;
  
    return (
      <li style={{ marginBottom: '10px' }}>
        <strong>{name}</strong> <span style={{color:'red'}}>{favorite && '★'}</span>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <button onClick={() => dispatch({ type: 'FAVORITE', payload: id })}>
          {favorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <button onClick={() => setEditingContact(contact)}>Edit</button>

        <button onClick={() => dispatch({ type: 'DELETE', payload: id })}>
          Delete
        </button>
      </li>
    );
  };
  
  export default ContactItem;