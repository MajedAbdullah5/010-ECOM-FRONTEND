import React, {Component, Fragment} from 'react';
import Slider from "react-slick";

class SliderHome extends Component {

    constructor(props) {
        super();
    }

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

        let SliderInfo = this.props.data;
        let SliderExtractedInfo = SliderInfo.map((SliderInfo, i) => {
            return <div className="container-fluid overflow-hidden w-100 shadow-sm">
                <div style={{backgroundColor: SliderInfo.bg_color}}>
                    <div className="row card-body">
                        <div className="col-md-6 sliderTitleDiv text-center text-justify mt-5">
                            <h1 style={{color: SliderInfo.text_color}} className="sliderTitle">{SliderInfo.title}</h1>
                            <h1 style={{color: SliderInfo.text_color}}
                                className="sliderSubTitle">{SliderInfo.sub_title}</h1>
                            <button className="btn site-btn px-5">More Info</button>
                        </div>
                        <div className="col-md-6 text-center">
                            <img className="sliderImg" src={SliderInfo.image}/>
                        </div>
                    </div>
                </div>
            </div>
        });

        return (
            <Slider {...settings}>
                {SliderExtractedInfo}
            </Slider>
        );
    }
}

export default SliderHome;