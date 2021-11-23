import React, {useState, useEffect} from 'react'
import {Button, Form, InputGroup} from "react-bootstrap"
import { useConversations } from '../contexts/ConversationProvider';

export default function OpenConversation() {
    const {sendMessage, selectedConversation}=useConversations()
    const [text, setText] = useState("")
    function handleSubmit(e){
        e.preventDefault();
        console.log(selectedConversation.recipients);
        sendMessage(selectedConversation.recipients.map(r=>r.id), text)
        setText('')
    }
    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">

        </div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="m-2">
                <InputGroup>
                    <Form.Control as="textarea" require value={text} onChange={e=>setText(e.target.value)}/>
                    <InputGroup.Append>
                        <Button type="submit">Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
            
        </Form>
        </div>
    )
}
