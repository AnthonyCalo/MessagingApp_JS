import React, {useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Login from "./Login";
import DashBoard from './DashBoard'
import Contacts from './Contacts';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationProvider';
import { SocketProvider } from '../contexts/SocketProvider';

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard=(
    <SocketProvider id={id}>
      <ContactsProvider id={id}>
        <ConversationsProvider id={id}>
          <DashBoard id={id}/>
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>

  )

  return (
    id ? dashboard : <Login onIdSubmit={setId}/>
  )
}

export default App;
