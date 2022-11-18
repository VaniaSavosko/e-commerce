import React from 'react'
import DData from './DData'
import Slider from "react-slick";

const Dcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <>
            <Slider {...settings}>
                {
                    DData.map((value, index) => {
                        return (
                            <>
                            <div className="product" key={index}>
                                <div className="box">
                                    <div className="img">
                                        <img src={value.cover} alt="img" width="100%" />
                                    </div>
                                    <h4>{value.name}</h4>
                                    <span>{value.price}</span>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default Dcard
