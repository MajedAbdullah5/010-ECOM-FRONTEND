import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

class CartList extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} xl={12}>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body className="cart-body-background">
                                            <p className="cart-title">PRODUCT CART LIST</p>
                                            <h5 className="cart-sub-title">TOTAL PRICE: 3000TK</h5>
                                            <h5 className="cart-sub-title">TOTAL ITEM: 12</h5>
                                            <Link to="/order"><Button className="cart-checkout-btn"><i className="fas fa-shopping-cart "></i> CHECKOUT</Button></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} xl={12}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <img className="w-100" height="auto"
                                                 src="https://image.shutterstock.com/image-photo/trade-buyers-two-beautiful-girls-260nw-1687457710.jpg"
                                                 alt=""/>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                            <h5 className="details-section-title">ASUS TUF A15 FA506IU Ryzen 7 4800H
                                                GTX</h5>
                                            <h6 className="section-sub-title">Quantity = 05</h6>
                                            <h6 className="section-sub-title">Price= 05 X 100 = 500TK</h6>
                                        </Col>
                                        <Col className="" lg={3} md={3} sm={12} xs={12}>
                                            <input value="4" type="number" className="form-control text-center"/>
                                            <Button className="btn btn-block mt-3 site-btn"> <i
                                                className="fas fa-trash-alt"></i> Remove</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} xl={12}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <img className="w-100" height="auto"
                                                 src="https://image.shutterstock.com/image-photo/trade-buyers-two-beautiful-girls-260nw-1687457710.jpg"
                                                 alt=""/>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                            <h5 className="details-section-title">ASUS TUF A15 FA506IU Ryzen 7 4800H
                                                GTX</h5>
                                            <h6 className="section-sub-title">Quantity = 05</h6>
                                            <h6 className="section-sub-title">Price= 05 X 100 = 500TK</h6>
                                        </Col>
                                        <Col className="" lg={3} md={3} sm={12} xs={12}>
                                            <input value="4" type="number" className="form-control text-center"/>
                                            <Button className="btn btn-block mt-3 site-btn"> <i
                                                className="fas fa-trash-alt"></i> Remove</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} xl={12}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <img className="w-100" height="auto"
                                                 src="https://image.shutterstock.com/image-photo/trade-buyers-two-beautiful-girls-260nw-1687457710.jpg"
                                                 alt=""/>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                            <h5 className="details-section-title">ASUS TUF A15 FA506IU Ryzen 7 4800H
                                                GTX</h5>
                                            <h6 className="section-sub-title">Quantity = 05</h6>
                                            <h6 className="section-sub-title">Price= 05 X 100 = 500TK</h6>
                                        </Col>
                                        <Col className="" lg={3} md={3} sm={12} xs={12}>
                                            <input value="4" type="number" className="form-control text-center"/>
                                            <Button className="btn btn-block mt-3 site-btn"> <i
                                                className="fas fa-trash-alt"></i> Remove</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} xl={12}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <img className="w-100" height="auto"
                                                 src="https://image.shutterstock.com/image-photo/trade-buyers-two-beautiful-girls-260nw-1687457710.jpg"
                                                 alt=""/>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                            <h5 className="details-section-title">ASUS TUF A15 FA506IU Ryzen 7 4800H
                                                GTX</h5>
                                            <h6 className="section-sub-title">Quantity = 05</h6>
                                            <h6 className="section-sub-title">Price= 05 X 100 = 500TK</h6>
                                        </Col>
                                        <Col className="" lg={3} md={3} sm={12} xs={12}>
                                            <input value="4" type="number" className="form-control text-center"/>
                                            <Button className="btn btn-block mt-3 site-btn"> <i
                                                className="fas fa-trash-alt"></i> Remove</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} xl={12}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <img className="w-100" height="auto"
                                                 src="https://image.shutterstock.com/image-photo/trade-buyers-two-beautiful-girls-260nw-1687457710.jpg"
                                                 alt=""/>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                            <h5 className="details-section-title">ASUS TUF A15 FA506IU Ryzen 7 4800H
                                                GTX</h5>
                                            <h6 className="section-sub-title">Quantity = 05</h6>
                                            <h6 className="section-sub-title">Price= 05 X 100 = 500TK</h6>
                                        </Col>
                                        <Col className="" lg={3} md={3} sm={12} xs={12}>
                                            <input value="4" type="number" className="form-control text-center"/>
                                            <Button className="btn btn-block mt-3 site-btn"> <i
                                                className="fas fa-trash-alt"></i> Remove</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} xl={12}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                                            <img className="w-100" height="auto"
                                                 src="https://image.shutterstock.com/image-photo/trade-buyers-two-beautiful-girls-260nw-1687457710.jpg"
                                                 alt=""/>
                                        </Col>
                                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                            <h5 className="details-section-title">ASUS TUF A15 FA506IU Ryzen 7 4800H
                                                GTX</h5>
                                            <h6 className="section-sub-title">Quantity = 05</h6>
                                            <h6 className="section-sub-title">Price= 05 X 100 = 500TK</h6>
                                        </Col>
                                        <Col className="" lg={3} md={3} sm={12} xs={12}>
                                            <input value="4" type="number" className="form-control text-center"/>
                                            <Button className="btn btn-block mt-3 site-btn"> <i
                                                className="fas fa-trash-alt"></i> Remove</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
            ;
    }
}

export default CartList;