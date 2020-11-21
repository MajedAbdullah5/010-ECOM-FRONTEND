import React, {Component} from 'react';
import axios from 'axios';
import ApiURL from "../../api/ApiURL";
import {Card, Col, Row} from "react-bootstrap";

class ListBySubCategory extends Component {
    constructor() {
        super();
        this.state = {
            DataList: [],
            loaderDiv: true,
            mainDiv: "d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiURL.ProductListBySubCategory(this.props.Category, this.props.SubCategory)).then(
            response => {
                if (response.status == 200) {
                    this.setState({DataList: response.data, loaderDiv: "d-none", mainDiv: ""});
                }

            }
        ).catch(
            error => {

            }
        );
    }

    render() {
        let MyData = this.state.DataList;
        let SubCategory = MyData.map((MyData, i) => {
            // if (MyData.special_price == "NA"){
            return <Col className="p-2" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Card className="image-box card">
                    <img className="w-100"
                         src={MyData.image}/>
                    <Card.Body>
                        <p className="product-name-on-card">{MyData.subcategory}</p>
                        <p className="product-price-on-card">Before: <del>{MyData.price}</del></p>
                        <p className="product-price-on-card">Special Price: {MyData.special_price}</p>
                    </Card.Body>
                </Card>
            </Col>
            // }
            //     else{
            //
            //     }
        })


        return (
            <div className="text-center TopSection onboardMargin ">
                <h4 className="section-title">{this.props.SubCategory}</h4>
                <Row className={this.state.mainDiv}>
                    {SubCategory}
                </Row>

                <div className={this.state.loaderDiv}>
                    <Card>
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
                </div>
            </div>
        );
    }
}

export default ListBySubCategory;