import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class HomeTop extends Component {
    constructor() {
        super();
        this.state = {
            MenuData: []
        }
    }

    componentDidMount() {
        axios.get(ApiURL.SendCategoryDetails).then(response => {
                this.setState({MenuData: response.data})
            }
        ).catch(error => {

            }
        );
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="p-0 overflow-hidden mt-5">
                    <Row>
                        <Col lg={3} md={3} sm={12}><MegaMenu data={this.state.MenuData}/></Col>
                        <Col lg={9} md={9} sm={12}><SliderHome/></Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default HomeTop;