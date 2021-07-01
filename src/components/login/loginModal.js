import React from 'react';
import { Modal,Button,Form} from 'react-bootstrap';
import { useRecoilState } from "recoil";
import { userState } from "../../states/user";
import {loginUser,getUsers} from '../../api/users';
const LoginModal = (props)=> {
    const [user, setUser] = useRecoilState(userState);
    const onChangeInput = (e)=>{
        const name = e.target.name;
        setUser({
            ...user,
            [name]: e.target.value
        })
        console.log(user);
    }
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            animation={false}
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Login
            </Modal.Title>
            </Modal.Header>
            <Form onSubmit={(e)=> {
                    e.preventDefault();
                    loginUser()
                }}>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" 
                                        name="email" 
                                        placeholder="Enter email" 
                                        onChange={onChangeInput}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password" 
                                        onChange={onChangeInput}/>
                    </Form.Group>
                    <Form.Group className="mb-3" 
                                controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" 
                                    label="Check me out" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" 
                            onClick={()=> {
                                props.onHide()
                                getUsers();

                            }}>Close</Button>
                    <Button variant="primary" 
                            type="submit">
                        Login
                    </Button>
                </Modal.Footer>
            </Form>
      </Modal>
    )
}

export default LoginModal;