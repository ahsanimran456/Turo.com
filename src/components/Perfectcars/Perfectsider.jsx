import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from "../assests/images/car1.jpg";
import car2 from "../assests/images/car2.jpg";
import car3 from "../assests/images/car3.jpg";
import car4 from "../assests/images/car4.jpg";
import car5 from "../assests/images/car5.jpg";
import car6 from "../assests/images/car6.jpg";
import loc1 from "../assests/images/loc1.png";
import loc2 from "../assests/images/loc2.png";
import loc3 from "../assests/images/loc3.png";
import loc4 from "../assests/images/loc4.png";
import loc5 from "../assests/images/loc5.png";
import loc6 from "../assests/images/loc6.png";
import loc7 from "../assests/images/loc7.png";
import loc8 from "../assests/images/loc8.png";
import loc9 from "../assests/images/loc9.png";
import tp1 from "../assests/images/tp1.jpg";
import tp2 from "../assests/images/tp2.jpg";
import tp3 from "../assests/images/tp3.jpg";
import tp4 from "../assests/images/tp4.jpg";
import tp5 from "../assests/images/tp5.jpg";
import tp6 from "../assests/images/tp6.jpg";


import hs1 from "../assests/images/hs1.jpg";
import hs2 from "../assests/images/hs2.jpg";
import hs3 from "../assests/images/hs3.jpg";
import hs4 from "../assests/images/hs4.jpg";
import hs5 from "../assests/images/hs5.jpg";
import hs6 from "../assests/images/hs6.jpg";
import hs7 from "../assests/images/hs7.jpg";
import hs8 from "../assests/images/hs8.jpg";
import './slider.css'

import { Collapse } from 'antd';

function PerfectCar() {
    const data = [
        {
            imgs: car1,
            title: 'Find the perfect car',
            titile2: 'to conquer the great outdoors',
            discription: 'Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.'
        },
        {
            imgs: car2,
            title: 'Find the perfect car',
            titile2: 'to conquer the great outdoors',
            discription: 'Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.'
        },
        {
            imgs: car3,
            title: 'Find the perfect car',
            titile2: 'to conquer the great outdoors',
            discription: 'Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.'
        },
        {
            imgs: car4,
            title: 'Find the perfect car',
            titile2: 'to conquer the great outdoors',
            discription: 'Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.'
        },
        {
            imgs: car5,
            title: 'Find the perfect car',
            titile2: 'to conquer the great outdoors',
            discription: 'Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.'
        },
        {
            imgs: car6,
            title: 'Find the perfect car',
            titile2: 'to conquer the great outdoors',
            discription: 'Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.'
        },

    ]
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="perfectcars">
            <div className="container">
                <div className="carscontent">
                    <Slider {...settings}>
                        {data.map((items, i) =>
                            <div className="eachcar">
                                <div className="eachcarimg">
                                    <img src={items.imgs} className="img-fluid" alt="" />
                                </div>
                                <div className="eachcarttext">
                                    <div className="headercontent">
                                        <h4>
                                            <span>
                                                {items.title}
                                            </span>
                                            <span style={{ color: "#593CFB" }}>
                                                {items.titile2}
                                            </span>
                                        </h4>
                                        <div className="textpar">
                                            <p>
                                                {items.discription}
                                            </p>
                                        </div>
                                        <div className="btn-brows">
                                            <button>
                                                <span>Browse cars</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div >
    )
}


function LocationCards() {
    const location = [
        {
            img: loc1,
            location: 'Los Angeles'

        },
        {
            img: loc2,
            location: 'Miami'


        },
        {
            img: loc3,
            location: 'Honolulu'

        },
        {
            img: loc4,
            location: 'Denver'


        },
        {
            img: loc5,
            location: 'London'


        },
        {
            img: loc6,
            location: 'Toronto'


        },
        {
            img: loc7,
            location: 'Jersey City'



        },
        {
            img: loc8,
            location: 'San Francisco'


        },
        {
            img: loc9,
            location: 'Atlanta'

        },
    ]
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
        <div className="container">
            <div className="locationheading">
                <p>
                    Browse by destination
                </p>
            </div>
            <div className="locations">
                <Slider {...settings}>
                    {location.map((items) => {
                        return (
                            <div className="locationEach">
                                <div className="locimg">
                                    <img src={items.img} alt="" />
                                </div>
                                <div className="locarea">{items.location}</div>
                            </div>)
                    })
                    }

                </Slider>
            </div>
        </div>
    )
}

function Fuelday() {
    return (
        <>
            <div className="container">
                <div className="fuelheader">
                    <div className="fueldreams">
                        <h2>
                            Fuel your daydreams
                        </h2>
                    </div>
                    <div className="fuelpara">
                        <p>
                            Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.
                        </p>
                    </div>
                    <div className="explore">
                        <button>
                            <span>
                                Explore Travelogues
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container  containermodification">
                <div className="fuelimg">
                    <div className="imgcontainer">
                        <div className="fuletitleimg"></div>

                        <div className="olympicbox">
                            <div className="olympicinner">
                                <div className='featured'>
                                    <p>
                                        FEATURED TRAVELOGUE
                                    </p>
                                </div>
                                <div className="olympicpara">
                                    <p>
                                        An Olympic experience in Washington
                                    </p>
                                </div>
                                <div className="olympicdiscription">
                                    <p>
                                        Discover the epic waterfalls, moody weather, and lush forests of coastal Washington.
                                    </p>
                                </div>
                                <div className="olympiclink">
                                    <a href="">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function TypesofCars() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
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
    }
    const data = [
        {
            img: tp1,
            svg: '<svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Electric" class="seo-pages-0" role="img" version="1.1"><path d="M39.87 12.25H3.25v11.54h36.62V12.25Z" fill="#E0CAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.87 36.58c-.69 0-1.25-.56-1.25-1.25V13.5H4.5v20.58h29.87a1.25 1.25 0 0 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25V12.25c0-.69.56-1.25 1.25-1.25h36.62c.69 0 1.25.56 1.25 1.25v4.27h3.71c.69 0 1.25.56 1.25 1.25v12.07c0 .69-.56 1.25-1.25 1.25h-3.71v4.24c0 .69-.56 1.25-1.25 1.25Zm1.25-7.99h2.46v-9.57h-2.46v9.57Z" fill="#593CFB"></path><path d="M16.57 32.21c-.34 0-.69-.14-.93-.42a1.26 1.26 0 0 1 .1-1.77l5.59-4.99H18.5c-.52 0-.98-.32-1.17-.8-.18-.49-.05-1.03.34-1.38l8.04-7.17a1.248 1.248 0 0 1 1.66 1.86l-5.59 4.98h2.83c.52 0 .98.32 1.17.8.18.49.05 1.03-.34 1.38l-8.04 7.17c-.23.23-.53.34-.83.34Z" fill="#593CFB"></path></svg>',
            text: 'Electric'
        },
        {
            img: tp2,
            svg: `svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Electric" class="seo-pages-0" role="img" version="1.1"><path d="M39.87 12.25H3.25v11.54h36.62V12.25Z" fill="#E0CAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.87 36.58c-.69 0-1.25-.56-1.25-1.25V13.5H4.5v20.58h29.87a1.25 1.25 0 0 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25V12.25c0-.69.56-1.25 1.25-1.25h36.62c.69 0 1.25.56 1.25 1.25v4.27h3.71c.69 0 1.25.56 1.25 1.25v12.07c0 .69-.56 1.25-1.25 1.25h-3.71v4.24c0 .69-.56 1.25-1.25 1.25Zm1.25-7.99h2.46v-9.57h-2.46v9.57Z" fill="#593CFB"></path><path d="M16.57 32.21c-.34 0-.69-.14-.93-.42a1.26 1.26 0 0 1 .1-1.77l5.59-4.99H18.5c-.52 0-.98-.32-1.17-.8-.18-.49-.05-1.03.34-1.38l8.04-7.17a1.248 1.248 0 0 1 1.66 1.86l-5.59 4.98h2.83c.52 0 .98.32 1.17.8.18.49.05 1.03-.34 1.38l-8.04 7.17c-.23.23-.53.34-.83.34Z" fill="#593CFB"></path></svg>`,
            text: 'Electric'
        }, {
            img: tp3,
            svg: `<svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Electric" class="seo-pages-0" role="img" version="1.1"><path d="M39.87 12.25H3.25v11.54h36.62V12.25Z" fill="#E0CAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.87 36.58c-.69 0-1.25-.56-1.25-1.25V13.5H4.5v20.58h29.87a1.25 1.25 0 0 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25V12.25c0-.69.56-1.25 1.25-1.25h36.62c.69 0 1.25.56 1.25 1.25v4.27h3.71c.69 0 1.25.56 1.25 1.25v12.07c0 .69-.56 1.25-1.25 1.25h-3.71v4.24c0 .69-.56 1.25-1.25 1.25Zm1.25-7.99h2.46v-9.57h-2.46v9.57Z" fill="#593CFB"></path><path d="M16.57 32.21c-.34 0-.69-.14-.93-.42a1.26 1.26 0 0 1 .1-1.77l5.59-4.99H18.5c-.52 0-.98-.32-1.17-.8-.18-.49-.05-1.03.34-1.38l8.04-7.17a1.248 1.248 0 0 1 1.66 1.86l-5.59 4.98h2.83c.52 0 .98.32 1.17.8.18.49.05 1.03-.34 1.38l-8.04 7.17c-.23.23-.53.34-.83.34Z" fill="#593CFB"></path></svg>`,
            text: 'Electric'
        }, {
            img: tp4,
            svg: `<svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Electric" class="seo-pages-0" role="img" version="1.1"><path d="M39.87 12.25H3.25v11.54h36.62V12.25Z" fill="#E0CAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.87 36.58c-.69 0-1.25-.56-1.25-1.25V13.5H4.5v20.58h29.87a1.25 1.25 0 0 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25V12.25c0-.69.56-1.25 1.25-1.25h36.62c.69 0 1.25.56 1.25 1.25v4.27h3.71c.69 0 1.25.56 1.25 1.25v12.07c0 .69-.56 1.25-1.25 1.25h-3.71v4.24c0 .69-.56 1.25-1.25 1.25Zm1.25-7.99h2.46v-9.57h-2.46v9.57Z" fill="#593CFB"></path><path d="M16.57 32.21c-.34 0-.69-.14-.93-.42a1.26 1.26 0 0 1 .1-1.77l5.59-4.99H18.5c-.52 0-.98-.32-1.17-.8-.18-.49-.05-1.03.34-1.38l8.04-7.17a1.248 1.248 0 0 1 1.66 1.86l-5.59 4.98h2.83c.52 0 .98.32 1.17.8.18.49.05 1.03-.34 1.38l-8.04 7.17c-.23.23-.53.34-.83.34Z" fill="#593CFB"></path></svg>`,
            text: 'Electric'
        }, {
            img: tp5,
            svg: `<svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Electric" class="seo-pages-0" role="img" version="1.1"><path d="M39.87 12.25H3.25v11.54h36.62V12.25Z" fill="#E0CAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.87 36.58c-.69 0-1.25-.56-1.25-1.25V13.5H4.5v20.58h29.87a1.25 1.25 0 0 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25V12.25c0-.69.56-1.25 1.25-1.25h36.62c.69 0 1.25.56 1.25 1.25v4.27h3.71c.69 0 1.25.56 1.25 1.25v12.07c0 .69-.56 1.25-1.25 1.25h-3.71v4.24c0 .69-.56 1.25-1.25 1.25Zm1.25-7.99h2.46v-9.57h-2.46v9.57Z" fill="#593CFB"></path><path d="M16.57 32.21c-.34 0-.69-.14-.93-.42a1.26 1.26 0 0 1 .1-1.77l5.59-4.99H18.5c-.52 0-.98-.32-1.17-.8-.18-.49-.05-1.03.34-1.38l8.04-7.17a1.248 1.248 0 0 1 1.66 1.86l-5.59 4.98h2.83c.52 0 .98.32 1.17.8.18.49.05 1.03-.34 1.38l-8.04 7.17c-.23.23-.53.34-.83.34Z" fill="#593CFB"></path></svg>`,
            text: 'Electric'
        }, {
            img: tp6,
            svg: `<svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Electric" class="seo-pages-0" role="img" version="1.1"><path d="M39.87 12.25H3.25v11.54h36.62V12.25Z" fill="#E0CAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.87 36.58c-.69 0-1.25-.56-1.25-1.25V13.5H4.5v20.58h29.87a1.25 1.25 0 0 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25V12.25c0-.69.56-1.25 1.25-1.25h36.62c.69 0 1.25.56 1.25 1.25v4.27h3.71c.69 0 1.25.56 1.25 1.25v12.07c0 .69-.56 1.25-1.25 1.25h-3.71v4.24c0 .69-.56 1.25-1.25 1.25Zm1.25-7.99h2.46v-9.57h-2.46v9.57Z" fill="#593CFB"></path><path d="M16.57 32.21c-.34 0-.69-.14-.93-.42a1.26 1.26 0 0 1 .1-1.77l5.59-4.99H18.5c-.52 0-.98-.32-1.17-.8-.18-.49-.05-1.03.34-1.38l8.04-7.17a1.248 1.248 0 0 1 1.66 1.86l-5.59 4.98h2.83c.52 0 .98.32 1.17.8.18.49.05 1.03-.34 1.38l-8.04 7.17c-.23.23-.53.34-.83.34Z" fill="#593CFB"></path></svg>`,
            text: 'Electric'
        },
    ]
    return (
        <div className="container">
            <div className="typesofcar">
                <div className="typescarsheading">
                    <p>
                        Browse by experience
                    </p>
                </div>
                <div className="TypeofCarsRow">
                    <Slider {...settings}>
                        {data.map((items) => {
                            return (
                                <div className="eachtypeofCar">
                                    <div className="typeofcars-img">
                                        <img src={items.img} alt="" />
                                    </div>
                                    <div className="typeofcarsDep">
                                        <div className="svgicon">
                                            {/* <span>{items.svg}</span> */}
                                            <svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Electric" class="seo-pages-0" role="img" version="1.1"><path d="M39.87 12.25H3.25v11.54h36.62V12.25Z" fill="#E0CAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.87 36.58c-.69 0-1.25-.56-1.25-1.25V13.5H4.5v20.58h29.87a1.25 1.25 0 0 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25V12.25c0-.69.56-1.25 1.25-1.25h36.62c.69 0 1.25.56 1.25 1.25v4.27h3.71c.69 0 1.25.56 1.25 1.25v12.07c0 .69-.56 1.25-1.25 1.25h-3.71v4.24c0 .69-.56 1.25-1.25 1.25Zm1.25-7.99h2.46v-9.57h-2.46v9.57Z" fill="#593CFB"></path><path d="M16.57 32.21c-.34 0-.69-.14-.93-.42a1.26 1.26 0 0 1 .1-1.77l5.59-4.99H18.5c-.52 0-.98-.32-1.17-.8-.18-.49-.05-1.03.34-1.38l8.04-7.17a1.248 1.248 0 0 1 1.66 1.86l-5.59 4.98h2.83c.52 0 .98.32 1.17.8.18.49.05 1.03-.34 1.38l-8.04 7.17c-.23.23-.53.34-.83.34Z" fill="#593CFB"></path></svg>
                                        </div>
                                        <div className="typeofcarsname">
                                            <span>{items.text}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </Slider>
                </div>
            </div>
        </div>
    )
}

function TopHost() {

    const host = [
        {
            img: hs1,
            name: 'CARS FROM ARS..'
        },
        {
            img: hs2,
            name: 'Laura W.'
        },
        {
            img: hs3,
            name: 'Logor K'

        },
        {
            img: hs4,
            name: 'Lvan A.'

        },
        {
            img: hs5,
            name: 'Amir A.'

        },
        {
            img: hs6,
            name: 'Kevin M.'

        },
        {
            img: hs7,
            name: 'Mohammad A.'

        },
        {
            img: hs8,
            name: 'Derrick H.'

        },
    ]
    const HOSTsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
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
    }
    { console.log(host) }
    return (
        <div className="container ">
            <div className="tophostheading">
                <h2>
                    Meet the hosts
                </h2>
            </div>
            <div className="Tophostrow">
                <Slider {...HOSTsettings}>
                    {host.map((items) => {
                        return (
                            <div className="eachhostnames">
                                <div className="eachheader">
                                    <div className="hostimg">
                                        <img src={items.img} alt="" />
                                    </div>
                                    <div className="hostbio">
                                        <div className="hostname">
                                            <p>
                                                {items.name}
                                            </p>
                                        </div>
                                        <div className="hostStar">
                                            <div className="rating">
                                                <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg>
                                            </div>
                                            <div className="ratingtext">
                                                <span>
                                                    All-Star Host
                                                </span>
                                            </div>
                                        </div>
                                        <div className="hostTrips">
                                            <p>
                                                <span>489 trips</span>  • Joined Aug 2020
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="eachstarts">
                                    <div aria-label="Rating: 5 out of 5 stars" role="img" class="seo-pages-1cffxh0-StarRatingStars exgz8h52"><div aria-hidden="true" class="seo-pages-owa2iz-StarRatingWrapper exgz8h50"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#121214"></path></svg></div><div aria-hidden="true" class="seo-pages-owa2iz-StarRatingWrapper exgz8h50"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#121214"></path></svg></div><div aria-hidden="true" class="seo-pages-owa2iz-StarRatingWrapper exgz8h50"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#121214"></path></svg></div><div aria-hidden="true" class="seo-pages-owa2iz-StarRatingWrapper exgz8h50"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#121214"></path></svg></div><div aria-hidden="true" class="seo-pages-owa2iz-StarRatingWrapper exgz8h50"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#121214"></path></svg></div></div>
                                </div>
                                <div className="eachcontent">
                                    <p>
                                        He came thru for us at the last minute I was literally on the plane when I got a call that my <strong>car</strong> from a rental  <strong>rental</strong>
                                    </p>
                                </div>
                                <div className="eachdate">
                                    <p>
                                        Donna S. - Nov 2022
                                    </p>
                                </div>
                            </div>

                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

function BookaCar() {
    return (
        <div className="container position-relative">
            <div className="BookcarImg">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 846 484" class="ezo2sfm0 seo-pages-uqr0vw-IllustrationAtLargeSvgElement img-fluid" height="484px" role="img" version="1.1" width="846px"><path d="M265.58 51.77c64.29 18 127.35 41.95 193.12 51.72 72.43 10.75 147.75 4.31 217.09 29.3 80.49 29 199.52 135.19 162.35 239.88-20.41 57.47-85.21 82.21-136.2 95.7-61.13 16.16-125.2 16.23-187.48 9.1-68.73-7.86-136.84-40.12-198.13-73-61.57-33.05-132.45-33-198-51.4-23-6.45-45.88-15.36-65-30.59C-7.58 274.05-13.93 154.9 27.71 91c20.47-31.42 54.87-50 90-56.26s71.2-1.39 106.08 6.43a760.59 760.59 0 0 1 41.79 10.6z" fill="#fbf9f6"></path><ellipse cx="610.27" cy="131.15" rx="141.77" ry="130.35" fill="#efe6ff"></ellipse><path d="m534 129.39-.25-.23a4.69 4.69 0 0 1-1.42-4.26v-.12l.07-.19a15.63 15.63 0 0 1 2.16-5.44l1.94-2.76a17.35 17.35 0 1 0 19.65 16.69h-.42c-4.5-.47-7.4-2.54-8.63-6-4 3.14-6.76 4.23-8.86 4.23a6 6 0 0 1-4.24-1.92zm5.43 107.05a3.1 3.1 0 0 0 2.22.84h1.6a3.08 3.08 0 0 0 2.17-1 3 3 0 0 0 .84-2.21l-1.07-39.61-7.79.21 1.07 39.61a3.07 3.07 0 0 0 .96 2.16z" fill="none"></path><path d="M580 140.51a.36.36 0 0 0 0 .09 2.55 2.55 0 0 0 1.73 1.32c3.72 1 5.77-3 5.86-3.22v-.07s.78-1.25 1.77-2.88l-7-.58a52.64 52.64 0 0 1-2.31 5z" fill="#96826d"></path><path d="m580 140.51.16-.3a63.72 63.72 0 0 0 2.31-5l-1.72-.14h-.33l-.22.56s-1.09 2.96-.2 4.88z" fill="#7e6a59"></path><path d="M564.54 135.56a1.67 1.67 0 0 1 .75 1.86 44 44 0 0 1-2.3 6.37l-.36.8a3.14 3.14 0 0 0 1.93 1.39c4.36 1.19 6.76-3.53 6.86-3.73l4-7.65-7.34-.57-3.61-.29-.54 1.44z" fill="#96826d"></path><path d="M565.29 137.42a1.67 1.67 0 0 0-.75-1.86l-.64-.38-1.24 3.33s-1.32 3.63-.17 5.87a1.53 1.53 0 0 0 .14.21l.36-.8a44 44 0 0 0 2.3-6.37z" fill="#7e6a59"></path><path d="m538.52 116.22.7.6a2 2 0 0 1 .39 2.52 57.43 57.43 0 0 1-5.45 7.37l-.07.09a2.45 2.45 0 0 0 .73 1.11l.28.26c1.22 1.14 3.73 3.48 11.53-2.93a16.71 16.71 0 0 1-.14-4.47 8.09 8.09 0 0 1 .61-2.45 17.26 17.26 0 0 0-8.55-2.14z" fill="#96826d"></path><path d="M690.89 100.19a.8.8 0 0 1-1 .5c-7.85-2.26-13.71-4.6-17.43-7-8.43-5.34-32.36-21.68-45.88-30.94a14.93 14.93 0 0 0-13.71-1.65l-1.42.52-38.19 8a5.18 5.18 0 0 0-3.8 3.25l-1.78 4.64-1.24.45a3.45 3.45 0 0 0-1.63 1.24l-21.39 30-3 4.25a20.56 20.56 0 0 1 5 1.07 21.19 21.19 0 0 1 3.22 1.46 10.4 10.4 0 0 1 3.58-2.31 16.56 16.56 0 0 1 5-1.08h2.12l17.54-17.14a4.06 4.06 0 0 1 2.19-1.1c1.27-.41 18.53-5.79 34.7-.75a.81.81 0 0 1 .53 1 .61.61 0 0 1 0 .12c6.82 3.18 5 10.37 2.34 12.6l.06.11a.8.8 0 0 1-.38 1.07l-.21.11a47 47 0 0 1-20 5.72c-8.67.33-29.28 0-36.36-.13h-2.44c-.31 0-8.58.32-9.17 6.72s2 9.86 7.79 10.47c1.39.15 6.22.53 12.33 1 11.18.87 26.5 2.08 34.84 2.94a33.14 33.14 0 0 1 10.23 2.78l18.64 8.11a32.47 32.47 0 0 0 13.71 3.54l51.61 1.36 3.69-48.4a175.1 175.1 0 0 1-10.09-2.53zm-126.82 28a1.91 1.91 0 0 1-.69 1.44 2 2 0 0 1-1.24.45 1.27 1.27 0 0 1-.28 0c-4.5-.65-7.19-1.19-8-1.6a5.29 5.29 0 0 1-2.71-3.7 7.28 7.28 0 0 1 1.55-6c2.16-2.64 7.89-2.41 10.25-2.19a1.5 1.5 0 0 1 1.36 1.53zm14.13-2.28a.91.91 0 0 1-.91.87.93.93 0 0 1-.87-1 27.46 27.46 0 0 0-.17-6 .91.91 0 1 1 1.73-.59c.46 1.53.27 5.89.22 6.75zm3.25 3.48a.91.91 0 0 1-.91.87.92.92 0 0 1-.88-1c.14-3.05.2-7.74-.09-8.59a.93.93 0 0 1 .57-1.17.91.91 0 0 1 1.16.57c.48 1.57.21 8.06.15 9.35z" fill="#96826d"></path><path fill="#7e6a59" d="m534.51 119.13 1.94-2.76-1.94 2.76zm-2.2 5.77v-.31l-.07.19zm3.52-4.85s-2.66 4.2-1.77 6.79l.07-.09a57.43 57.43 0 0 0 5.45-7.37 2 2 0 0 0-.39-2.52l-.7-.6zm18.75 7c.48.25 2.71.76 7.51 1.46a.3.3 0 0 0 .26-.08.33.33 0 0 0 .12-.24l.23-10c-.76-.07-1.56-.11-2.35-.11-2.71 0-5.36.45-6.4 1.73a5.63 5.63 0 0 0-1.23 4.66 3.69 3.69 0 0 0 1.86 2.58z"></path><path d="M564.31 118.12a1.5 1.5 0 0 0-1.36-1.53c-2.36-.22-8.09-.45-10.25 2.19a7.28 7.28 0 0 0-1.55 6 5.29 5.29 0 0 0 2.71 3.7c.81.41 3.5.95 8 1.6a1.27 1.27 0 0 0 .28 0 2 2 0 0 0 1.24-.45 1.91 1.91 0 0 0 .69-1.44z" fill="#7e6a59"></path><path d="M613.3 95.2c-13.27-4.14-27.34-1-32.09.27l-6.15 10.64a.79.79 0 0 1-.69.4.71.71 0 0 1-.4-.11.79.79 0 0 1-.3-1.09l5.33-9.23a2.34 2.34 0 0 0-1 .59l-16.4 16c8.35.15 26.42.41 34.37.11.81 0 1.61-.1 2.4-.18l3.44-5.6a.8.8 0 0 1 1.1-.26.79.79 0 0 1 .26 1.1l-.23.38h.46a3.74 3.74 0 0 1 2.38.68 4.28 4.28 0 0 1 .82 1 3.2 3.2 0 0 1 .4.86 48.39 48.39 0 0 0 8.29-3.52l.3-.15a.8.8 0 0 1 1 .27c2.62-2.23 4.48-9.42-2.34-12.6a.81.81 0 0 1-.95.44z" fill="#96826d"></path><path d="M613.3 95.2c-13.27-4.14-27.34-1-32.09.27l-6.15 10.64a.79.79 0 0 1-.69.4.71.71 0 0 1-.4-.11.79.79 0 0 1-.3-1.09l5.33-9.23a2.34 2.34 0 0 0-1 .59l-16.4 16c8.35.15 26.42.41 34.37.11.81 0 1.61-.1 2.4-.18l3.44-5.6a.8.8 0 0 1 1.1-.26.79.79 0 0 1 .26 1.1l-.23.38h.46a3.74 3.74 0 0 1 2.38.68 4.28 4.28 0 0 1 .82 1 3.2 3.2 0 0 1 .4.86 48.39 48.39 0 0 0 8.29-3.52l.3-.15a.8.8 0 0 1 1 .27c2.62-2.23 4.48-9.42-2.34-12.6a.81.81 0 0 1-.95.44z" fill="#7e6a59" opacity="0.55"></path><path d="M607 110.8a3.2 3.2 0 0 0-.4-.86 4.28 4.28 0 0 0-.82-1 3.74 3.74 0 0 0-2.38-.68h-.46l-2.53 4.12a44.22 44.22 0 0 0 6.59-1.58z" fill="#efe6ff"></path><path d="M525.89 193.37a4.46 4.46 0 0 1-1.14-2.87l-.39-14.59a13.7 13.7 0 0 1 3.76-9.84c.24-.24.48-.48.73-.7l-2.42-4.67-2.68 5.54a.82.82 0 0 1-.73.45.93.93 0 0 1-.35-.08.81.81 0 0 1-.37-1.07l2.65-5.48-14.23 3.21a4.56 4.56 0 0 0-.6.18 4.39 4.39 0 0 0-2.4 2.26l-27.1 58.18 25.53 11.89z" fill="#dfc4ff"></path><path d="M557.2 175a13.75 13.75 0 0 0-14.13-13.38l-1.86.05v1.6l.07 2.33a4.39 4.39 0 0 1-.57 8.73h-.12a4.4 4.4 0 0 1-4.39-4.28 4.4 4.4 0 0 1 3.47-4.42l-.06-2.33v-1.6l-1.87.05a13.63 13.63 0 0 0-8.89 3.59c-.25.22-.49.46-.73.7a13.7 13.7 0 0 0-3.76 9.84l.39 14.59a4.46 4.46 0 0 0 1.14 2.87 3.44 3.44 0 0 0 .27.27 4.45 4.45 0 0 0 3.09 1.24h.12l6.42-.18 1.07 39.61a4.71 4.71 0 0 0 4.7 4.58h1.74a4.7 4.7 0 0 0 4.57-4.82l-1.07-39.64 6.42-.17a4.45 4.45 0 0 0 3.14-1.4 4.5 4.5 0 0 0 1.24-3.22zm-10.94 59a3 3 0 0 1-.84 2.21 3.08 3.08 0 0 1-2.17 1h-1.6a3.07 3.07 0 0 1-3.18-3l-1.07-39.61 7.79-.21z" fill="#5f15ff"></path><path d="M645.6 149.8a32.47 32.47 0 0 1-13.71-3.54l-18.64-8.11a33.14 33.14 0 0 0-10.25-2.78c-8.34-.86-23.66-2.07-34.84-2.94-6.11-.48-10.94-.86-12.33-1-5.84-.61-8.39-4-7.79-10.47s8.86-6.71 9.17-6.72h2.44c7.08.13 27.69.46 36.36.13a47 47 0 0 0 20-5.72l.21-.11a.8.8 0 0 0 .38-1.07l-.06-.11a.8.8 0 0 0-1-.27l-.3.15a48.39 48.39 0 0 1-8.24 3.56 44.22 44.22 0 0 1-6.59 1.57l2.53-4.12.23-.38a.79.79 0 0 0-.26-1.1.8.8 0 0 0-1.1.26l-3.44 5.6c-.79.08-1.59.15-2.4.18-8 .3-26 0-34.37-.11l16.4-16a2.34 2.34 0 0 1 1-.59l-5.33 9.23a.79.79 0 0 0 .3 1.09.71.71 0 0 0 .4.11.79.79 0 0 0 .69-.4l6.15-10.64c4.75-1.3 18.82-4.41 32.09-.27a.81.81 0 0 0 1-.4.61.61 0 0 0 0-.12.81.81 0 0 0-.53-1c-16.17-5-33.43.34-34.7.75a4.06 4.06 0 0 0-2.19 1.1l-17.54 17.14h-2.12a16.56 16.56 0 0 0-5 1.08 10.4 10.4 0 0 0-3.58 2.31 21.19 21.19 0 0 0-3.22-1.46 20.56 20.56 0 0 0-5-1.07l3-4.25 21.39-30a3.45 3.45 0 0 1 1.65-1.31c7.65-2.8 46-16.71 46.43-16.86a14.93 14.93 0 0 1 13.71 1.65c13.52 9.26 37.45 25.6 45.88 30.94 3.72 2.36 9.58 4.7 17.43 7a.8.8 0 0 0 1-.5.81.81 0 0 0-.55-1c-7.71-2.22-13.43-4.5-17-6.78-8.73-5.52-35-23.46-45.83-30.91a16.54 16.54 0 0 0-15.18-1.82l-1.19.43-38.19 8a6.79 6.79 0 0 0-5 4.24l-1.51 4-.56.2a5.08 5.08 0 0 0-2.39 1.82l-21.27 29.82-.12.17a.24.24 0 0 0-.06.08l-3.53 5a20.19 20.19 0 1 0 20.37 19.89l4 .32-1.62 4.31c-.06.17-1.54 4.23-.1 7.05a4.58 4.58 0 0 0 3 2.34 6.53 6.53 0 0 0 1.76.24c3.49 0 5.92-2.93 6.79-4.72l4.26-8.18 1.77.14v.12c-.06.16-1.37 3.8-.06 6.35a4.15 4.15 0 0 0 2.74 2.13 6 6 0 0 0 1.58.22c3.13 0 5.31-2.62 6.12-4.25.16-.26 1.07-1.73 2.16-3.54 4.46.38 8.52.75 11.62 1.07a31.33 31.33 0 0 1 9.74 2.65l18.61 8.09a34 34 0 0 0 14.34 3.7l51.54 1.35.12-1.6zm-76.12-76.89a5.18 5.18 0 0 1 3.8-3.25L600.39 64c-10.47 3.79-25 9.08-31.92 11.59zm-31 43.31a17.26 17.26 0 0 1 8.55 2.14 8.09 8.09 0 0 0-.61 2.45 16.71 16.71 0 0 0 .14 4.47c-7.8 6.41-10.31 4.07-11.53 2.93l-.28-.26a2.45 2.45 0 0 1-.73-1.11c-.89-2.59 1.75-6.76 1.77-6.79l2.66-3.79zm16.6 23.11a17.35 17.35 0 1 1-18.67-23l-1.94 2.76a15.63 15.63 0 0 0-2.16 5.44v.31a4.69 4.69 0 0 0 1.42 4.26l.25.23a6 6 0 0 0 4.21 1.83c2.1 0 4.9-1.09 8.86-4.23 1.23 3.49 4.13 5.56 8.63 6h.42a17.22 17.22 0 0 1-.98 6.4zm16.3 2.92c-.1.2-2.5 4.92-6.86 3.73a3.14 3.14 0 0 1-1.93-1.39 1.53 1.53 0 0 1-.14-.21c-1.15-2.24.15-5.83.17-5.87l1.24-3.33.54-1.44 3.61.29 7.34.57zm16.27-3.62v.07c-.09.17-2.14 4.23-5.86 3.22a2.55 2.55 0 0 1-1.73-1.32.36.36 0 0 1 0-.09c-.92-1.92.16-4.93.17-4.94l.22-.56h.33l1.72.14 7 .58-1.81 2.9z" fill="#121214"></path><path d="m539.65 163.33.06 2.33v3.06a.81.81 0 0 0 .81.78.8.8 0 0 0 .78-.82v-3.06l-.07-2.33v-1.6l-.11-4a.8.8 0 0 0-1.6 0l.11 4zm-16.98 3.28a.93.93 0 0 0 .35.08.82.82 0 0 0 .73-.45l2.68-5.54 2.11-4.37a.8.8 0 1 0-1.44-.7l-2.1 4.43-2.65 5.48a.81.81 0 0 0 .32 1.07z" fill="#121214"></path><path d="m751.64 139.21-.08-.07a1.08 1.08 0 0 1-.07-1.52 1.1 1.1 0 0 1 .38-.27c.1-2.06.17-4.12.17-6.2v-2.64a1 1 0 0 1-.41.08 1.07 1.07 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 0 1 1.14-1.79q-.18-4.47-.67-8.85a1.12 1.12 0 0 1-.44.09 1 1 0 0 1-.72-.28l-.08-.07a1.07 1.07 0 0 1-.08-1.52 1.08 1.08 0 0 1 1-.33 118.64 118.64 0 0 0-3.4-16.44l-42.07-4a4.17 4.17 0 0 0-4.33 3.84l-.29 3.9-3.69 48.4-.12 1.6-.7 9.27a4.16 4.16 0 0 0 3.16 4.36l4.46.8a1.07 1.07 0 0 1 .26-.87 1.09 1.09 0 0 1 1.53-.08l.08.07a1.09 1.09 0 0 1 .25 1.26l25.69 4.63a1.08 1.08 0 0 1 1.67-1.31l.08.07a1.08 1.08 0 0 1 .08 1.52l10.23 1.84a117.91 117.91 0 0 0 7.9-35.07zm-7.55-28.68a1.08 1.08 0 0 1 1.53-.08l.08.07a1.09 1.09 0 0 1 .07 1.53 1.05 1.05 0 0 1-.8.36 1.09 1.09 0 0 1-.72-.28l-.08-.08a1.07 1.07 0 0 1-.08-1.52zm-15.57-3.14a1.19 1.19 0 0 1-.32 0 1.14 1.14 0 0 1-.51-.13zm-12.32-1.18 2.12.2a1.09 1.09 0 0 1-.24 1 1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.07 1.07 0 0 1-.27-1.2zM713 113a1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 1 1 1.45-1.6l.08.07A1.09 1.09 0 0 1 713 113zm-2.9 36.71.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1.09 1.09 0 0 1-.72-.27l-.08-.08a1.08 1.08 0 1 1 1.45-1.6zM707 128a1.08 1.08 0 0 1 1.53-.08l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1.09 1.09 0 0 1-.72-.27l-.08-.08A1.08 1.08 0 0 1 707 128zm-.62-9.31-.08-.07a1.14 1.14 0 0 1-.27-.39l.07-1a1.83 1.83 0 0 1 .13-.16 1.07 1.07 0 0 1 1.52-.08l.08.07a1.08 1.08 0 0 1 .08 1.53 1.09 1.09 0 0 1-.8.35 1.08 1.08 0 0 1-.71-.24zm1.4 20.21a1.07 1.07 0 0 1 1.52-.08l.08.07a1.08 1.08 0 0 1 .08 1.53 1.09 1.09 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.08 1.08 0 0 1-.05-1.51zm-3.37 7.1a1.14 1.14 0 0 1-.5.31l.16-2 .18.13.08.07a1.09 1.09 0 0 1 .08 1.49zm.77 10.9a1.07 1.07 0 0 1-.8.36 1.13 1.13 0 0 1-.73-.28l-.08-.08a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .08 1.57zm5.85 5.29a1.09 1.09 0 0 1-.8.35 1.12 1.12 0 0 1-.73-.27l-.08-.08a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .05 1.57zm1.14-38.31a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.08 1.08 0 1 1-1.45 1.6zm.78 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28zm.77 10.9a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.08 1.08 0 1 1-1.45 1.6zm.78 10.9a1.07 1.07 0 0 1-.08-1.52A1.08 1.08 0 0 1 716 155l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28zm2.38 10.9a1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .08 1.57zm.37-49.21a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28zm.77 10.9a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07l.08.07a1.09 1.09 0 0 1 .08 1.53 1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28zm.78 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28zm.77 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .08 1.53 1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28zm2.38 10.9a1.09 1.09 0 0 1-.8.35 1 1 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .12 1.57zm.37-49.21a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 1 1-1.45 1.6zm.78 10.9a1.08 1.08 0 1 1 1.44-1.6l.08.07a1.08 1.08 0 0 1-.72 1.88 1 1 0 0 1-.72-.28zm.77 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 1 1-1.45 1.6zm.78 10.9a1.08 1.08 0 1 1 1.44-1.6l.08.07a1.08 1.08 0 0 1-.72 1.88 1 1 0 0 1-.72-.28zm.77 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .08 1.52 1.09 1.09 0 0 1-.81.36 1.07 1.07 0 0 1-.72-.28zm2.38 10.89a1.07 1.07 0 0 1-.8.36 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07l.08.07a1.07 1.07 0 0 1 .08 1.56zm.37-49.2a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .08 1.52 1.09 1.09 0 0 1-.81.36 1.07 1.07 0 0 1-.72-.28zm.77 10.9a1.09 1.09 0 0 1-.07-1.53 1.07 1.07 0 0 1 1.52-.07l.08.07a1.08 1.08 0 0 1-.72 1.88 1.08 1.08 0 0 1-.75-.2zm.78 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .08 1.52 1.09 1.09 0 0 1-.81.36 1.07 1.07 0 0 1-.72-.28zm.77 10.9a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07l.08.07a1.08 1.08 0 0 1 .08 1.53 1.09 1.09 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28zm2.38 10.89a1.07 1.07 0 0 1-1.52.08l-.08-.07a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .07 1.56zm.45-49.13-.08-.07a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.08l.08.08a1.08 1.08 0 0 1-.72 1.88 1.08 1.08 0 0 1-.73-.24zm.7 10.83a1.08 1.08 0 0 1 1.45-1.61l.08.08a1.08 1.08 0 0 1 .07 1.52 1.07 1.07 0 0 1-1.52.08zm.77 10.9a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.08l.08.08a1.08 1.08 0 1 1-1.45 1.6zm.78 10.89a1.07 1.07 0 0 1-.08-1.52 1.08 1.08 0 0 1 1.53-.07l.08.07a1.08 1.08 0 0 1 .07 1.52 1.05 1.05 0 0 1-.8.36 1 1 0 0 1-.72-.28zm.77 10.91a1.08 1.08 0 1 1 1.45-1.61l.08.08a1.08 1.08 0 1 1-1.45 1.6zm2.38 10.89a1.05 1.05 0 0 1-.8.36 1 1 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 1 1 1.45-1.61l.08.08a1.08 1.08 0 0 1 .07 1.56zm.37-49.21a1.08 1.08 0 0 1 1.45-1.6l.08.08a1.08 1.08 0 0 1-.72 1.88 1.13 1.13 0 0 1-.73-.28zm.78 10.9a1.07 1.07 0 0 1-.08-1.52 1.09 1.09 0 0 1 1.53-.08l.08.08a1.08 1.08 0 0 1 .07 1.52 1.05 1.05 0 0 1-.8.36 1.09 1.09 0 0 1-.72-.28zm.77 10.9a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.08 1.08 0 0 1-.72 1.89 1.13 1.13 0 0 1-.73-.28zm.78 10.91a1.08 1.08 0 0 1 1.44-1.61l.08.07a1.08 1.08 0 0 1 .08 1.53 1.05 1.05 0 0 1-.8.36 1.09 1.09 0 0 1-.72-.28zm.77 10.9a1.08 1.08 0 0 1 1.45-1.61l.08.07a1.09 1.09 0 0 1 .08 1.53 1.07 1.07 0 0 1-.8.36 1.08 1.08 0 0 1-.73-.28zm2.38 10.89a1.05 1.05 0 0 1-.8.36 1.09 1.09 0 0 1-.72-.28l-.08-.08a1.07 1.07 0 0 1-.08-1.52 1.09 1.09 0 0 1 1.53-.08l.08.08a1.08 1.08 0 0 1 .07 1.56zm.37-49.21a1.08 1.08 0 0 1-.08-1.52 1.09 1.09 0 0 1 1.53-.08l.08.07a1.08 1.08 0 0 1-.72 1.89 1.13 1.13 0 0 1-.75-.27zm.78 10.9a1.07 1.07 0 0 1-.08-1.52 1.09 1.09 0 0 1 1.53-.08l.08.07a1.09 1.09 0 0 1 .07 1.53 1.07 1.07 0 0 1-.8.36 1.09 1.09 0 0 1-.72-.28zm.77 10.9a1.08 1.08 0 0 1-.08-1.52 1.09 1.09 0 0 1 1.53-.08l.08.07a1.08 1.08 0 0 1-.73 1.89 1.12 1.12 0 0 1-.72-.28zm2.38 10.9a1.07 1.07 0 0 1-1.52.08l-.08-.07a1.08 1.08 0 0 1 1.44-1.61l.08.07a1.08 1.08 0 0 1 .08 1.57z" fill="#dfc4ff"></path><path d="M744.25 112.13a1.09 1.09 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36 1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 0 0-1.53.08 1.07 1.07 0 0 0 .08 1.52zm5.69 3.69a1.07 1.07 0 0 0 .08 1.52l.08.07a1 1 0 0 0 .72.28 1.12 1.12 0 0 0 .44-.09l-.27-2.11a1.08 1.08 0 0 0-1.05.33zm.77 10.9a1.08 1.08 0 0 0 .08 1.52l.08.07a1.07 1.07 0 0 0 .72.28 1 1 0 0 0 .41-.08c0-.69 0-1.37-.07-2.06a1.09 1.09 0 0 0-1.22.27zm-4.16-3.72a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.09 1.09 0 0 0-1.53.08 1.08 1.08 0 0 0 .08 1.52l.08.08a1.13 1.13 0 0 0 .73.28 1.08 1.08 0 0 0 .8-.36zm-18.03-15.61-.83-.08a1.14 1.14 0 0 0 .51.13 1.19 1.19 0 0 0 .32-.05zm12.18 10.27a1.08 1.08 0 0 0-.08-1.52l-.08-.08a1.08 1.08 0 0 0-1.45 1.6l.08.08a1.13 1.13 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36zm-5.85-5.29a1.07 1.07 0 0 0-.08-1.52l-.08-.08a1.08 1.08 0 0 0-1.52.08 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36zm.77 10.9a1.08 1.08 0 0 0-.07-1.52l-.08-.08a1.08 1.08 0 0 0-1.45 1.61l.08.07a1.07 1.07 0 0 0 1.52-.08zm-19.07-15.79a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35 1.09 1.09 0 0 0 .24-1l-2.12-.2a1.07 1.07 0 0 0 .27 1.2zm24.92 21.08a1.08 1.08 0 0 0-.07-1.52l-.08-.08a1.09 1.09 0 0 0-1.53.08 1.07 1.07 0 0 0 .08 1.52l.08.08a1.09 1.09 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36zm5.85 5.29a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.09 1.09 0 0 0-1.53.08 1.07 1.07 0 0 0 .08 1.52l.08.08a1.09 1.09 0 0 0 .72.28 1.07 1.07 0 0 0 .8-.36zm4.24 5.29.08.07.1.08c0-.65.09-1.29.13-1.94a1.1 1.1 0 0 0-.38.27 1.08 1.08 0 0 0 .07 1.52zm-27.63-26.45a1.08 1.08 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 1.53-.08zm5.85 5.31a1.08 1.08 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.07 1.07 0 0 0 .72.28 1.09 1.09 0 0 0 .81-.36zm-5.08 5.59a1.07 1.07 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 1 0-1.44 1.6l.08.07a1 1 0 0 0 .72.28 1.07 1.07 0 0 0 .8-.36zm5.85 5.29a1.07 1.07 0 0 0-.08-1.52l-.08-.07a1.07 1.07 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36zm-17.7-17.46a1.08 1.08 0 1 0-1.45 1.6l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35 1.09 1.09 0 0 0-.07-1.53zm23.55 22.75a1.08 1.08 0 0 0-.08-1.52l-.08-.08a1.08 1.08 0 0 0-1.52.08 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36zm5.85 5.29a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.45 1.6l.08.08a1.13 1.13 0 0 0 .73.28 1.08 1.08 0 0 0 .8-.36zm5.85 5.29a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.09 1.09 0 0 0-1.53.08 1.08 1.08 0 0 0 .08 1.52l.08.08a1.12 1.12 0 0 0 .72.28 1.09 1.09 0 0 0 .81-.36zm-29.25-26.44a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35zm18.32 26.76a1.08 1.08 0 0 0-.07-1.52l-.08-.07a1.08 1.08 0 0 0-1.53.07 1.07 1.07 0 0 0 .08 1.52l.08.08a1 1 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36zm-5.84-5.29a1.08 1.08 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.07 1.07 0 0 0 .72.28 1.09 1.09 0 0 0 .81-.36zM743 150.36a1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.44 1.61l.08.07a1.09 1.09 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36zm-17.52-15.87a1.08 1.08 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 1.53-.08zm-11.7-10.57a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.35zm5.85 5.29a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35zm29.08 24.84a1.08 1.08 0 0 0-1.44 1.61l.08.07a1.08 1.08 0 0 0 1.44-1.61zm-40.78-35.42a1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.07 1.07 0 0 0-1.52.08 1.83 1.83 0 0 0-.13.16l-.07 1a1.14 1.14 0 0 0 .27.39l.08.07a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.38zm18.32 26.76a1.07 1.07 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 1 0-1.44 1.6l.08.07a1 1 0 0 0 .72.28 1.07 1.07 0 0 0 .8-.36zm-11.7-10.57a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35zm29.25 26.44a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.45 1.61l.08.07a1.08 1.08 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36zm-23.4-21.15a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35zM738 156a1.08 1.08 0 0 0-.08-1.52l-.08-.08a1.08 1.08 0 1 0-1.45 1.61l.08.07a1.08 1.08 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36zm-5.9-5.31a1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.35zm-24.92-21.08a1.09 1.09 0 0 0 .72.27 1.08 1.08 0 0 0 .8-.35 1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6zm.82 10.89a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.35 1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.45 1.6zm36.42 30.06a1.09 1.09 0 0 0-1.53.08 1.07 1.07 0 0 0 .08 1.52l.08.08a1.09 1.09 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36 1.08 1.08 0 0 0-.07-1.52zm-29.09-24.84a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.35zm5.85 5.28a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35zm17.39 14.27a1.08 1.08 0 1 0-1.45 1.61l.08.07a1 1 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36 1.08 1.08 0 0 0-.07-1.52zM727 156.29a1.08 1.08 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.07 1.07 0 0 0 .72.28 1.09 1.09 0 0 0 .81-.36zm5.72 3.71a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.07 1.07 0 0 0 1.52-.08 1.08 1.08 0 0 0-.07-1.52zm-28.65-15.69-.16 2a1.14 1.14 0 0 0 .5-.31 1.09 1.09 0 0 0-.08-1.53l-.08-.07zm12.03 12.31a1.09 1.09 0 0 0-.07-1.53L716 155a1.08 1.08 0 0 0-1.53.08 1.07 1.07 0 0 0 .08 1.52l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .75-.33zm5.7 3.69a1.08 1.08 0 1 0-1.45 1.6l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .73-1.88zm16.9 17.82a1.08 1.08 0 0 0 .72-1.88l-.08-.08a1.08 1.08 0 0 0-1.52.08 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28zm-11.06-12.53a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.08 1.08 0 0 0 .72-1.88zm-19.07-15.79a1.08 1.08 0 0 0 .08 1.52l.08.08a1.09 1.09 0 0 0 .72.27 1.08 1.08 0 0 0 .8-.35 1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 0 0-1.53.08zm25 21.19-.08-.07a1.08 1.08 0 0 0-1.67 1.31 1.48 1.48 0 0 0 .22.29l.08.07a1.08 1.08 0 0 0 1.49 0 1.08 1.08 0 0 0-.04-1.6zm-11.65 2.16a1.11 1.11 0 0 0 .81-.35 1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.07 1.07 0 0 0 .72.28zm-11.05-12.53a1.08 1.08 0 0 0-1.45 1.6l.08.08a1.12 1.12 0 0 0 .73.27 1.08 1.08 0 0 0 .72-1.88zm-5.87-5.29a1.08 1.08 0 0 0-1.45 1.6l.08.08a1.13 1.13 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36 1.08 1.08 0 0 0-.08-1.53zm11.72 10.58a1.08 1.08 0 0 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35 1.09 1.09 0 0 0-.08-1.53zm17.55 15.87a1.09 1.09 0 0 0-1.53.07l-.13.18 2.06.37a1 1 0 0 0-.32-.55zm-6.5-3.34a1.09 1.09 0 0 0 .81-.36 1.08 1.08 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.07 1.07 0 0 0 .72.28zm-10.92.32a1.08 1.08 0 0 0 .8-.35 1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 0 0-1.53.08 1.07 1.07 0 0 0 .08 1.52l.08.07a1 1 0 0 0 .72.28zm-5.2-7.24a1.08 1.08 0 1 0-1.45 1.6l.08.08a1.09 1.09 0 0 0 1.52-.08 1.09 1.09 0 0 0-.07-1.53zm-5.77-5.22-.08-.07a1.09 1.09 0 0 0-1.53.08 1.07 1.07 0 0 0-.26.87 1 1 0 0 0 .34.65l.08.08a1.1 1.1 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36 1 1 0 0 0 .18-.27 1.09 1.09 0 0 0-.25-1.26zm.69 10.83a1.08 1.08 0 0 0-1.39 0l1.63.29-.16-.18z" fill="#8e5cff"></path><path d="M581.45 129.42c.06-1.29.33-7.78-.19-9.28a.91.91 0 0 0-1.16-.57.93.93 0 0 0-.57 1.17c.29.85.23 5.54.09 8.59a.92.92 0 0 0 .88 1 .91.91 0 0 0 .95-.91zm-5.08-3.57a.93.93 0 0 0 .87 1 .91.91 0 0 0 .91-.87c0-.86.24-5.22-.27-6.71a.91.91 0 1 0-1.73.59 27.46 27.46 0 0 1 .22 5.99z" fill="#121214"></path><ellipse cx="242.33" cy="371.07" rx="115.68" ry="106.37" transform="rotate(-1.55 241.94 370.75)" fill="#efe6ff"></ellipse><path d="m258.55 386.7 47.85 5.69a11.25 11.25 0 0 0 2.72 0l44.88-5.87a10.24 10.24 0 0 0 3.32-1l22.27-11.15a9 9 0 0 0 1-.55l19.11-12.51a2.08 2.08 0 0 0 .9-2.27c-.5-1.9-2.06-4.28-6.67-4.85-8.12-1-21.75 8.05-21.88 8.14a1.15 1.15 0 0 1-.25.12l-20.8 6.21h-.24l-14.1.37a.93.93 0 0 1-.94-.89l-6.93.18-8-.81c-3.06.41-6.48.72-10.78.88-2.1.08-4.22.14-6.31.2-9.52.28-18.52.55-22.86 2.05a.79.79 0 0 1-.3.05.91.91 0 0 1-.87-.61.93.93 0 0 1 .57-1.17c4.61-1.6 13.74-1.87 23.41-2.15l6.29-.2a105.9 105.9 0 0 0 21-2.79c2-.42 4.15-.87 6.61-1.34 5.17-1 8.76-3.89 9.84-7.94a9.17 9.17 0 0 0-2.91-9.39c-4.85-4.21-22.25-2.44-31.6-1.49l-3.07.3a62.82 62.82 0 0 1-27.54-3.19c-10.26-3.47-27.56-5.45-38.56-4.42-11.29 1.06-21.05 8.18-21.15 8.25a.91.91 0 0 1-1.21-.12 81.88 81.88 0 0 1-11 7.63l28.45 35.18c8.3-2.44 19.25-.63 19.75-.54zm71.39-41.55c3.49-.61 9.74-1.21 12.53 1.68a8.83 8.83 0 0 1 2.47 7.15 6.53 6.53 0 0 1-3 4.82c-.94.57-4.09 1.48-9.35 2.69a2.76 2.76 0 0 1-.57.06 2.55 2.55 0 0 1-2.55-2.29l-1.25-11.88a2.05 2.05 0 0 1 1.72-2.23zm-19.55 10.64a.93.93 0 0 1 1-.87.91.91 0 0 1 .86 1 28 28 0 0 0 .18 6 .9.9 0 0 1-.57 1.16.77.77 0 0 1-.29.05.91.91 0 0 1-.87-.62c-.55-1.51-.35-5.86-.31-6.72zm-3.24-3.48a.92.92 0 0 1 1.83.09c-.14 3.05-.2 7.74.09 8.59a.91.91 0 0 1-.57 1.16.79.79 0 0 1-.3.05.9.9 0 0 1-.86-.61c-.52-1.5-.25-7.99-.19-9.28z" fill="#c2b48f"></path><path d="M400.15 352.67c-.57-2.25-3.22-4.44-9-3.84-6.31.65-15.19 7.1-18.72 9.85a.9.9 0 0 1-.56.19 1 1 0 0 1-.58-.2l-4.29 3.27 4.1-1.23c1.47-1 14.54-9.4 23-8.36 3.42.42 5.45 1.75 6.66 3.19l.21-.75a4 4 0 0 0 .2-1.45.91.91 0 0 1-1.02-.67z" fill="#c2b48f"></path><path d="M371.17 358.52a.91.91 0 0 1 .16-1.29 71.4 71.4 0 0 1 1.84-1.4l-20.12 5.29h-.24a.9.9 0 0 1-.88-.69.91.91 0 0 1 .65-1.12l12.42-3.24a3.68 3.68 0 0 0-2-2.47c-2.19-1.11-10.13-.65-13-.38a1 1 0 0 1-.45-.08 11 11 0 0 1-.32 1.86c-1.28 4.76-5.39 8.14-11.27 9.27-2.45.47-4.55.91-6.58 1.34-3.62.76-6.83 1.43-10.57 1.94l8 .81 6.93-.18a.92.92 0 0 1 .89-.94l14-.37 16.37-4.93 4.32-3.27z" fill="#af9d80"></path><path d="M401.93 352.22c-.76-3-4-5.93-10.95-5.22-4.16.43-9.16 3-13.41 5.78l-10.77 2.83a5.47 5.47 0 0 0-3-3.65c-3.06-1.55-12.89-.67-14-.57a1 1 0 0 0-.25.06 11.1 11.1 0 0 0-3.84-7.7c-5.44-4.72-22.68-3-33-1.93l-3.06.31A61.17 61.17 0 0 1 282.9 339c-10.47-3.53-28.1-5.55-39.32-4.5-11.82 1.11-21.65 8.29-22.06 8.6a.91.91 0 0 0-.2 1.28l.07.07a.91.91 0 0 0 1.21.12c.1-.07 9.86-7.19 21.15-8.25 11-1 28.3 1 38.56 4.42a62.82 62.82 0 0 0 27.54 3.26l3.07-.3c9.35-.95 26.75-2.72 31.6 1.49a9.17 9.17 0 0 1 2.91 9.39c-1.08 4.05-4.67 7-9.84 7.94-2.46.47-4.57.92-6.61 1.34a105.9 105.9 0 0 1-21 2.79l-6.29.2c-9.67.28-18.8.55-23.41 2.15a.93.93 0 0 0-.57 1.17.91.91 0 0 0 .87.61.79.79 0 0 0 .3-.05c4.34-1.5 13.34-1.77 22.86-2.05 2.09-.06 4.21-.12 6.31-.2 4.3-.16 7.72-.47 10.78-.88 3.74-.51 6.95-1.18 10.57-1.94 2-.43 4.13-.87 6.58-1.34 5.88-1.13 10-4.51 11.27-9.27a11 11 0 0 0 .32-1.86 1 1 0 0 0 .45.08c2.87-.27 10.81-.73 13 .38a3.68 3.68 0 0 1 2 2.47l-12.45 3.27a.91.91 0 0 0-.65 1.12.9.9 0 0 0 .88.69h.24l20.12-5.29c-.67.49-1.29 1-1.84 1.4a.91.91 0 0 0-.16 1.29l.14.15a1 1 0 0 0 .58.2.9.9 0 0 0 .56-.19c3.53-2.75 12.41-9.2 18.72-9.85 5.76-.6 8.41 1.59 9 3.84a.91.91 0 0 0 1 .67h.09a.92.92 0 0 0 .68-1.2z" fill="#121214"></path><path d="M400.76 355.54c-1.21-1.44-3.24-2.77-6.66-3.19-8.47-1-21.54 7.4-23 8.36l-4.1 1.23-16.41 4.93-14 .37a.92.92 0 0 0-.89.94.93.93 0 0 0 .94.89l14.1-.37h.24l20.76-6.23a1.15 1.15 0 0 0 .25-.12c.13-.09 13.76-9.13 21.88-8.14 4.61.57 6.17 2.95 6.67 4.85a2.08 2.08 0 0 1-.9 2.27l-19.1 12.47a9 9 0 0 1-1 .55l-22.22 11.15a10.24 10.24 0 0 1-3.32 1l-44.88 5.86a11.25 11.25 0 0 1-2.72 0l-47.85-5.69c-.5-.09-11.45-1.9-19.73.58l1.26 1.56c7.81-2 18-.35 18.21-.33l47.9 5.7a12.38 12.38 0 0 0 3.16 0l44.89-5.85a12.18 12.18 0 0 0 3.9-1.2L380.41 376a10.77 10.77 0 0 0 1.14-.65l19.1-12.51a3.92 3.92 0 0 0 1.67-4.28 7.63 7.63 0 0 0-1.56-3.02zm-92.56 6.66a.79.79 0 0 0 .3-.05.91.91 0 0 0 .57-1.16c-.29-.85-.23-5.54-.09-8.59a.92.92 0 0 0-1.83-.09c-.06 1.29-.33 7.78.19 9.28a.9.9 0 0 0 .86.61zm3.34.92a.77.77 0 0 0 .29-.05.9.9 0 0 0 .57-1.16 28 28 0 0 1-.18-6 .91.91 0 0 0-.86-1 .93.93 0 0 0-1 .87c0 .86-.24 5.22.28 6.71a.91.91 0 0 0 .9.63z" fill="#121214"></path><path d="M329.51 359.26a2.55 2.55 0 0 0 2.55 2.29 2.76 2.76 0 0 0 .57-.06c5.26-1.21 8.41-2.12 9.35-2.69a6.53 6.53 0 0 0 3-4.82 8.83 8.83 0 0 0-2.47-7.15c-2.79-2.89-9-2.29-12.53-1.68a2.05 2.05 0 0 0-1.68 2.23z" fill="#96826d"></path><path d="m238.82 387.28-28.45-35.18-3.71-4.58a3.78 3.78 0 0 0-5.24-.64l-71.55 49.65a99.38 99.38 0 0 0 6 16.67 1.08 1.08 0 0 1 1.08.21l.08.08a1.08 1.08 0 0 1 .07 1.52.9.9 0 0 1-.27.21A104.9 104.9 0 0 0 154 440.08a1.07 1.07 0 0 1 1.31.1l.08.07a1.09 1.09 0 0 1 .13 1.45c1.3 1.35 2.64 2.68 4 4l.09-.13a1.09 1.09 0 0 1 1.53-.07l.08.07a1.09 1.09 0 0 1 .07 1.53.69.69 0 0 1-.13.11q2.1 1.89 4.29 3.67a1.08 1.08 0 0 1 1.52-.07l.08.07a1.07 1.07 0 0 1 .15 1.43 110.3 110.3 0 0 0 4.76 3.52 1 1 0 0 1 .86.27l.08.07a1.05 1.05 0 0 1 .33.55l.54.36 33.65-29a1.06 1.06 0 0 1 .17-.26 1 1 0 0 1 .5-.31l4.53-3.91a1.08 1.08 0 0 1 1.57-1.48l.07.07 4.31-3.73a1 1 0 0 1-.67-.27l-.08-.07a1.08 1.08 0 0 1 1.44-1.61l.08.08a1.07 1.07 0 0 1 .35.91l23.23-20a3.8 3.8 0 0 0 .12-4.92l-2.95-3.64zm-98.25 22.12a1.08 1.08 0 0 1-.08-1.52 1.09 1.09 0 0 1 1.53-.08l.08.07a1.08 1.08 0 0 1-.73 1.89 1.12 1.12 0 0 1-.72-.28zm2.43 10.9a1.07 1.07 0 0 1-.8.36 1.09 1.09 0 0 1-.72-.28l-.09-.08a1.08 1.08 0 0 1 1.45-1.6l.08.08a1.07 1.07 0 0 1 .08 1.52zm2.69-16.51a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .08 1.53 1.06 1.06 0 0 1-.8.35 1.12 1.12 0 0 1-.73-.27zm.78 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .07 1.53 1 1 0 0 1-.8.35 1.11 1.11 0 0 1-.72-.27zm2.38 10.9a1.07 1.07 0 0 1-.8.36 1.13 1.13 0 0 1-.73-.28l-.08-.08a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .03 1.53zm1.92-27.41a.79.79 0 0 1-.17-.2l1.78-1.24a1.08 1.08 0 0 1-.81 1.79 1.06 1.06 0 0 1-.72-.28zm.77 10.9a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.08 1.08 0 1 1-1.45 1.6zm.78 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28zm2.38 10.9a1.09 1.09 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .03 1.53zm2-27.34-.08-.07a1.07 1.07 0 0 1-.08-1.52 1.08 1.08 0 0 1 1.53-.08l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.77-.28zm.69 10.83a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .08 1.53 1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28zm.78 10.9a1.07 1.07 0 0 1-.08-1.52 1.08 1.08 0 0 1 1.53-.08l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28zm2.38 10.9a1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07l.08.07a1.09 1.09 0 0 1 .03 1.53zm60.75-47.06a1.09 1.09 0 0 1 1.53-.08l.08.08a1.08 1.08 0 0 1 .07 1.52 1.05 1.05 0 0 1-.8.36 1.1 1.1 0 0 1-.72-.28l-.08-.08a1.08 1.08 0 0 1-.13-1.52zm-3.46 5.61a1.08 1.08 0 0 1-1.46 1.6l-.08-.07a1.08 1.08 0 1 1 1.46-1.6zm-.86-11 .08.07a1.08 1.08 0 0 1 .08 1.52 1.09 1.09 0 0 1-.81.36 1.07 1.07 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 0 1-.07-1.53 1.07 1.07 0 0 1 1.47-.04zm-1.67-9a1.3 1.3 0 0 1-.48-.25l-.08-.07a1.11 1.11 0 0 1-.35-.8zm-2.55 25.56a1.09 1.09 0 0 1 .08 1.53 1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07zm-8.85-25.49-.08-.07a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07l.08.07a1.08 1.08 0 1 1-1.45 1.6zm2.3 10.83a1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .02 1.58zm.62 9.3.08.07a1.09 1.09 0 0 1 .08 1.53 1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.47.01zm5.16-5.54A1.09 1.09 0 0 1 212 391a1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 1 1 1.45-1.6zm-.78-10.9a1.09 1.09 0 0 1 .08 1.53 1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07zm-.7-9.38a1.05 1.05 0 0 1-.8.36 1 1 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 0 1-.08-1.53 1.18 1.18 0 0 1 .47-.3l1.34 1.66a1.83 1.83 0 0 1-.18.21zm-7.53-6.81.15-.13a3.78 3.78 0 0 1 1.56.24 1.08 1.08 0 0 1-.83 1.77 1.06 1.06 0 0 1-.72-.28l-.08-.07a1.09 1.09 0 0 1-.13-1.48zm-5.12 5.71a1.08 1.08 0 0 1 1.52-.07l.08.07a1.08 1.08 0 0 1 .08 1.53 1.09 1.09 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.09 1.09 0 0 1-.07-1.53zm-5.08 5.62a1.08 1.08 0 0 1 1.53-.08l.08.07a1.09 1.09 0 0 1 .08 1.53 1.11 1.11 0 0 1-.81.35 1.07 1.07 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 0 1-.08-1.57zm-5.07 5.61a1.08 1.08 0 0 1 1.53-.08l.08.07a1.09 1.09 0 0 1 .07 1.53 1.09 1.09 0 0 1-1.52.08l-.08-.08a1.07 1.07 0 0 1-.08-1.57zm-3.91-4.28a1 1 0 0 1-.26.51 1.05 1.05 0 0 1-.8.36h-.17zm-1.16 9.89a1.08 1.08 0 0 1 1.52-.08l.08.07a1.08 1.08 0 0 1-.72 1.89 1.13 1.13 0 0 1-.73-.28l-.08-.08a1.08 1.08 0 0 1-.07-1.57zm-3.47 5.61a1.08 1.08 0 0 1 .07 1.52 1.05 1.05 0 0 1-.8.36 1 1 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 0 1 1.45-1.61zm-2.62-10.47 1.12-.78a1.11 1.11 0 0 1 .64.27l.08.08a1.08 1.08 0 0 1-.72 1.88 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.1 1.1 0 0 1-.31-1.15zm-4.84 5.18a1.09 1.09 0 0 1 1.53-.08l.08.08a1.08 1.08 0 0 1 .08 1.52 1.09 1.09 0 0 1-.81.36 1.07 1.07 0 0 1-.72-.28l-.08-.07a1.09 1.09 0 0 1-.08-1.58zm-10.07 12.75a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .08 1.53 1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28zm.78 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28zm.77 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .08 1.53 1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28zm.77 10.9a1.08 1.08 0 0 1 1.46-1.6l.08.07a1.08 1.08 0 0 1-1.46 1.6zm2.39 10.9a1.11 1.11 0 0 1-.81.35 1.07 1.07 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .08 1.48zm.45-49.14-.08-.07a1.08 1.08 0 1 1 1.44-1.6l.08.07a1.08 1.08 0 0 1-.72 1.88 1 1 0 0 1-.72-.33zm.69 10.83a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .08 1.52 1.09 1.09 0 0 1-.81.36 1.07 1.07 0 0 1-.72-.28zm.77 10.9a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07l.08.07a1.08 1.08 0 0 1-.72 1.88 1.08 1.08 0 0 1-.73-.28zM169 425a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 1 1-1.45 1.6zm.77 10.9a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07l.08.07a1.08 1.08 0 0 1 .08 1.53 1.09 1.09 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28zm2.38 10.9a1.08 1.08 0 0 1-.8.35 1.06 1.06 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .11 1.48zm.45-49.14-.08-.07a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.08l.08.08a1.08 1.08 0 0 1-.72 1.88 1.08 1.08 0 0 1-.69-.33zm.7 10.83a1.08 1.08 0 1 1 1.45-1.61l.08.08a1.08 1.08 0 0 1 .07 1.52 1.07 1.07 0 0 1-1.52.08zm.77 10.9a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07l.08.07a1.08 1.08 0 0 1-.72 1.88 1.08 1.08 0 0 1-.73-.28zm.78 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .07 1.52 1.05 1.05 0 0 1-.8.36 1 1 0 0 1-.72-.28zm.77 10.9a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07l.08.07a1.07 1.07 0 0 1 .08 1.52 1.08 1.08 0 0 1-1.53.08zM178 452a1.07 1.07 0 0 1-1.52.08l-.08-.07a1.08 1.08 0 0 1 1.45-1.61l.08.08A1.08 1.08 0 0 1 178 452zm.37-49.2a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.08l.08.08a1.08 1.08 0 1 1-1.45 1.6zm.78 10.9a1.08 1.08 0 0 1 1.45-1.61l.08.08a1.08 1.08 0 0 1 .07 1.52 1.05 1.05 0 0 1-.8.36 1 1 0 0 1-.72-.28zm.77 10.9a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.08l.08.08a1.08 1.08 0 1 1-1.45 1.6zm.78 10.9a1.08 1.08 0 1 1 1.45-1.61l.08.08a1.08 1.08 0 0 1 .07 1.52 1.05 1.05 0 0 1-.8.36 1 1 0 0 1-.72-.28zm2.38 10.89a1.07 1.07 0 0 1-.8.36 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.08 1.08 0 0 1 1.45-1.61l.08.07a1.09 1.09 0 0 1 .12 1.56zm.37-49.21a1.07 1.07 0 0 1-.08-1.52 1.09 1.09 0 0 1 1.53-.08l.08.07a1.09 1.09 0 0 1 .07 1.53 1.05 1.05 0 0 1-.8.36 1.09 1.09 0 0 1-.72-.28zm.77 10.9a1.08 1.08 0 0 1 1.45-1.6l.08.08a1.08 1.08 0 0 1-.72 1.88 1.13 1.13 0 0 1-.73-.28zM185 419a1.07 1.07 0 0 1-.08-1.52 1.09 1.09 0 0 1 1.53-.08l.08.08a1.08 1.08 0 1 1-1.45 1.6zm.77 10.9a1.08 1.08 0 0 1 1.45-1.6l.08.08a1.08 1.08 0 0 1-.72 1.88 1.13 1.13 0 0 1-.73-.28zm2.38 10.9a1.05 1.05 0 0 1-.8.36 1.09 1.09 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 0 1 1.44-1.61l.08.07a1.08 1.08 0 0 1 .12 1.54zm.37-49.21A1.08 1.08 0 1 1 190 390l.08.07a1.09 1.09 0 0 1 .08 1.53 1.1 1.1 0 0 1-1.53.08zm.77 10.9a1.08 1.08 0 0 1 1.46-1.6l.08.07a1.09 1.09 0 0 1 .07 1.53 1.06 1.06 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28zm.78 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .08 1.53 1.08 1.08 0 0 1-.81.35 1.11 1.11 0 0 1-.72-.27zm.77 10.9a1.08 1.08 0 0 1 1.46-1.6l.08.07a1.09 1.09 0 0 1 .07 1.53 1.07 1.07 0 0 1-.8.36 1.13 1.13 0 0 1-.73-.28zm2.39 10.9a1.1 1.1 0 0 1-1.53.08l-.08-.08a1.08 1.08 0 0 1-.08-1.52 1.09 1.09 0 0 1 1.53-.08l.08.07a1.09 1.09 0 0 1 .12 1.54zm.36-49.21a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .08 1.53 1.09 1.09 0 0 1-.8.35 1 1 0 0 1-.72-.28zm.78 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 1 1-1.45 1.6zm.77 10.9a1.08 1.08 0 0 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .08 1.53 1.09 1.09 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28zm.78 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1.06 1.06 0 0 1-.72-.28zm2.38 10.9a1.09 1.09 0 0 1-.8.35 1.08 1.08 0 0 1-.72-.27l-.08-.08a1.08 1.08 0 1 1 1.44-1.6l.08.07a1.08 1.08 0 0 1 .12 1.54zm.37-49.21a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 1 1-1.45 1.6zm.77 10.9a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07l.08.07a1.08 1.08 0 0 1 .08 1.53 1.09 1.09 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28zm.78 10.9a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28zm.77 10.9a1.09 1.09 0 0 1-.07-1.53 1.08 1.08 0 0 1 1.52-.07l.08.07a1.08 1.08 0 0 1 .08 1.53 1.11 1.11 0 0 1-.8.35 1.08 1.08 0 0 1-.73-.28zm2.39 10.9a1.11 1.11 0 0 1-.81.35 1.06 1.06 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.1 1.1 0 0 1 .12 1.56zm2.69-16.51a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.09 1.09 0 0 1 .07 1.53 1.08 1.08 0 0 1-.8.35 1 1 0 0 1-.72-.28zm2.38 10.89a1.07 1.07 0 0 1-.8.36 1.08 1.08 0 0 1-.73-.28l-.08-.07a1.08 1.08 0 1 1 1.45-1.6l.08.07a1.08 1.08 0 0 1 .12 1.53zm5.07-5.61a1.05 1.05 0 0 1-.8.36 1 1 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 0 1 1.44-1.61l.08.08a1.07 1.07 0 0 1 .12 1.53zm5.08-5.61a1.09 1.09 0 0 1-.81.36 1.07 1.07 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 1 1 1.45-1.61l.08.08a1.08 1.08 0 0 1 .12 1.53zm3.47-5.6a1.08 1.08 0 0 1 1.44-1.61l.08.07a1.08 1.08 0 0 1 .08 1.53 1.07 1.07 0 0 1-.8.36 1 1 0 0 1-.72-.28zm2.38 10.89a1.09 1.09 0 0 1-.81.36 1.07 1.07 0 0 1-.72-.28l-.08-.07a1.08 1.08 0 0 1 1.45-1.61l.08.07a1.09 1.09 0 0 1 .12 1.54zm2.69-16.5a1.08 1.08 0 1 1 1.45-1.61l.08.07a1.08 1.08 0 1 1-1.45 1.61zm2.38 10.89a1.07 1.07 0 0 1-.8.36 1.13 1.13 0 0 1-.73-.28l-.08-.07a1.08 1.08 0 0 1 1.45-1.61l.08.07a1.09 1.09 0 0 1 .12 1.54zm5.07-5.61a1.09 1.09 0 0 1-1.52.08l-.08-.08a1.08 1.08 0 1 1 1.44-1.6l.08.07a1.08 1.08 0 0 1 .12 1.54z" fill="#8e5cff"></path><path d="M208.78 367.63a1.08 1.08 0 0 0 .08 1.53l.08.07a1 1 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36 1.83 1.83 0 0 0 .13-.16l-1.34-1.66a1.18 1.18 0 0 0-.47.3zm6 6.89a1.3 1.3 0 0 0 .48.25l-.91-1.12a1.11 1.11 0 0 0 .35.8zm-11.69-10.58a1.06 1.06 0 0 0 .72.28 1.08 1.08 0 0 0 .83-1.77 3.78 3.78 0 0 0-1.56-.24l-.15.13a1.09 1.09 0 0 0 .08 1.53zm12.39 21.41.08.07a1.07 1.07 0 0 0 .72.28 1.09 1.09 0 0 0 .81-.36 1.08 1.08 0 0 0-.08-1.52l-.08-.07a1.07 1.07 0 0 0-1.52.07 1.08 1.08 0 0 0 .07 1.53zm-5.92-6.82a1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35 1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.52.07zm11.85 12.18a1.1 1.1 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36 1.08 1.08 0 0 0-.07-1.52l-.08-.08a1.09 1.09 0 0 0-1.53.08 1.08 1.08 0 0 0 .08 1.52zM238.8 405a1.07 1.07 0 0 0 .08 1.52l.08.08a1.09 1.09 0 0 0 1.52-.08.93.93 0 0 0 .19-.31l-1.25-1.55a1.07 1.07 0 0 0-.62.34zm-10.01-9.08a1.1 1.1 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.61l.08.07a1.1 1.1 0 0 0 .72.28 1.09 1.09 0 0 0 .81-.36zm5.68 3.69a1.08 1.08 0 1 0-1.44 1.6l.08.08a1.08 1.08 0 0 0 1.44-1.61zM198 369.55a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.35 1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53zm7.39 5.22a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.35zm10.79 19.95a1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.08 1.08 0 0 0 .73-1.88l-.08-.07a1.09 1.09 0 0 0-1.53.07zm-15.87-14.34a1.08 1.08 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 1.52-.07zm5.69 3.69a1.08 1.08 0 1 0-1.45 1.6l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35 1.09 1.09 0 0 0-.07-1.53zm23.4 21.15a1.08 1.08 0 0 0-1.45 1.61l.08.07a1.13 1.13 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36 1.09 1.09 0 0 0-.08-1.53zm-5.69-3.69a1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.44 1.61l.08.07a1 1 0 0 0 .72.28 1.07 1.07 0 0 0 .8-.36zm-30.77-26.37a1.07 1.07 0 0 0 .72.28 1.11 1.11 0 0 0 .81-.35 1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6zm46.46 40.99.68-.58a1 1 0 0 0-.51.31 1 1 0 0 0-.17.27zm-29.07-26.72a1.08 1.08 0 0 0 .08 1.53l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35 1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.09 1.09 0 0 0-1.53.07zm24.28 23.03a1.08 1.08 0 0 0 .72-1.88l-.08-.07a1.09 1.09 0 0 0-1.53.08 1.08 1.08 0 0 0 .08 1.52l.08.08a1.12 1.12 0 0 0 .73.27zm-46.74-31.68a1.09 1.09 0 0 0 1.52-.08 1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 0 0-1.53.08 1.07 1.07 0 0 0 .08 1.52zM205.26 395a1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35 1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.52.07zm-4.17-3.72a1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.35zm23.24 19.55a1.08 1.08 0 0 0-1.45 1.61l.08.07a1.07 1.07 0 0 0 .72.28 1.08 1.08 0 0 0 .73-1.89zm-13.22-10.5a1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35 1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.52.07zm18.42 17.75a1.05 1.05 0 0 0 .8-.36 1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 0 0-1.45 1.61l.08.07a1.1 1.1 0 0 0 .72.28zm-45.99-42.67a1 1 0 0 0 .26-.51l-1.23.85h.17a1.05 1.05 0 0 0 .8-.34zm34.94 30.13a1.08 1.08 0 1 0-1.45 1.61l.08.07a1.07 1.07 0 0 0 .72.28 1.09 1.09 0 0 0 .81-.36 1.08 1.08 0 0 0-.08-1.52zM195.24 386a1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.45 1.6l.09.07a1 1 0 0 0 .72.28 1.09 1.09 0 0 0 .8-.35zm29.22 37.69a1.08 1.08 0 0 0 .72-1.88l-.08-.08a1.08 1.08 0 0 0-1.52.08 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28zM196 396.89a1.08 1.08 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 1.52-.07zm-5.83-5.29a1.09 1.09 0 0 0-.08-1.53L190 390a1.08 1.08 0 1 0-1.45 1.6l.08.08a1.1 1.1 0 0 0 1.53-.08zm29.16 24.92-.08-.08a1.08 1.08 0 0 0-1.44 1.61l.08.07a1 1 0 0 0 .67.27h.05a1.07 1.07 0 0 0 .8-.36 1.06 1.06 0 0 0 .27-.61 1.07 1.07 0 0 0-.35-.9zm-11.62-9.05a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35zm5.69 3.68a1.08 1.08 0 0 0-1.44 1.61l.08.07a1 1 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36 1.07 1.07 0 0 0-.08-1.52zm-11.54-8.97a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35zm-24.92-21.08a1.08 1.08 0 0 0 .73.28 1.08 1.08 0 0 0 .72-1.88l-.08-.08a1.11 1.11 0 0 0-.64-.27l-1.12.78a1.1 1.1 0 0 0 .31 1.1zm5.85 5.29a1.13 1.13 0 0 0 .73.28 1.08 1.08 0 0 0 .72-1.89l-.08-.07a1.08 1.08 0 0 0-1.45 1.6zm36.59 42.91a1.09 1.09 0 0 0 .81-.36 1.08 1.08 0 0 0-.08-1.52l-.08-.08a1.08 1.08 0 1 0-1.45 1.61l.08.07a1.07 1.07 0 0 0 .72.28zm-28.44-26.8a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 0 0-1.46 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.06 1.06 0 0 0 .8-.35zm-13.38-12.1a1.09 1.09 0 0 0 .08 1.53l.08.07a1 1 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36 1.08 1.08 0 0 0-.07-1.52l-.08-.08a1.09 1.09 0 0 0-1.53.08zm7.53 6.81a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.09 1.09 0 0 0-1.53.08 1.07 1.07 0 0 0 .08 1.52l.08.08a1.09 1.09 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36zm-13.22-10.5a1.07 1.07 0 0 0 .72.28 1.09 1.09 0 0 0 .81-.36 1.08 1.08 0 0 0-.08-1.52l-.08-.08a1.08 1.08 0 0 0-1.45 1.61zm24.92 21.08a1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.35zm11.54 8.98a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.08 1.08 0 0 0 .72-1.88zm-5.69-3.69a1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35zm10.01 9.05a1.09 1.09 0 0 0 0 1.4l.12.13.08.07a1.08 1.08 0 1 0 1.45-1.6l-.07-.07a1.1 1.1 0 0 0-1.58.07zm1.66 12.78A1.08 1.08 0 0 0 215 433a1.08 1.08 0 1 0-1.44 1.6l.08.07a1 1 0 0 0 .67.24zm-11.05-12.53a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.06 1.06 0 0 0 .72.28 1.11 1.11 0 0 0 .81-.35 1.1 1.1 0 0 0-.08-1.53zm-29.09-24.85a1.07 1.07 0 0 0-.08-1.52l-.08-.08a1.08 1.08 0 0 0-1.52.08 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36zm-5.85-5.29a1.07 1.07 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 1 0-1.44 1.6l.08.07a1 1 0 0 0 .72.28 1.07 1.07 0 0 0 .8-.36zm29.24 26.45a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.06 1.06 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35zm-11.69-10.58a1.08 1.08 0 0 0-.08-1.52l-.08-.08a1.08 1.08 0 0 0-1.45 1.6l.08.08a1.13 1.13 0 0 0 .73.28 1.08 1.08 0 0 0 .8-.36zm5.85 5.29a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.08a1.11 1.11 0 0 0 .72.27 1.08 1.08 0 0 0 .81-.35zM180 402.82a1.08 1.08 0 0 0-.08-1.52l-.08-.08a1.08 1.08 0 0 0-1.52.08 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36zM207.41 428a1.07 1.07 0 0 0 .25 1.26l.08.07a1 1 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36 1.07 1.07 0 0 0-.08-1.52l-.08-.07a1 1 0 0 0-1-.23 1 1 0 0 0-.5.31 1.06 1.06 0 0 0-.19.26zm-3.41 5.28a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.08 1.08 0 0 0 .72-1.88zm-5.82-5.28a1.08 1.08 0 1 0-1.44 1.6l.08.08a1.08 1.08 0 0 0 .72.27 1.09 1.09 0 0 0 .8-.35 1.08 1.08 0 0 0-.08-1.53zm-11.54-9a1.08 1.08 0 0 0-.07-1.52l-.08-.08a1.09 1.09 0 0 0-1.53.08A1.07 1.07 0 0 0 185 419l.08.08a1.09 1.09 0 0 0 .72.28 1.07 1.07 0 0 0 .84-.36zm-17.54-15.86a1.08 1.08 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.07 1.07 0 0 0 .72.28 1.09 1.09 0 0 0 .81-.36zm-5.85-5.28a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35zm11.69 10.57a1.08 1.08 0 0 0-.07-1.52l-.08-.08a1.08 1.08 0 1 0-1.45 1.61l.08.07a1.07 1.07 0 0 0 1.52-.08zm17.55 15.87a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 0 0-1.46 1.6l.08.08a1.13 1.13 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36zm-11.7-10.58a1.08 1.08 0 0 0-.07-1.52l-.08-.08a1.08 1.08 0 0 0-1.45 1.61l.08.07a1 1 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36zm28.45 26.8a1.08 1.08 0 0 0 .72-1.88l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28zm-27.67-15.9a1.08 1.08 0 0 0-.08-1.52l-.08-.08a1.08 1.08 0 0 0-1.52.08 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 1.53-.08zm21.71 19.64a1.08 1.08 0 0 0 .08 1.52l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35 1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 0 0-1.53.08zm-4.28-5.37a1.08 1.08 0 1 0-1.45 1.6l.08.08a1.1 1.1 0 0 0 1.53-.08A1.09 1.09 0 0 0 199 439zm-23.28-19.56a1.07 1.07 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36zm-23.4-21.15a1.07 1.07 0 0 0 0-1.44l-1.77 1.26a.79.79 0 0 0 .17.2l.08.07a1.06 1.06 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.37zm5.85 5.29a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 0 0-1.53.08 1.07 1.07 0 0 0 .08 1.52l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35zm5.83 5.29a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35zm29.11 24.84a1.09 1.09 0 0 0-1.53.08 1.08 1.08 0 0 0 .08 1.52l.08.08a1.1 1.1 0 0 0 1.53-.08 1.09 1.09 0 0 0-.08-1.53zm-5.69-3.69a1.08 1.08 0 0 0-.08-1.52l-.08-.08a1.08 1.08 0 0 0-1.45 1.6l.08.08a1.13 1.13 0 0 0 .73.28 1.08 1.08 0 0 0 .8-.36zM169.87 414a1.07 1.07 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36zm.77 11a1.08 1.08 0 0 0-.07-1.53l-.08-.07A1.08 1.08 0 1 0 169 425l.08.07a1.08 1.08 0 0 0 1.52-.07zm-23.39-21.21a1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.45 1.6l.08.08a1.12 1.12 0 0 0 .73.27 1.06 1.06 0 0 0 .8-.35zm5.85 5.29a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.35zm34.9 30.13a1.08 1.08 0 0 0-1.44 1.61l.08.07a1.09 1.09 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36 1.08 1.08 0 0 0-.08-1.53zm10.21 10.66a1.08 1.08 0 0 0 .07 1.52l.08.08 1.6-1.38a.82.82 0 0 0-.2-.26l-.08-.07a1.07 1.07 0 0 0-1.47.11zm-4.21-5.3-.08-.07a1.08 1.08 0 0 0-1.44 1.6l.08.08a1.09 1.09 0 0 0 .72.28 1.1 1.1 0 0 0 .8-.36 1.08 1.08 0 0 0-.08-1.53zm-35-30.2a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35zm5.8 5.29a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35zm11.69 10.57a1.08 1.08 0 0 0-.07-1.52l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1 1 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36zm5.85 5.29a1.08 1.08 0 0 0-.07-1.52l-.08-.08a1.08 1.08 0 1 0-1.45 1.61l.08.07a1 1 0 0 0 .72.28 1.05 1.05 0 0 0 .8-.36zm5.82 16.55a1.08 1.08 0 0 0 .73-1.89l-.08-.07a1.08 1.08 0 1 0-1.45 1.61l.08.07a1.12 1.12 0 0 0 .72.28zm4.97 3.41a1.11 1.11 0 0 0-.27.81l1.31-1.14a1.08 1.08 0 0 0-1.04.33zm-21.71-19.63a1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.35zm-5.85-5.29a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 0 0-1.46 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.09 1.09 0 0 0 .8-.35zm-5.85-5.29a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 0 0-1.53.08 1.07 1.07 0 0 0 .08 1.52l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35zM148 414.69a1.08 1.08 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.08a1.11 1.11 0 0 0 .72.27 1 1 0 0 0 .8-.35zm35 30.13a1.08 1.08 0 0 0-1.45 1.61l.08.07a1.08 1.08 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36 1.09 1.09 0 0 0-.08-1.53zm-5.73-3.69a1.07 1.07 0 0 0-.08-1.52l-.08-.07a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 1.53-.08zm-35.09-31.73a1.09 1.09 0 0 0-.08-1.53l-.08-.07a1.09 1.09 0 0 0-1.53.08 1.08 1.08 0 0 0 .08 1.52l.08.08a1.12 1.12 0 0 0 .72.28 1.09 1.09 0 0 0 .81-.36zm11.69 10.6a1.09 1.09 0 0 0-.07-1.53l-.08-.07a1.08 1.08 0 1 0-1.45 1.6l.08.07a1 1 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35zM172 445.15a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.06 1.06 0 0 0 .72.28 1.08 1.08 0 0 0 .8-.35 1.09 1.09 0 0 0-.07-1.53zm-11.66-10.58a1.08 1.08 0 0 0-1.52.07 1.09 1.09 0 0 0 .07 1.53l.08.07a1.08 1.08 0 0 0 .73.28 1.11 1.11 0 0 0 .8-.35 1.09 1.09 0 0 0-.08-1.53zM137 413.49l-.08-.08a1.08 1.08 0 0 0-1.08-.21c.31.68.63 1.35 1 2a.9.9 0 0 0 .27-.21 1.08 1.08 0 0 0-.11-1.5zm46.09 44.19a1.05 1.05 0 0 0 .8-.36 1.08 1.08 0 0 0-.08-1.53l-.08-.07a1.08 1.08 0 0 0-1.44 1.61l.08.07a1 1 0 0 0 .72.28zm-28.6-28.4a1.08 1.08 0 0 0-1.45 1.6l.08.07a1.08 1.08 0 0 0 .73.28 1.08 1.08 0 0 0 .72-1.88zm11.7 10.58a1.08 1.08 0 1 0-1.45 1.6l.08.07a1.07 1.07 0 0 0 .72.28 1.11 1.11 0 0 0 .81-.35 1.09 1.09 0 0 0-.08-1.53zM148.64 424a1.08 1.08 0 0 0-1.45 1.6l.08.08a1.13 1.13 0 0 0 .73.28 1.07 1.07 0 0 0 .8-.36 1.08 1.08 0 0 0-.08-1.53zm-5.85-5.3a1.08 1.08 0 0 0-1.45 1.6l.09.08a1.09 1.09 0 0 0 .72.28 1.08 1.08 0 0 0 .72-1.88zm35.1 31.73a1.08 1.08 0 0 0-1.45 1.61l.08.07A1.07 1.07 0 0 0 178 452a1.08 1.08 0 0 0-.07-1.52zm-10.89.4-.08-.07a1.08 1.08 0 0 0-1.52.07c.58.48 1.17.95 1.76 1.41a1.07 1.07 0 0 0-.16-1.41zm5.81 5.22a1 1 0 0 0-.86-.27l1.27.89a1.05 1.05 0 0 0-.33-.55zm-11.61-10.51-.08-.07a1.09 1.09 0 0 0-1.53.07l-.09.13 1.64 1.51a.69.69 0 0 0 .13-.11 1.09 1.09 0 0 0-.07-1.53zm-5.85-5.29-.08-.07a1.07 1.07 0 0 0-1.31-.1l1.52 1.62a1.09 1.09 0 0 0-.13-1.45z" fill="#dfc4ff"></path></svg>
            </div>
            <div className="bookacar">
                <div className="bookaCarLink">
                    <a href="">
                        Book a car
                    </a>
                </div>
                <div className="bookaCarPara">
                    <p>
                        Down the street or across the country, find the perfect vehicle for your next adventure.
                    </p>
                </div>
            </div>
            <div className="becomeahost">
                <div className="becomeahostLink">
                    <a href="">
                        Become a host
                    </a>
                </div>
                <div className="becomeahostPara">
                    <p>
                        Accelerate your entrepreneurship and start building a small car sharing business on Turo.
                    </p>
                </div>
            </div>
        </div>
    )
}

function AskQuestion() {
    const { Panel } = Collapse;
    return (
        <div className="container">
            <div className="askQuestion-content">
                <div className="askheading">
                    <h3>
                        Frequently asked questions
                    </h3>
                </div>
                <div className="accordion-questions">
                    <Collapse accordion>
                        <Panel header="What do I need to book a car on Turo?" key="1">
                            <p>To book a car on Turo, you must create a Turo account, be 18 years old or older in the US, 21 years old or older in the UK, 23 years old or older in Canada, have a valid driver’s license, and get approved to drive on Turo. When you’re booking your first trip, you’ll go through a quick approval process by entering your driver’s license and some other information. In most cases, you’ll get approved immediately, and you’ll be set for all future road trips, day trips, and business trips!</p>
                        </Panel>
                        <Panel header="Do I need my own insurance?" key="2">
                            <p>No, you don’t need personal insurance coverage to book a car on Turo.

                                In the US, any personal insurance you may have that covers damage to the host’s vehicle would kick in before your Turo protection plan, except in limited situations for trips booked in Maryland. When booking a car in the US, you’ll choose between three protection plans — Premier, Standard, or Minimum — to get the level of coverage that’s right for you. With each plan, you’re covered with third-party automobile liability insurance provided under a policy issued to Turo by Travelers Excess and Surplus Lines Company — $750,000 for the Premier plan.*

                                In New York state, you’ll also choose between Premier, Standard, or Minimum. With each plan, you’re covered with liability insurance of $1,250,000.* Protection plans for New York trips also include access to roadside assistance, priority phone support, and 24/7 customer assistance.

                                When booking a car in Canada, you’ll choose between three protection plans — Premier, Standard, or Minimum — and with each plan, you’re covered with liability insurance purchased from Intact Financial Corporation in Alberta, Nova Scotia, Ontario, and Quebec, and Insurance Corporation of British Columbia (ICBC) in British Columbia — up to $2,000,000 for all plans.**

                                When booking a car in the United Kingdom, you’ll also choose between the Premier, Standard, and Minimum protection plans. Each plan includes different limits of financial responsibility for physical damage, but all three plans include up to £20,000,000 coverage under a third-party automobile liability insurance policy provided by Aioi Nissay Dowa Insurance UK Ltd. via Turo broker Aon UK Ltd.**</p>
                        </Panel>
                        <Panel header="Can other people drive a car that I booked?" key="3">
                            <p>Yes, multiple guests can drive the car you book on Turo, as long as they are all approved to drive. The primary driver (whoever booked the car) can add additional drivers with no fees or additional charges. Only the primary driver can request to add drivers; Turo hosts cannot do it for you. We encourage you to request to add additional drivers before your trip starts, though guests in the US and Canada can request to add a driver while a trip is in progress.

                                To speed up the process, have your additional driver create a Turo account and get approved to drive before you request to add them. All drivers must have a valid driver’s license and meet the age requirements for the car you’ve booked. You can request to add drivers via the “Trips” tab in the Turo app without additional driver charges or extra costs.</p>
                        </Panel>
                        <Panel header="What is the cancellation policy on Turo?" key="4">
                            <p>You can cancel and get a full refund up to 24 hours before your trip starts. If you book a trip with less than 24 hours’ notice, you have one hour after booking to cancel free of charge. If you cancel after the free cancellation period ends, you will be charged a small cancellation fee.

                                In the rare event a host cancels, you’ll be notified immediately so you can book another car, or we’ll help you find one. Your refund can be temporarily held to expedite rebooking, or the funds can be returned to your bank account — your choice.</p>
                        </Panel>
                    </Collapse>
                    <Collapse accordion>
                        <Panel header="What happens if I have an accident?" key="1">
                            <p>If there’s an emergency or an issue with the car, call our emergency roadside assistance provider, available 24/7. We’ll make sure you’re safe, then help you get back on your way.</p>
                        </Panel>
                        <Panel header="Can I get my car delivered to me?" key="2">
                            <p>Yes, many hosts offer delivery to travel hubs like airports, train stations, and hotels, or to custom delivery locations. There are cars available on Turo at convenient locations near hundreds of airports. Skip the rental counter and have your car delivered for pickup and return at your hotel or vacation rental, or nearby location, to save time and hassle on your weekend getaway or family vacation. Some hosts offer free delivery, while others set their own delivery fee.</p>
                        </Panel>
                        <Panel header="How do I get discounts when booking a car?" key="3">
                            <p>Many Turo hosts offer discounted prices for weekly and monthly trips, as well as “early bird” discounts for trips booked a week or more in advance. Get the best deals and lowest rates possible on everything from cars to SUVs by booking longer trips, at least a week in advance.*

                                On your Account page, make sure you’ve checked the box to receive email notifications, and enable push notifications from the Turo app in your phone settings — we’ll send you occasional promo codes, discounts, and deals!</p>
                        </Panel>
                        <Panel header="What are the cleaning and safety policies on Turo?" key="4">
                            <p>Under the enhanced cleaning policy, hosts are required to clean and disinfect their vehicles thoroughly before every trip, so you can feel safe and comfortable behind the wheel. Turo hosts have access to training materials on enhanced safety measures and cleaning practices to help prevent the spread of COVID-19 or other viruses.</p>
                        </Panel>
                    </Collapse>

                </div>
            </div>
        </div>
    )
}


function AboutPara() {
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="aboutcontent">
                        <div className="paragrapg">
                            <p>
                                * Any personal insurance you may have that covers damage to the host’s vehicle would kick in before your protection plan, except in limited situations for trips booked in Maryland, but this protects your own wallet. Liability insurance is provided under a policy issued to Turo by Travelers Excess and Surplus Lines Company. Terms, conditions, and exclusions apply. The policy does not provide coverage for damage to a host’s vehicle.
                            </p>
                        </div>
                        <div className="paragrapg">
                            <p>
                                For questions or information about the third party liability insurance that is included in protection plans in the US, consumers in Maryland and the licensed states listed <a href="">here</a> may contact Turo Insurance Agency at (415) 508-0283 or claims@turo.agency. For questions about how damage to a host’s vehicle is handled, visit the Turo Support site.
                            </p>
                        </div>
                        <div className="paragrapg">
                            <p>
                                When a trip is booked in the state of Washington, physical damage to the host’s vehicle is covered by insurance purchased by Turo, but the Turo insurance does not change the contractual responsibilities of hosts or guests with respect to physical damage to a host’s vehicle.
                            </p>
                        </div>
                        <div className="paragrapg">
                            <p>
                                ** Terms, conditions, and exclusions apply.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}



export { PerfectCar, LocationCards, Fuelday, TypesofCars, TopHost, BookaCar, AskQuestion, AboutPara }