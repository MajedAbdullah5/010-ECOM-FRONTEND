import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from 'axios';
import ApiURL from "../../api/ApiURL";
import {Link} from "react-router-dom";

class Categories extends Component {
    constructor() {
        super();
        this.state = {
            MenuData: [],
            loaderDiv: true,
            mainDiv: "d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiURL.SendCategoryDetails).then(response => {
                if (response.status == 200) {
                    this.setState({MenuData: response.data, loaderDiv: "d-none", mainDiv: ""})
                }

            }
        ).catch(error => {

            }
        );
    }

    render() {
        let ParentList = this.state.MenuData;
        const MyList = ParentList.map((ParentList, i) => {
            return <Col className="p-0" key={i.toString()} xl={2} lg={2} md={2} sm={6} xs={6}>
                <Link to={"/productDetails/" + ParentList.ParentCategoryName}>
                    <Card className=" w-100 ">
                        <img className="w-100"
                             src={ParentList.ParentCategoryImg}/>
                        <Card.Body>
                            <p className="category-name">{ParentList.ParentCategoryName}</p>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        })


        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <h4 className="section-title">CATEGORIES</h4>
                    <p className="section-sub-title">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>
                        <Row className={this.state.mainDiv}>
                            {MyList}
                        </Row>
                    </Row>
                </Container>

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
            </Fragment>
        );
    }
}

export default Categories;