import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';

class ProductDetails extends Component {
    setOnClick(event){
        let att = event.target.getAttribute('src');
        document.getElementById("main-image").setAttribute('src',att);
    }

    render() {
        let data = this.props.ProductData;
        console.log(data);
        let title = data['productList'][0]['title'];
        let brand = data['productList'][0]['brand'];
        let category = data['productList'][0]['category'];
        let discount_price = data['productList'][0]['discount_price'];
        let main_image = data['productList'][0]['image'];
        let price = data['productList'][0]['price'];
        let remark = data['productList'][0]['remark'];
        let special_price = data['productList'][0]['special_price'];
        let star = data['productList'][0]['star'];
        let subcategory = data['productList'][0]['subcategory'];

        let des = data['productCode'][0]['des'];
        let details = data['productCode'][0]['details'];
        // alert(data.productList.indexOf(0).title);
        let img1 = data['productCode'][0]['img1'];
        let img2 = data['productCode'][0]['img2'];
        let img3 = data['productCode'][0]['img3'];
        let img4 = data['productCode'][0]['img4'];
        let size = data['productCode'][0]['size'];
        let color = data['productCode'][0]['color'];



        return (
            <Fragment>
                <Container fluid={true} className="TopSection onboardMargin mt-5 pt-5">
                    <Row>
                        <Col lg={12} md={12} xl={12} sm={12} xs={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <Row>
                                        <Col sm={12} lg={12} md={12} xs={12} xl={12}>
                                            <img id="main-image" width="100%" height="295px" src={main_image} alt=""/>
                                        </Col>
                                        <Col sm={12} lg={12} md={12} xs={12} xl={12}>
                                            <Container className="my-3">
                                            <Row>
                                                <Col className="p-0 m-0" lg={3} ms={3} sm={6} xs={6} xl={3}>
                                                    <img onClick={this.setOnClick} className="w-100 h-75" height="" src={img1} alt=""/>
                                                </Col>
                                                <Col className="p-0 m-0" lg={3} ms={3} sm={6} xs={6} xl={3}>
                                                    <img onClick={this.setOnClick} className="w-100 h-75" src={img2} alt=""/>
                                                </Col>
                                                <Col className="p-0 m-0" lg={3} ms={3} sm={6} xs={6} xl={3}>
                                                    <img onClick={this.setOnClick} className="w-100 h-75"  src={img3} alt=""/>
                                                </Col>
                                                <Col className="p-0 m-0" lg={3} ms={3} sm={6} xs={6} xl={3}>
                                                    <img onClick={this.setOnClick} className="w-100 h-75" src={img4} alt=""/>
                                                </Col>
                                            </Row>
                                            </Container>
                                        </Col>
                                        <Col>
                                            <h4 className="details-section-title">{title}</h4>
                                            <p className="section-sub-title text-justify">{ ReactHtmlParser(details) }</p>
                                            {/*<p className="section-sub-title text-justify">{details}</p>*/}
                                        </Col>


                                    </Row>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <Row>
                                        <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                                            {/*<h4 className="details-section-title">{title}</h4>*/}
                                            <p className="section-sub-title">{des}</p>
                                            <p className="price-box">Regular Price {price}</p>
                                            <p className="price-box">50% Discount</p>
                                            <p className="price-box">New Price {discount_price}</p>
                                        </Col>
                                        <Col xs={12} xl={12} lg={12} sm={12} md={12}>
                                            <h4 className="details-section-title">Choose Color</h4>
                                            <div className="input-group">
                                            <div className="form-check mx-1">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                <label className="form-check-label" htmlFor="exampleRadios1">Black</label>
                                            </div>
                                            {/*<div className="form-check mx-1">*/}
                                            {/*    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />*/}
                                            {/*    <label className="form-check-label" htmlFor="exampleRadios1">Green</label>*/}
                                            {/*</div>*/}
                                            {/*<div className="form-check mx-1">*/}
                                            {/*    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />*/}
                                            {/*    <label className="form-check-label" htmlFor="exampleRadios1">Red</label>*/}
                                            {/*</div>*/}
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