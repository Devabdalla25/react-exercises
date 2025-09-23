import { useReducer, useState } from 'react';

import { initialState, reducer,   } from './reducer';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingContact, setEditingContact] = useState(null);
  
  
  return (
    <div>
    <h2>Contact Management App</h2>
    <ContactForm
      dispatch={dispatch}
      editingContact={editingContact}
    />
    <ContactList
      contacts={state}
      dispatch={dispatch}
      setEditingContact={setEditingContact}
    />
  </div>
  );
};

export default ContactApp;

