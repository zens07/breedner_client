import React, {Component} from 'react';
import {Modal, Button, Form, Col} from 'react-bootstrap';

class ModalRegister extends Component {
    render(){
        return(
            <Modal show={this.props.visibleRegister} size="sm">
                <Modal.Header closeButton onClick={this.props.hideRegister}>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{'max-height': 'calc(100vh - 300px)', 'overflow-y': 'auto'}}>
                    <Form>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Group controlId="formBasicBreeder">
                                <Form.Control type="text" placeholder="Breeder" />
                            </Form.Group>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Group controlId="formBasicPhone">
                                <Form.Control type="text" placeholder="Phone Breeder" />
                            </Form.Group>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Group controlId="formBasicAddress">
                                <Form.Control type="text" placeholder="Address Breeder" />
                            </Form.Group>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Group controlId="formBasicNamePet">
                                <Form.Control type="text" placeholder="Name Pet" />
                            </Form.Group>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Group controlId="formBasicGenderPet">
                                <Form.Control type="text" placeholder="Gender Pet" />
                            </Form.Group>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Group controlId="formBasicSpesiesPet">
                                <Form.Control type="text" placeholder="Spesies Pet" />
                            </Form.Group>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Group controlId="formBasicAgePet">
                                <Form.Control type="text" placeholder="Age Pet" />
                            </Form.Group>
                        </Col>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">
                        Register
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ModalRegister;