import React, {Component, Fragment} from 'react';
import Slider from "react-slick";

class SliderHome extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Fragment>
                <div className="SliderMargin">
                <Slider {...settings}>
                    <div>
                        <img className="slider-img"
                             src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1Jw4idMgP7K4jSZFqXXamhVXa.jpg_1200x1200.jpg"
                             alt=""/>
                    </div>
                    <div>
                        <img className="slider-img"
                             src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1Ma.XPRr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg"
                             alt=""/>
                    </div>
                    <div>
                        <img className="slider-img"
                             src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1DO_.PRr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg"
                             alt=""/>
                    </div>
                    <div>
                        <img className="slider-img"
                             src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1a.H.PRr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg"
                             alt=""/>
                    </div>
                    <div>
                        <img className="slider-img"
                             src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1JpZXPRr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg"
                             alt=""/>
                    </div>
                </Slider>
                </div>
            </Fragment>
        );
    }
}

export default SliderHome;