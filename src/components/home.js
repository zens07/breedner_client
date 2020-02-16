import React, { Component } from 'react';
import {
    Card,
    Col,
    Row,
    Container,
    Image,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

import CardHome from '../card/card-home';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <div className="row bg-image-home m-0">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                        <Row className="m-0">
                            <Col lg={3} md={3} sm={3} xs={3} className="p-0">
                                <CardHome />
                            </Col>
                            <Col lg={9} md={9} sm={9} xs={9} className="p-0 text-center">
                                <Container fluid className="p-0 m-0">
                                    <Row className="justify-content-center">
                                        <Col lg={12} md={12} sm={12} xs={12} className="p-0 mt-5">
                                            <Card className="mx-auto" style={{ maxHeight: '100vh', maxWidth: '50vh' }}>
                                                <Card.Img src="assets/images-content/1.jpg" style={{ objectFit: 'cover', height: '75vh', width: 'auto' }} />
                                                <Card.ImgOverlay style={{ position: 'relative' }} className="p-0">
                                                    <Container style={{ position: 'absolute', bottom: '0' }} className="p-0">
                                                        <Row className="text-white m-0">
                                                            <Col lg={12} md={12} sm={12} xs={12} className="p-0 text-left" style={{textShadow: '2px 2px black'}}>
                                                                <h3 className="font-weight-bold m-2">Garry</h3>
                                                                <ul className="fa-ul">
                                                                    <li><i className="fa-li fa fa-user fa-sm" />breeder-zezen</li>
                                                                    <li><i className="fa-li fa fa-map fa-sm" />10 km dari sini</li>
                                                                </ul>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Card.ImgOverlay>
                                                <Card.Body className="align-items-center d-flex justify-content-center p-0">
                                                    <Col lg={12} md={12} sm={12} xs={12} className="p-0 ">
                                                        <Container fluid>
                                                            <Row>
                                                                <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                                                                    <Button className="btn-light btn-sm rounded-circle custom-shadow m-2">
                                                                        <span>
                                                                            <Image src="assets/images-content/icon-refresh.png" className="img-icon" />
                                                                        </span>
                                                                    </Button>
                                                                    <Button className="btn-light btn-sm rounded-circle custom-shadow m-2">
                                                                        <span>
                                                                            <Image src="assets/images-content/icon-delete.png" className="img-icon" />
                                                                        </span>
                                                                    </Button>
                                                                    <Button className="btn-light btn-sm rounded-circle custom-shadow m-2">
                                                                        <span>
                                                                            <Image src="assets/images-content/icon-love.png" className="img-icon" />
                                                                        </span>
                                                                    </Button>
                                                                    <Button className="btn-light btn-sm rounded-circle custom-shadow m-2">
                                                                        <span>
                                                                            <Image src="assets/images-content/icon-petir.png" className="img-icon" />
                                                                        </span>
                                                                    </Button>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </Col>
                                                </Card.Body>
                                            </Card>

                                        </Col>
                                    </Row>
                                </Container>
                                <div className="container">
                                    <Row className="information-action">
                                        <Col lg={2} md={2} sm={2} xs={2} className="m-auto p-0">
                                            <Button className="btn btn-secondary custom-shadow2" style={{ height: '35px', width: '80px' }}>Hide</Button>
                                        </Col>
                                        <Col lg={1} md={1} sm={1} xs={1} className="m-auto p-0">
                                            <i className="fa fa-chevron-left"><span> NO</span></i>
                                        </Col>
                                        <Col lg={1} md={1} sm={1} xs={1} className="m-auto p-0">
                                            <i className="fa fa-chevron-right"><span> YES</span></i>
                                        </Col>
                                        <Col lg={2} md={2} sm={2} xs={2} className="m-auto p-0">
                                            <i className="fa fa-chevron-up"><span> Open Profile</span></i>
                                        </Col>
                                        <Col lg={2} md={2} sm={2} xs={2} className="m-auto p-0">
                                            <i className="fa fa-chevron-down"><span> Close Profile</span></i>
                                        </Col>
                                        <Col lg={4} md={4} sm={4} xs={4} className="m-auto p-0">
                                            <div className="container">
                                                <div className="row">
                                                    <Col lg={6} md={6} sm={6} xs={6} className="m-auto p-0">
                                                        <input type="text" class="form-control form-control-sm rounded-pill" id="nextFoto" />
                                                    </Col>
                                                    <Col lg={6} md={6} sm={6} xs={6} className="m-auto p-0">
                                                        <strong>Next Foto</strong>
                                                    </Col>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;