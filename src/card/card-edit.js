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

class CardEdit extends Component {
    render() {
        return (
            <Card style={{ width: '20vw', maxHeight: '75vh', 'overflow-y': 'auto' }} className="mx-auto">
                <Card.Body className="p-0">
                    <Container>
                        <Row className="p-0">
                            <Col lg={4} md={4} sm={4} xs={4} className="px-1 py-1">
                                <div className="image-row-size" style={{ position: 'relative' }}>
                                    <Card.Img className="image-cover-fit" src="/assets/images-content/1.jpg" />
                                    <span style={{ position: 'absolute', top: -7, right: -7, backgroundColor: 'red', width: '22px', opacity: '0.5' }} className="rounded-circle text-center">
                                        <i className="fa fa-close fa-sm" />
                                    </span>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4} className="px-1 py-1">
                                <div className="image-row-size">
                                    <span style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'cyan', width: '22px' }} className="rounded-circle text-center">
                                        <i className="fa fa-plus fa-sm" />
                                    </span>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4} className="px-1 py-1">
                                <div className="image-row-size">
                                    <span style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'cyan', width: '22px' }} className="rounded-circle text-center">
                                        <i className="fa fa-plus fa-sm" />
                                    </span>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4} className="px-1 py-1">
                                <div className="image-row-size">
                                    <span style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'cyan', width: '22px' }} className="rounded-circle text-center">
                                        <i className="fa fa-plus fa-sm" />
                                    </span>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4} className="px-1 py-1">
                                <div className="image-row-size">
                                    <span style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'cyan', width: '22px' }} className="rounded-circle text-center">
                                        <i className="fa fa-plus fa-sm" />
                                    </span>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4} className="px-1 py-1">
                                <div className="image-row-size">
                                    <span style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'cyan', width: '22px' }} className="rounded-circle text-center">
                                        <i className="fa fa-plus fa-sm" />
                                    </span>
                                </div>
                            </Col><Col lg={4} md={4} sm={4} xs={4} className="px-1 py-1">
                                <div className="image-row-size">
                                    <span style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'cyan', width: '22px' }} className="rounded-circle text-center">
                                        <i className="fa fa-plus fa-sm" />
                                    </span>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4} className="px-1 py-1">
                                <div className="image-row-size">
                                    <span style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'cyan', width: '22px' }} className="rounded-circle text-center">
                                        <i className="fa fa-plus fa-sm" />
                                    </span>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4} className="px-1 py-1">
                                <div className="image-row-size">
                                    <span style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'cyan', width: '22px' }} className="rounded-circle text-center">
                                        <i className="fa fa-plus fa-sm" />
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row className="text-dark m-0">
                            <Col lg={12} md={12} sm={12} xs={12} className="p-0 text-left">
                                <form>
                                    <div className="form-group">
                                        <label for="namePet">Name Pet</label>
                                        <input type="text" className="form-control" id="namePet" placeholder="Masukkan Name Pet" />
                                    </div>
                                    <div className="form-group">
                                        <label for="breeder">Breeder</label>
                                        <input type="text" className="form-control" id="breeder" placeholder="Masukkan breeder" />
                                    </div>
                                    <div className="form-group">
                                        <label for="customRange1">Gender</label>
                                        <select className="custom-select">
                                            <option selected>Gender</option>
                                            <option value="1">male</option>
                                            <option value="2">female</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="customRange1">Species</label>
                                        <select className="custom-select">
                                            <option selected>Species</option>
                                            <option value="1">Cat</option>
                                            <option value="2">bird</option>
                                            <option value="2">dog</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="namePet">About Pet</label>
                                        <textarea type="text" className="form-control" id="namePet" placeholder="akkadkankladnlan" />
                                    </div>
                                </form>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12} className="p-0 text-center">
                                <Button className="btn-sm mb-2" style={{ width: '100px' }}>SAVE</Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        );
    }
}
export default CardEdit;