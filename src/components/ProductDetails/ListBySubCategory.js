import React, {Component, Fragment} from 'react';
import axios from 'axios';
import ApiURL from "../../api/ApiURL";
import {Card, Col, Row} from "react-bootstrap";

class ListBySubCategory extends Component {
    constructor() {
        super();
        this.state = {
            DataList: [],
        }
    }

    render() {
        let MyData = this.props.productData;
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
        });


        return (
            <Fragment>
                <div className="text-center TopSection onboardMargin">
                    <h4 className="section-title">{this.props.SubCategory}</h4>
                    <Row>
                        {SubCategory}
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default ListBySubCategory;