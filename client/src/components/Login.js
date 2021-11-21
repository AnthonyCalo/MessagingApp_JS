import React, {useRef} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import { v4 as uuidV4} from 'uuid';

export default function Login({onIdSubmit}) {
    const idRef=useRef();
    function handleSubmit(e){
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }
    function createNewId(){
        onIdSubmit(uuidV4())
    }
    return (
        <Container className="align-items-center d-flex" stye={{ height: '100vh'}}>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type="text" ref={idRef}></Form.Control>
                </Form.Group>
                <Button type='submit'>Login</Button>
                <Button variant="secondary" onClick={createNewId}>Create a New Id</Button>
            </Form>
        </Container>
    )
}




