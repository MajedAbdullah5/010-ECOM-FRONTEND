import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Card, Container} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";

class NewArrival extends Component {
    componentDidMount() {
        axios.get(ApiURL.newArrival).then(response=>{
            if(response.status == 200){
                this.setState({newArrival:response.data})
            }
        }).catch();
    }

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state={
            newArrival:[],
        }

    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover:true,
            pauseOnDotsHover:true,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        let ParentList = this.state.newArrival;
        const MyList = ParentList.map((ParentList,i)=>{

            return <Card className="image-box  w-100 card">
                <img className=""
                     src={ParentList.thumbnail}/>
                <Card.Body>
                    <p className="product-name-on-card">{ParentList.title}</p>
                    <p className="product-price-on-card">{ParentList.price}</p>
                </Card.Body>
            </Card>

        })
        return (
            <Container fluid={true} className="text-center mb-5">
                <h4 className="section-title">NEW ARRIVAL
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                        <i className="fas fa-angle-left p-2"></i>
                    </a>
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                        <i className="fas fa-angle-right p-2"></i>
                    </a>
                </h4>
                <p className="section-sub-title">Some Of Our Exclusive Collection, You May</p>
                <Slider ref={c => (this.slider = c)} {...settings}>
                {MyList}
            </Slider>
            </Container>
        );
    }
}

export default NewArrival;