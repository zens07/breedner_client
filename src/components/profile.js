import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Image,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

import ModalPayment from './modal-payment';
import CardProfile from '../card/card-profile';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            modalPayment: false,
        }
    }

    openPayment = () => {
        this.setState({
            modalPayment: !this.state.modalPayment
        })
    }
    render() {
        return (
            <div className="container-fluid p-0">
                <div className="row bg-image-home m-0">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                        <Row className="m-0 align-items-center justify-content-center">
                            <Col lg={3} md={3} sm={3} xs={3} className="p-0">
                                <CardProfile />
                            </Col>
                            <Col lg={9} md={9} sm={9} xs={9} className="px-0 p-3">
                                <Container fluid className="p-0 m-0">
                                    <Row>
                                        <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                                            <Button className="btn-sm mb-2 pull-right" style={{ width: '100px' }} onClick={this.openPayment}>Add Item</Button>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                                            <Card className="mx-auto" style={{ 'max-height': '100vh', 'max-width': '50vh', 'overflow-y': 'auto' }}>
                                                <Card.Img src="assets/images-content/1.jpg" style={{ objectFit: 'cover', height: '50vh', width: 'auto' }} />
                                                <Card.Body className="p-0">
                                                    <Container>
                                                        <Row className="text-dark m-0 px-2">
                                                            <Col lg={8} md={8} sm={8} xs={8} className="p-0">
                                                                <h3 className="font-weight-bold">Garry</h3>
                                                            </Col>
                                                            <Col lg={3} md={3} sm={3} xs={3} className="p-0 text-right">
                                                                <p>Cat</p>
                                                            </Col>
                                                        </Row>
                                                        <Row className="text-dark m-0">
                                                            <Col lg={12} md={12} sm={12} xs={12} className="p-0 text-left">
                                                                <ul className="fa-ul">
                                                                    <li><i className="fa-li fa fa-user fa-sm" />zezen</li>
                                                                    <li><i className="fa-li fa fa-map fa-sm" />10 km dari sini</li>
                                                                    <li><i className="fa-li fa fa-venus-mars fa-sm" />Male-adult</li>
                                                                    <li><i className="fa-li fa fa-phone fa-sm" />phonenumber : 081772891204</li>
                                                                </ul>
                                                            </Col>
                                                            <Col lg={12} md={12} sm={12} xs={12} className="p-0 text-center">
                                                                <Link to="/Edit">
                                                                    <Button className="btn-sm mb-2" style={{ width: '100px' }}>Edit</Button>
                                                                </Link>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </div>
                </div>
                <ModalPayment visiblePayment={this.state.modalPayment} hidePayment={this.openPayment} />
            </div>

        );
    }
}
export default Profile;