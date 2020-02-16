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

import dataDummy from '../components/datadummy';
import ContentImage from '../components/contentImage';

class CardHome extends Component {
    render() {
        return (
            <Card style={{ 'max-height': '100vh', 'overflow-y': 'auto' }}>
                <Container fluid className="p-0">
                    <Link to='/profile' className="text-white">
                        <Row className="justify-content-center bg-image-default py-auto mx-0 my-auto">
                            <Col lg={4} md={4} sm={4} xs={4} className="p-0 my-auto text-right">
                                <Image src="assets/images-content/1.jpg" roundedCircle className="img-fit-rounded my-2 ml-3" />
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6} className="p-0 my-auto text-center" >
                                <h3 className="ml-1">Lulu</h3>
                            </Col>
                            <Col lg={2} md={2} sm={2} xs={2} className="p-0 my-auto">
                                <i className="fa fa-chevron-down fa-lg" />
                            </Col>
                        </Row>
                    </Link>
                    <Row className="py-auto mx-0 my-auto" style={{ backgroundColor: 'whitesmoke' }}>
                        <Card.Body style={{ height: '100vh' }} className="p-0">
                            <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                                <div class="nav-link text-left">
                                    <a href="#home" className="active"><strong>Match</strong></a>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12} className="p-1">
                                <div className="container-fluid">
                                    <div className="row">
                                        {dataDummy.dataImage.map(item => {
                                            return <>
                                            <ContentImage nameUrl={`${item.image}`} name={item.name} />
                                            </>
                                        })}
                                    </div>
                                </div>
                            </Col>
                        </Card.Body>
                    </Row>
                </Container>
            </Card>
        );
    }
}
export default CardHome;