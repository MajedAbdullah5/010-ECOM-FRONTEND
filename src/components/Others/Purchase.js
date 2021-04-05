import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Breadcrumb} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";

class Purchase extends Component {
    constructor() {
        super();
        this.state={
            purchase:"",
            loaderDiv:true,
            mainDiv:"d-none"

        }
    }
    componentDidMount() {
        let sessionData = sessionStorage.getItem("SiteInfo_Purchase_Guide");
        if(sessionData == null){
            axios.get(ApiURL.SendSiteInfo).then(response=>{
                if(response.status == 200){
                    let data = response.data;
                    let Purchase_Guide_data = data[0]['purchase_guide'];
                    sessionStorage.setItem("SiteInfo_Purchase_Guide",Purchase_Guide_data);
                    this.setState({purchase:Purchase_Guide_data,loaderDiv:"d-none",mainDiv:""});
                }
                else{
                    toast.error("Failed to fetch data!");
                }

            }).catch(error=>{
                toast.error("Server Error!");
            });
        }
        else{
            this.setState({purchase:sessionData,loaderDiv:"d-none",mainDiv:""});
        }

    }

    render() {
        return (
            <Fragment>
                <Container className="TopSection onboardMargin mt-5 pt-5">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"/"}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/purchase"}>Purchase</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="p-2">
                        <Col className="mt-2" lg={12} md={12} sm={12} xs={12}>
                            <Card className={this.state.mainDiv}>
                               <Card.Body>
                                   {ReactHtmlParser(this.state.purchase)}
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

export default Purchase;