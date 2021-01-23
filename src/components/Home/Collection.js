import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from 'axios';
import ApiURL from "../../api/ApiURL";
import {Link} from "react-router-dom";


class Collection extends Component {
    constructor() {
        super();
        this.state={
            special_collection:[],
        }
    }
    componentDidMount() {
        axios.get(ApiURL.specialCollection).then(response=>{
            if(response.status == 200){
                this.setState({special_collection:response.data});
            }
        }).catch(error=>{

        });
    }

    render() {
        let ParentList = this.state.special_collection;
        const MyData = ParentList.map((ParentList,i)=>{
            return <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Link to={"/productDetails/" + ParentList.product_code}>
                <Card className="image-box  w-100 card">
                    <img className=""
                         src={ParentList.thumbnail}/>
                    <Card.Body>
                        <p className="product-name-on-card">{ParentList.title}</p>
                       <span><p className="product-price-on-card">{ParentList.price}</p><strike>{ParentList.discount_price}</strike></span>
                    </Card.Body>
                </Card>
                </Link>
            </Col>
        })
        return (
            <Fragment>
                <Container className="text-center card" fluid={true}>
                    <h4 className="section-title">SPECIAL COLLECTION</h4>
                    <p className="section-sub-title">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>
                        {MyData}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Collection;