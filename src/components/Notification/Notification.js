import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card,Modal,Button} from "react-bootstrap";

class Notification extends Component {
    constructor() {
        super();
        this.state={
            modal:false
        }
    }
    modalOpen=()=>{
        this.setState({modal:true})
    }
    modalClose=()=>{
        this.setState({modal:false})
    }
    render() {
        return (
            <Fragment>
                <Container className="TopSection onboardMargin mt-5 pt-5">
                    <Row>
                        <Col className="mb-2" lg={6} lg={6} md={6} sm={12} xs={12}>
                            <Card onClick={this.modalOpen}>
                                <Card.Body>
                                    <h6 className="product-name-on-card"><i className="fas fa-bell"></i> Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
                                    <small className="product-price-on-card">Date: 22/08/2020 | Status: unread</small>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-2"  lg={6} lg={6} md={6} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <h6 className="product-name-on-card"><i className="fas fa-bell"></i> Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
                                    <small className="product-price-on-card">Date: 22/08/2020 | Status: unread</small>
                                </Card.Body>
                            </Card>
                        </Col><Col className="mb-2"  lg={6} lg={6} md={6} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <h6 className="product-name-on-card"><i className="fas fa-bell"></i> Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
                                    <small className="product-price-on-card">Date: 22/08/2020 | Status: unread</small>
                                </Card.Body>
                            </Card>
                        </Col><Col className="mb-2"  lg={6} lg={6} md={6} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <h6 className="product-name-on-card"><i className="fas fa-bell"></i> Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
                                    <small className="product-price-on-card">Date: 22/08/2020 | Status: unread</small>
                                </Card.Body>
                            </Card>
                        </Col><Col className="mb-2"  lg={6} lg={6} md={6} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <h6 className="product-name-on-card"><i className="fas fa-bell"></i> Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
                                    <small className="product-price-on-card">Date: 22/08/2020 | Status: unread</small>
                                </Card.Body>
                            </Card>
                        </Col><Col className="mb-2"  lg={6} lg={6} md={6} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <h6 className="product-name-on-card"><i className="fas fa-bell"></i> Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
                                    <small className="product-price-on-card">Date: 22/08/2020 | Status: unread</small>
                                </Card.Body>
                            </Card>
                        </Col><Col className="mb-2"  lg={6} lg={6} md={6} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <h6 className="product-name-on-card"><i className="fas fa-bell"></i> Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
                                    <small className="product-price-on-card">Date: 22/08/2020 | Status: unread</small>
                                </Card.Body>
                            </Card>
                        </Col><Col className="mb-2"  lg={6} lg={6} md={6} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <h6 className="product-name-on-card"><i className="fas fa-bell"></i> Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
                                    <small className="product-price-on-card">Date: 22/08/2020 | Status: unread</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Modal size="lg" show={this.state.modal}>
                    <Modal.Body className="p-5">
                        <h5 className="details-section-title">This is the title</h5>
                        <p className="section-sub-title text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dolore enim eum harum illo quibusdam quisquam tenetur voluptas voluptatum? Accusamus ipsum, magnam. Accusantium aliquid aut delectus error explicabo facilis fugiat fugit, harum illo in iusto libero minus nihil placeat praesentium quaerat qui quidem quis rerum sint soluta tempora ullam.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.modalClose} variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Notification;