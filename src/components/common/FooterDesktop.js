import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";


class FooterDesktop extends Component {
    render() {
        return (
            <Fragment>
                <div className="card">
                    <Container fluid={true}>
                        <Row className="px-0 mx-5 my-5">
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">ABOUT COMPANY</h5>
                                <p className="footer-text">BigExpress is considered to be the ‘game-changer’ in
                                    Bangladesh’s industry. Carefully-chosen raw material, environment-friendly business
                                    practice and customer-centric approach is what made BigExpress a beloved brand at
                                    home and abroad.</p>
                                <h5 className="footer-menu-title text-justify">SOCIAL LINK</h5>
                                <a><i className="fab m-1 h4 fa-facebook"></i></a>
                                <a><i className="fab m-1 h4 fa-instagram"></i></a>
                                <a><i className="fab m-1 h4 fa-linkedin"></i></a>
                            </Col>
                            <Col className="p-2">
                                <h5 className="footer-menu-title">THE COMPANY</h5>
                                <a className="footer-link">About Us</a><br/>
                                <Link to="/contact" className="footer-link">Contact Us</Link><br/>
                                <a className="footer-link">Our Team</a><br/><br/>

                                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                                <a className="footer-link">Shekhertek 8,Mohammadpur, Adabor, Dhaka-1207, 01774688159
                                    (Help-Line)</a><br/>
                                <a className="footer-link"> Engr.Rabbil@yahoo.com</a><br/>
                            </Col>
                            <Col className="p-2">
                                <h5 className="footer-menu-title">MORE INFO</h5>
                                <a className="footer-link">How To Purchase</a><br/>
                                <a className="footer-link">Privacy Policy</a><br/>
                                <a className="footer-link">Refund Policy</a><br/>
                            </Col>
                            <Col className="p-2">
                                <h5 className="footer-menu-title">DOWNLOAD OUR APPS</h5>
                                <img className="my-2" src="https://hatil.com/sites/default/files/Apple%20sign.png"
                                     alt=""/><br/>
                                <img src="https://hatil.com/sites/default/files/Android%20sign.png" alt=""/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="w-100 bg-dark ">
                                <h5 className="footer-menu-title text-white my-2 pt-2">WE DELIVER IN</h5>
                                <p className="text-white footer-text">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Amet animi consequatur culpa incidunt maxime, molestiae nam nemo
                                    perferendis saepe vitae.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default FooterDesktop;