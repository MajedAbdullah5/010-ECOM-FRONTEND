import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

class FeaturedProducts extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <h4 className="section-title">FEATURED PRODUCTS</h4>
                    <p className="section-sub-title">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link to="/productDetails">
                            <Card className="image-box  w-100 card">
                                <img className=""
                                     src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                    <p className="product-price-on-card">Price:3000TK</p>
                                </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link to="/productDetails">
                            <Card className="image-box  w-100 card">
                                <img className=""
                                     src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                    <p className="product-price-on-card">Price:3000TK</p>
                                </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link to="/productDetails">
                            <Card className="image-box  w-100 card">
                                <img className=""
                                     src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                    <p className="product-price-on-card">Price:3000TK</p>
                                </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link to="/productDetails">
                            <Card className="image-box  w-100 card">
                                <img className=""
                                     src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                    <p className="product-price-on-card">Price:3000TK</p>
                                </Card.Body>
                            </Card>
                                </Link>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box  w-100 card">
                                <img className=""
                                     src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                    <p className="product-price-on-card">Price:3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box  w-100 card">
                                <img className=""
                                     src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                    <p className="product-price-on-card">Price:3000TK</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default FeaturedProducts;