import React from 'react';
import './index.scss';
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import Main from "../../pages/recommend";

class MySwiper extends React.Component {
    componentDidMount() {
        setTimeout(() => {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    observer: true,
                    observeParents: true,
                    autoplay: 1000,
                    loop: true
                })
            }
            , 1000)
    }

    render() {
        let {swiperList} = this.props;
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        swiperList.map((item, index) =>
                            <div key={index} className="swiper-slide">
                                <img src={item.image_url}/>
                            </div>
                        )
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}

export default MySwiper;