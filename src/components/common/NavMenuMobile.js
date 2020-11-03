import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import MegaMenu from "../home/MegaMenu";
import MegaMenuMobile from "../home/MegaMenuMobile";

class NavMenuMobile extends Component {
    constructor() {
        super();
        this.state={
            SideNavState:"sideNavClose",
            ContentOverState:"ContentOverlayClose",

        }
    }
    MenuBarClickHandler=()=>{
            this.SideNavOpenClose();
    }
    ContentOverlayClickHandler=()=>{
            this.SideNavOpenClose();
    }
    SideNavOpenClose=()=>{
            let SideNavState = this.state.SideNavState;
            if(SideNavState === "sideNavOpen"){
                this.setState({SideNavState:"sideNavClose"})
                this.setState({ContentOverState:"ContentOverlayClose"})
            }
            else if(SideNavState === "sideNavClose"){
                this.setState({SideNavState:"sideNavOpen"})
                this.setState({ContentOverState:"ContentOverlayOpen"})
            }
    }
    render() {
        return (
            <Fragment>
            <Container fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white">
                <Row>
                    <Col className="p-2 ml-3" sm={12} md={12} sm={12} xs={12}>
                        <Button onClick={this.MenuBarClickHandler} className="btn MobileNavToggler"><i className="fa fa-bars"></i></Button>
                        <a  className="btn"><img className="nav-logo"
                                                        src="https://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"
                                                        alt=""/></a>
                        <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items</Button>
                    </Col>
                </Row>
            </Container>
            <div className={this.state.SideNavState}>
                <MegaMenuMobile/>
            </div>
                <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>
                </div>
            </Fragment>

    );
    }
}

export default NavMenuMobile;