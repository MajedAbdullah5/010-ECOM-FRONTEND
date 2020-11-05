import React, {Component, Fragment} from 'react';
import {Container, Row, Col,Button} from "react-bootstrap";

class ProductDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection onboardMargin mt-5 pt-5">
                    <Row>
                        <Col lg={12} md={12} xl={12} sm={12} xs={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <Row>
                                        <Col sm={12} lg={12} md={12} xs={12} xl={12}>
                                            <img width="100%" height="295px" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/16/online-clothes-shops-hero.jpg?width=990" alt=""/>
                                        </Col>
                                        <Col sm={12} lg={12} md={12} xs={12} xl={12}>
                                            <Container className="my-3">
                                            <Row>
                                                <Col className="p-0 m-0" lg={3} ms={3} sm={6} xs={6} xl={3}>
                                                    <img className="w-100 h-75" height="" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/16/online-clothes-shops-hero.jpg?width=990" alt=""/>
                                                </Col>
                                                <Col className="p-0 m-0" lg={3} ms={3} sm={6} xs={6} xl={3}>
                                                    <img className="w-100 h-75" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/16/online-clothes-shops-hero.jpg?width=990" alt=""/>
                                                </Col>
                                                <Col className="p-0 m-0" lg={3} ms={3} sm={6} xs={6} xl={3}>
                                                    <img className="w-100 h-75"  src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/16/online-clothes-shops-hero.jpg?width=990" alt=""/>
                                                </Col>
                                                <Col className="p-0 m-0" lg={3} ms={3} sm={6} xs={6} xl={3}>
                                                    <img className="w-100 h-75" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/16/online-clothes-shops-hero.jpg?width=990" alt=""/>
                                                </Col>
                                            </Row>
                                            </Container>
                                        </Col>
                                        <Col>
                                            <h4 className="details-section-title">Details</h4>
                                            <p className="section-sub-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet architecto at atque deserunt doloribus et fuga illo itaque magnam minima minus, modi mollitia quam quidem ratione saepe voluptates. Odit?</p>
                                            <p className="section-sub-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet architecto at atque deserunt doloribus et fuga illo itaque magnam minima minus, modi mollitia quam quidem ratione saepe voluptates. Odit?</p>
                                        </Col>


                                    </Row>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <Row>
                                        <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                                            <h4 className="details-section-title">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h4>
                                            <p className="section-sub-title">You May Like Some Of Our Exclusive Collection</p>
                                            <p className="price-box">Regular Price 200</p>
                                            <p className="price-box">50% Discount</p>
                                            <p className="price-box">New Price 100</p>
                                        </Col>
                                        <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                                            <h4 className="details-section-title">Choose Color</h4>
                                            <div className="input-group">
                                            <div className="form-check mx-1">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                <label className="form-check-label" htmlFor="exampleRadios1">Black</label>
                                            </div>
                                            <div className="form-check mx-1">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                <label className="form-check-label" htmlFor="exampleRadios1">Green</label>
                                            </div>
                                            <div className="form-check mx-1">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                <label className="form-check-label" htmlFor="exampleRadios1">Red</label>
                                            </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                                            <h4 className="details-section-title">Choose Size</h4>
                                            <div className="input-group">
                                                <div className="form-check mx-1">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    <label className="form-check-label" htmlFor="exampleRadios1">x</label>
                                                </div>
                                                <div className="form-check mx-1">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    <label className="form-check-label" htmlFor="exampleRadios1">xx</label>
                                                </div>
                                                <div className="form-check mx-1">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    <label className="form-check-label" htmlFor="exampleRadios1">xxx</label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                                            <h4 className="details-section-title">Quantity</h4>
                                            <input className="form-control text-center w-50" type="number" min="1"/>
                                        </Col>
                                        <Col className="my-3" xs={12} xl={12} lg={12} sm={12} md={12}>
                                            <Button className="btn-danger mr-1"><i className="fas fa-shopping-cart"></i> Add To Cart</Button>
                                            <Button className="mr-1"> <i className="fas fa-car"></i> Order Now</Button>
                                            <Button className="mr-1"> <i className="fas fa-heart"></i> Favourite</Button>
                                        </Col>
                                        <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                                            <h4 className="details-section-title my-4">Reviews</h4>
                                            <h5 className="section-title">Rabbil Hassan <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span></h5>
                                            <p className="section-sub-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, architecto aut dignissimos facere impedit nihil obcaecati praesentium quasi repellat suscipit.</p>
                                        </Col> <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                                            <h4 className="details-section-title my-4">Reviews</h4>
                                            <h5 className="section-title">Rabbil Hassan <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span></h5>
                                            <p className="section-sub-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, architecto aut dignissimos facere impedit nihil obcaecati praesentium quasi repellat suscipit.</p>
                                        </Col>

                                    </Row>
                                </Col>

                            </Row>



                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default ProductDetails;