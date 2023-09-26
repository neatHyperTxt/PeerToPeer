import React,{useRef} from 'react'
import {Container,Form,Button} from 'react-bootstrap';
import {v4 as uuidV4} from 'uuid'

function Login(props) {
    const idRef = useRef();
    const preventDefault = (e)=>{
        e.preventDefault();
        props.onIdSubmit(idRef.current.value);
    }
    const createNewId = ()=>{
        props.onIdSubmit(uuidV4);
    }
  return (
    <Container className="align items center d-flex" style={{height:'100vh'}}>
        <Form onSubmit={preventDefault} className="w-100">
            <Form.Group>
                <Form.Label>Enter Your Id</Form.Label>
                <Form.Control type="text" ref={idRef} required/>
            </Form.Group>
            <Button type="submit" className="me-2 mt-2">Login</Button>
            <Button onClick = {createNewId} variant='secondary' className="mt-2">Create a New ID</Button>
        </Form>
    </Container>
  )
}

export default Login