import React, {Component, Fragment} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";

class Refund extends Component {
    constructor() {
        super();
        this.state = {
            refund: "",
            loaderDiv: true,
            mainDiv: "d-none"
        }
    }

    componentDidMount() {
        let refund_policy = sessionStorage.getItem("refund_policy");
        if (refund_policy == null) {
            axios.get(ApiURL.SendSiteInfo).then(response => {
                if (response.status == 200) {
                    let responseData = response.data;
                    let refundData = responseData[0]['policy'];
                    sessionStorage.setItem("refund_policy", refundData);
                    this.setState({refund: refundData, mainDiv: "", loaderDiv: "d-none"});
                } else {
                    toast.error("Failed to fetch data!");
                }

            }).catch(error => {
                toast.error("Server Error!");
            });

        } else {
            this.setState({refund: refund_policy, mainDiv: "", loaderDiv: "d-none"});
        }
    }

    render() {
        return (
            <Fragment>
                <Container className="TopSection onboardMargin mt-5 pt-5">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"/"}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/refund"}>Refund</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="p-2">
                        <Col className="mt-2" lg={12} md={12} sm={12} xs={12}>
                            <Card className={this.state.mainDiv}>
                                <Card.Body>
                                    {ReactHtmlParser(this.state.refund)}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Card className={this.state.loaderDiv}>
                            <Card.Body>
                                <div className="ph-item">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="ph-item">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ph-item">
                                    <div className="ph-col-12">
                                        <div className="ph-row">
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                            <div className="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
                <ToastContainer/>
            </Fragment>
        );
    }
}

export default Refund;