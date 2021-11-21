import React from 'react'
import { useConversations } from '../contexts/ConversationProvider'
import { ListGroup } from 'react-bootstrap'

export default function Conversations() {
    const {conversations, selectConversationsIndex}=useConversations()
    console.log(conversations)
    return (
        <ListGroup variant="flush">
            {conversations.map((conversation, index)=> ( 
                <ListGroup.Item 
                    key={index}
                    action
                    onClick={()=>selectConversationsIndex(index)}
                    active={conversation.selected}
                    >
                    {conversation.recipients.map(r=>r.name).join(", ")}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
