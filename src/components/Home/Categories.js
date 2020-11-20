import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from 'axios';
import ApiURL from "../../api/ApiURL";

class Categories extends Component {
    constructor() {
        super();
        this.state={
            MenuData:[]
        }
    }
    componentDidMount() {
        axios.get(ApiURL.SendCategoryDetails).then(response=>{
                this.setState({MenuData:response.data})
            }
        ).catch(error=>{

            }

        );
    }

    render() {
        let ParentList = this.state.MenuData;
       const MyList =  ParentList.map((ParentList,i)=>{
           return <Col className="p-0" key={i.toString()} xl={2} lg={2} md={2} sm={6} xs={6}>
               <Card className=" w-100 ">
                   <img className="w-100"
                        src={ParentList.ParentCategoryImg}/>
                   <Card.Body>
                       <p className="category-name">{ParentList.ParentCategoryName}</p>
                   </Card.Body>
               </Card>
           </Col>
        })


        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <h4 className="section-title">CATEGORIES</h4>
                    <p className="section-sub-title">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>
                        <Row>
                            {MyList}
                        </Row>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Categories;