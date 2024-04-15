import { FaMeta } from "react-icons/fa6";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";

const BannerSlider = () => {
    let sliderRef = useRef(null)

    useEffect(() => {
        sliderRef.slickPlay();
    },[])

    const data = [
        {
            id: 1,
            link: "https://assets-prd.ignimgs.com/2023/10/08/metaquest3-review-blogroll-1696796650085.jpg",
            name: "Meta Quest 3",
            title: `Meta Quest 3`
        },
        {
            id: 2,
            link: "https://images.macrumors.com/t/PsOYr81pZnNBBUsG3sqSVghjarc=/1600x0/article-new/2024/01/rabbit-r1.jpg",
            name: "Rabbit R1",
            title: "R1. your pocket companion"
        },
        {
            id: 3,
            link: "https://www.kimstore.com/cdn/shop/articles/S24_Ultra_Banner.png?v=1705634996",
            name: "Samsung Galaxy S24 Ultra",
            title: "Samsung Galaxy S24 Ultra"
        },
    ]

    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        waitForAnimate: false,
        cssEase: "linear",
        pauseOnHover: true,
    };

    const content = data.map((image) => {
        return (
            <div key={image.id} className="font-extralight text-xl m-2" >
                <div className="absolute top-4 left-8 flex flex-col justify-start p-1">
                    Introducing
                    <div className="flex flex-row items-center gap-2">
                        {image.id === 1 ? <FaMeta /> : ' '}
                        {image.title}
                    </div>
                </div>
                <img className="w-3/6 rounded-3xl" src={image.link} alt={image.name} />
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