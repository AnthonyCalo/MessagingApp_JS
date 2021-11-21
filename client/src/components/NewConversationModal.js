import React, {useState, useRef} from 'react'
import {Modal, Form, Button } from "react-bootstrap"
import { useContacts } from '../contexts/ContactsProvider'
import {useConversations} from "../contexts/ConversationProvider"

export default function NewConversationModal({closeModal}) {
  const {contacts}=useContacts()
  const {createConversations}=useConversations()
  const idRef = useRef()
  const [selectedContactIds, setSelectedContactIds]=useState([])


  function handleCheckBoxChange(contactId){
    setSelectedContactIds(prevSelectedIds=>{
      if(prevSelectedIds.includes(contactId)){
        return prevSelectedIds.filter(prev=>{
          return prev!==contactId
        })
      }else{
        return [...prevSelectedIds, contactId]
      }
    })
  }
  
  function handleSubmit(e){
    e.preventDefault();
    createConversations(selectedContactIds)

    closeModal()

  }
    
  return (
      <>
        <Modal.Header closeButton>Create Conversation</Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          {
            contacts.map(contact=>(
              <Form.Group controlId={contact.id} key={contact.id}>
                <Form.Check
                  type="checkbox"
                  value={selectedContactIds.includes(contact.id)}
                  onChange={()=>handleCheckBoxChange(contact.id)}
                  label={contact.name}
                  />
              </Form.Group>
            ))
          }
          <Button type="submit">Create</Button>
          </Form>
        </Modal.Body>
      </>
    )
}
