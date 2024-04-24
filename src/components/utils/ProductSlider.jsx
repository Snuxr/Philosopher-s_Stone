import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from 'react';

const ProductSlider = ({data}) => {
    let sliderRef = useRef(null)

    useEffect(() => {
        sliderRef.slickPlay();
    },[])
    
    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        waitForAnimate: false,
        cssEase: "linear",
        pauseOnHover: true,
    };
   
    const content = data.map((image, i) => {
        return (
            <div key={i}>
                <img className="select-none border-none outline-none" src={image} />
            </div>
        )
    })

    return (
        <div>
            <Slider ref={slider => (sliderRef = slider)} {...settings} >
                {content}
            </Slider>
        </div>
    )
}

export default ProductSlider;