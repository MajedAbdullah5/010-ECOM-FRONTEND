import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Card, Container} from "react-bootstrap";

class NewArrival extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

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
                    <div>
                        <Card className="image-box  w-100 card">
                            <img className=""
                                 src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                <p className="product-price-on-card">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box  w-100 card">
                            <img className=""
                                 src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                <p className="product-price-on-card">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box  w-100 card">
                            <img className=""
                                 src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                <p className="product-price-on-card">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box  w-100 card">
                            <img className=""
                                 src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                <p className="product-price-on-card">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box  w-100 card">
                            <img className=""
                                 src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                <p className="product-price-on-card">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box  w-100 card">
                            <img className=""
                                 src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                <p className="product-price-on-card">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box  w-100 card">
                            <img className=""
                                 src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                <p className="product-price-on-card">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box  w-100 card">
                            <img className=""
                                 src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                <p className="product-price-on-card">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box  w-100 card">
                            <img className=""
                                 src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                <p className="product-price-on-card">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className="image-box  w-100 card">
                            <img className=""
                                 src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                            <Card.Body>
                                <p className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800 GTX</p>
                                <p className="product-price-on-card">Price:3000TK</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
            </Container>
        );
    }
}

export default NewArrival;