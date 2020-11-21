import React, {Component} from 'react';
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {Card, Col, Container, Row} from "react-bootstrap";

class ListByCategory extends Component {
    constructor(props) {
        super();
        this.state = {
            ListData: [],
            loaderDiv: true,
            mainDiv: "d-none"
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
        axios.get(ApiURL.ProductListByCategory(this.props.Category)).then(response => {
            if (response.status == 200) {
                this.setState({ListData: response.data, loaderDiv: "d-none", mainDiv: ""});
            }

        }).catch(error => {

        });
    }

    render() {
        let MyList = this.state.ListData;

        let ProductList = MyList.map((MyList, i) => {
            return <Col className="p-2" key={i.toString()} xl={3} lg={3} md={3} sm={6} xs={6}>
                <div className={this.state.mainDiv}>
                    <Card className="image-box card">
                        <img className="w-100"
                             src={MyList.image}/>
                        <Card.Body>
                            <p className="product-name-on-card">{MyList.subcategory}</p>
                            <p className="product-price-on-card">Before: <del>{MyList.price}</del></p>
                            <p className="product-price-on-card">Special Price: {MyList.special_price}</p>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        })
        return (
            <div className="text-center TopSection onboardMargin mt-5 pt-5">
                <h4 className="section-title">{this.props.Category}</h4>
                <Row>
                    {ProductList}
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
                        </Card.Body>
                    </Card>
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
                </div>
            </div>

        );
    }
}

export default ListByCategory;