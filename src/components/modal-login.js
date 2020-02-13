import React, {Component} from 'react';
import {Modal, Button, Form, Col} from 'react-bootstrap';

class ModalLogin extends Component {
    render() {
        return(
            <Modal show={this.props.visibleLogin} size="sm">
                <Modal.Header closeButton onClick={this.props.hideLogin}>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                        </Col>
                    </Form>    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ModalLogin; 