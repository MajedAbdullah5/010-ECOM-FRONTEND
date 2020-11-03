import React, {Component, Fragment} from 'react';
import {Container, Navbar, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavMenuDesktop extends Component {
    render() {
        return (
            <Fragment>
                <Navbar fixed={"top"} bg="light">
                    <Container fluid={true} className="shadow-sm p-2 m-0 bg-white">
                        <Row className="w-100 ">
                            <Col className="p-1" sm={4} md={4} sm={12} xs={12}>
                                <a href="" className="btn"><img className="nav-logo"
                                                                src="https://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"
                                                                alt=""/></a>
                                <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items</Button>
                            </Col>
                            <Col className="p-1" sm={4} md={4} sm={12} xs={12}>
                                <div className="input-group w-100">
                                    <input type="text" className="form-control"
                                           aria-label="Text input with segmented dropdown button"/>
                                    <button type="button" className="btn site-btn"><i className="fa fa-search"></i>
                                    </button>
                                </div>

                            </Col>
                            <Col className="p-1" sm={4} md={4} sm={12} xs={12}>

                                <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">3</span></sup></Link>
                                <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                                <a className="btn"><i className="fa h4 fa-mobile-alt"></i> </a>
                                <Link to="/onboard" className="h4 btn">LOGIN</Link>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavMenuDesktop;