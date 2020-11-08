import React, { Component } from 'react';
import InfoCard from './infocard';
import Slider from 'react-slider';

function CardList(props) {
    
    const infolist = props.infolist;
    const listitems = infolist.map((item, index) =>
        <InfoCard
            index={index} />
    );

    return(
        <div>
            {listitems}
        </div>
    );
}

export default class Carousel extends Component {
    
    constructor(orops) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = (props) => {

    }

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: false,
                        dots: false
                    }
            }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false
                    }

            }]
        };
        return(
            <div>
                <Slider {...settings}>
                    <CardList />
                </Slider>
            </div>
        );
    }
}