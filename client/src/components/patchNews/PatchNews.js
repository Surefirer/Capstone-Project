import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import newsImg from "../../assets/images/news.png";

export default class PatchNews extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 932,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 625,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="patchCardWrapper">
        <Slider {...settings}>
          {this.props.patchList.map((patch) => (
            <a rel="noopener noreferrer" target="_blank" href={patch.forumUrl}>
              <div className="patchCard">
                <div className="news__cover">
                  <img src={patch.cover} alt="" />
                </div>
                <div className="newsSub">
                  <h2>{patch.date}</h2>
                  <h3 className="news__pn">{patch.name}</h3>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    );
  }
}
