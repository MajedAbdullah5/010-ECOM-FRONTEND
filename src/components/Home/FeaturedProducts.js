import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class FeaturedProducts extends Component {


    constructor() {
        super();
        this.state = {
            featured_product_data: [],

        }
    }

    componentDidMount() {
        axios.get(ApiURL.featuredProducts).then(response => {
            if (response.status == 200) {
                this.setState({featured_product_data: response.data})
            }
        }).catch(error => {

        });
    }

    render() {
        let ParentList = this.state.featured_product_data;
        const MyList = ParentList.map((ParentList, i) => {
            return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Link to={"/productDetails/" + ParentList.product_code}>
                    <Card className="image-box  w-100 card">
                        <img className=""
                             src={ParentList.image}/>
                        <Card.Body>
                            <p className="product-name-on-card">{ParentList.title}</p>
                            <span><p
                                className="product-price-on-card">{ParentList.discount_price}</p><strike>{ParentList.price}</strike></span>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>

        });
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <h4 className="section-title">FEATURED PRODUCTS</h4>
                    <p className="section-sub-title">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>
                        {MyList}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default FeaturedProducts;