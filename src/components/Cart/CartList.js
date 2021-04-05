import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import SessionHelper from "../SessionHelper/SessionHelper";
import cogoToast from "cogo-toast";

class CartList extends Component {
    constructor() {
        super();
        this.state = {
            CartData: [],
            CartCount: [],
            CartTotalPrice: "",
            CartDeleteId: "",
            RemoveStatus: false
        }

    }

    componentDidMount() {
        axios.get(ApiURL.GetCartList(SessionHelper.getSession("phone"))).then(
            response => {
                if (response.status == 200) {
                    this.setState({CartData: response.data})
                }
            }
        ).catch(

        );
        axios.get(ApiURL.CountPriceItem(SessionHelper.getSession("phone"))).then(
            response => {
                if (response.status == 200) {
                    this.setState({CartCount: response.data});
                }
            }
        ).catch(

        );
        axios.get(ApiURL.CountTotalPrice(SessionHelper.getSession("phone"))).then(
            response => {
                if (response.status == 200) {
                    this.setState({CartTotalPrice: response.data});
                }
            }
        ).catch(

        );
    }

    onDelete = (e) => {
        let id = e.target.getAttribute('data-id');
        axios.post(ApiURL.DeleteItem(id)).then(
            response => {
                if (response.status==200 && response.data == 1) {
                    {
                        this.setState({RemoveStatus: true})
                    }
                    cogoToast.success("Item Successfully Removed!");
                } else {
                    cogoToast.error("Error!");
                }
            }
        ).catch(

        );
    }
    DeleteRefresh = () => {
        if (this.state.RemoveStatus === true) {
            return <Redirect to={window.location}/>
        }
    }

    render() {
        let data = this.state.CartData;


        var items = data.map((data, i) => {
            return (
                <div>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xl={3} lg={3} md={3} sm={6} xs={6}>
                                    <img className="w-100" height="auto"
                                         src={data.img}
                                         alt=""/>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                    <h5 className="details-section-title">{data.product_name}</h5>
                                    <h6 className="section-sub-title">{data.product_quantity}</h6>
                                    <h6 className="section-sub-title">Price= {data.product_quantity} X {data.unit_price} = {data.total_price}</h6>
                                </Col>
                                <Col className="" lg={3} md={3} sm={12} xs={12}>
                                    <input value={data.product_quantity} type="number"
                                           className="form-control text-center"/>
                                    <Button data-id={data.id} onClick={this.onDelete}
                                            className="btn btn-block mt-3 site-btn"> <i
                                        className="fas fa-trash-alt"></i> Remove</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            );
        });
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} xl={12}>
                            <Row>
                                <Col>
                                    <Card>
                                        <Card.Body className="cart-body-background">
                                            <p className="cart-title">PRODUCT CART LIST</p>
                                            <h5 className="cart-sub-title">TOTAL PRICE: {this.state.CartTotalPrice}</h5>
                                            <h5 className="cart-sub-title">TOTAL ITEM: {this.state.CartCount}</h5>
                                            <Link to="/order"><Button className="cart-checkout-btn"><i
                                                className="fas fa-shopping-cart "></i> CHECKOUT</Button></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} xl={12}>
                            {items}
                        </Col>
                        {this.DeleteRefresh()}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CartList;