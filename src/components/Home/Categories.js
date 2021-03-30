import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from 'axios';
import ApiURL from "../../api/ApiURL";
import {Link} from "react-router-dom";
import CategoryPlaceholder from "../Placeholder/CategoryPlaceholder";

class Categories extends Component {
    constructor() {
        super();
        this.state = {
            MenuData: [],
            mainDiv: "d-none",
            isLoading:""
        }
    }

    componentDidMount() {
        axios.get(ApiURL.SendCategoryDetails).then(response => {
                if (response.status == 200) {
                    this.setState({MenuData: response.data, isLoading: "d-none", mainDiv: ""})
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
                <Link to={"/productListByCategory/" + ParentList.ParentCategoryName}>
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
                <CategoryPlaceholder isLoading={this.state.isLoading}/>
                <div className={this.state.mainDiv}>
                <Container className="text-center" fluid={true}>
                    <h4 className="section-title">CATEGORIES</h4>
                    <p className="section-sub-title">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>
                        <Row className={this.state.mainDiv}>
                            {MyList}
                        </Row>
                    </Row>
                </Container>
                </div>
            </Fragment>
        );
    }
}

export default Categories;