import { useEffect, useRef } from "react";
import { FaMeta } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import classnames from "classnames"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "../Utils/Link";

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
    
    const content = data.map((product   ) => {
        const classes = classnames(
            (product.id === 4 || product.id === 5) && 'text-gray-600'
        )

        return (
            <div key={product.id} className="font-extralight text-xl border-none outline-none" >
                <div className={`absolute top-4 left-6 flex flex-col justify-start p-1 ${classes}`}>
                    Introducing
                    <div className="flex flex-row items-center gap-2 text-base">
                        {product.id === 1 ? <FaMeta /> : ' '}
                        {product.title}
                    </div>
                </div>
                <img className="select-none border-none outline-none rounded-3xl" src={product.link} alt={product.name} />
                <Link 
                    to={product.route}
                    key={product.id}
                    className={`flex flex-row justify-between items-center absolute bottom-8 right-16 p-1 pr-2 pl-2 text-lg rounded-xl font-normal text-white bg-gray-900 bg-opacity-50 outline-none shadow-full shadow-gray-100/50`}
                >
                    Buy now
                    <GoChevronRight />
                </Link>
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