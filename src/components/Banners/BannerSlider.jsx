import { useEffect, useRef } from "react";
import { FaMeta } from "react-icons/fa6";
import classnames from "classnames"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = ({ data }) => {
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
        autoplaySpeed: 3000,
        waitForAnimate: false,
        cssEase: "linear",
        pauseOnHover: true,
    };
    
    const content = data.map((image) => {
        const classes = classnames(
            (image.id === 4 || image.id === 5) && 'text-gray-600'
        )

        return (
            <div key={image.id} className="font-extralight text-xl border-none outline-none" >
                <div className={`absolute top-4 left-6 flex flex-col justify-start p-1 ${classes}`}>
                    Introducing
                    <div className="flex flex-row items-center gap-2 text-base">
                        {image.id === 1 ? <FaMeta /> : ' '}
                        {image.title}
                    </div>
                </div>
                <img className="select-none border-none outline-none rounded-3xl" src={image.link} alt={image.name} />
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

export default BannerSlider;