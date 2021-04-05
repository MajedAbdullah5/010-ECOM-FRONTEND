import React, {Component, Fragment} from 'react';
import {Breadcrumb,Col, Container, Row, Card} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";

class About extends Component {
    constructor() {
        super();
        this.state = {
            about: "",
            loaderDiv:true,
            mainDiv:"d-none"
        }
    }

    componentDidMount() {
        if (sessionStorage.getItem("SiteInfoAbout") == null) {
            axios.get(ApiURL.SendSiteInfo).then(response => {
                let StatusCode = response.status;
                if (StatusCode == 200) {
                    this.setState({mainDiv:"",loaderDiv:"d-none"})
                    let JSONData = (response.data)[0]['about'];
                    sessionStorage.setItem("SiteInfoAbout", JSONData);
                    this.setState({about: JSONData});
                }
                else{
                    toast.error("Failed to fetch data!");
                }
            }).catch(function (error) {
                toast.error("Server Error!");
            });
        } else {
            this.setState({about: sessionStorage.getItem("SiteInfoAbout"),mainDiv:"",loaderDiv:"d-none"});
        }
    }

    render() {
        return (
            <Fragment>
                <Container className="TopSection onboardMargin mt-5 pt-5">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"/"}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/about"}>About</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="p-2">
                        <Col className="mt-2" lg={12} md={12} sm={12} xs={12}>
                            <Card className={this.state.mainDiv}>
                                <Card.Body>
                                    {ReactHtmlParser(this.state.about)}
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
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
                <ToastContainer/>
            </Fragment>
        );
    }
}

export default About;