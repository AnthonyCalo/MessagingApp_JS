import React, {useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from "./Login";
import DashBoard from './DashBoard'
import Contacts from './Contacts';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationProvider';

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard=(
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <DashBoard id={id}/>
      </ConversationsProvider>
    </ContactsProvider>

  )

  return (
    id ? dashboard : <Login onIdSubmit={setId}/>
  )
}

export default App;
