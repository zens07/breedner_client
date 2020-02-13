import React, {Component} from 'react';
import {Card, Col, Row, Container, Image} from 'react-bootstrap';
// import image from "public/assets/images/1.jpg";
import '../App.css';

class Home extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row bg-image">
                    <div className="col-12">
                        <Row>
                            <Col lg={4} md={4} sm={4} xs={4} className="m-3 p-0">
                                <Card style={{height:'100vh'}}>
                                    <Card.Header className="gradient1">Featured</Card.Header>
                                    <Card.Body className="p-0">
                                        <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                                            <div class="nav-link text-left ">
                                                <a href="#home" class="active"><strong>Match</strong></a>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={12} sm={12} xs={12} className="p-1">    
                                            <Container fluid>
                                                <Row>
                                                    <Col lg={4} md={4} sm={4} xs={4} className="px-1">
                                                        <Card.Img src= "assets/images/1.jpg"  className="img-fluid" alt= "image1" style={{minHeight:'70px', maxHeight:'70px'}} />
                                                    </Col>
                                                    <Col lg={4} md={4} sm={4} xs={4} className="px-1">
                                                        <Card.Img src= "assets/images/2.jpg"  className="img-fluid" alt= "image2" style={{minHeight:'70px', maxHeight:'70px'}} />
                                                    </Col>
                                                    <Col lg={4} md={4} sm={4} xs={4} className="px-1">
                                                        <Card.Img src= "assets/images/3.jpg"  className="img-fluid" alt= "image3" style={{minHeight:'70px', maxHeight:'70px'}} />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={8} md={8} sm={8} xs={8} className="full">
                                <Card style={{height:'100vh'}}>
                                    <Card.Body>

                                    </Card.Body>
                                </Card>
                                {/* <Container>
                                    <Row>
                                        <Image src= "assets/images/1.jpg" alt="image view" rounded />
                                    </Row>
                                </Container> */}
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;