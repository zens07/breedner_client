import React, { Component } from 'react';
import {
    Card,
    Col,
    Row,
    Container,
    Image,
    Button
} from 'react-bootstrap';
import ContentImage from './contentImage';
import '../App.css';
import dataDummy from './datadummy';

class Home extends Component {
    render() {
        return (
            <div className="p-0">
                <div className="row bg-image-home m-0">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                        <Row className="m-0">
                            <Col lg={4} md={4} sm={4} xs={4} className="p-0">
                                <Card style={{'max-height': '100vh', 'overflow-y': 'auto'}}>
                                    <Card.Header className="gradient1 text-left p-0">
                                        <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                                            <Container>
                                                <Row>
                                                    <Col lg={3} md={3} sm={3} xs={3} className="p-0">
                                                        <Image src="assets/images-content/1.jpg" roundedCircle className="img-fit-rounded my-2 ml-3" />
                                                    </Col>
                                                    <Col lg={5} md={5} sm={5} xs={5} className="p-0 my-auto">
                                                        <h3>Lulu</h3>
                                                    </Col>
                                                    <Col lg={4} md={4} sm={4} xs={4} className="p-0 my-auto">
                                                        <i class="fa fa-chevron-down fa-lg"></i>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                                            <div class="nav-link text-left">
                                                <a href="#home" class="active"><strong>Match</strong></a>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={12} sm={12} xs={12} className="p-1">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    {dataDummy.dataImage.map(item => {
                                                        return <ContentImage nameUrl={`${item.image}`} name={item.name} />
                                                    })}
                                                </div>
                                            </div>
                                        </Col>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={8} className="p-0 text-center my-auto">
                                <Card className="card-block d-flex custom-card" style={{ height: '100vh' }}>
                                    <Card.Body className="align-items-center d-flex justify-content-center p-0">
                                        <Col lg={12} md={12} sm={12} xs={12} className="p-0 ">
                                            <Container fluid>
                                                <Row>
                                                    <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                                                        <Card.Img src="assets/images-content/3.jpg" className="img-fluid" alt="image3" style={{ objectFit: 'cover', height: '70vh', width: '25vw' }} />
                                                    </Col>
                                                </Row>
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
                                    <div className="container">
                                        <Row className="information-action">
                                            <Col lg={12} md={12} sm={12} xs={12} className="m-auto p-0">
                                                vvsfssffzdnkkfjdsjsdhksk
                                            </Col>
                                        </Row>

                                    </div>

                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;