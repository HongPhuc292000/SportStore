import React from 'react';
import Slider from 'react-slick';
import clsx from 'clsx';

import stylesBanner from './Banner.module.scss';
import bigBanner from 'assets/images/big-banner.png';
import smallBanner from 'assets/images/small-banner.png';
import bottomBanner from 'assets/images/bottom-banner.png';

let settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <button type="button" className="slick-prev">
      {/* <img src={prevIcon} alt="prev" className="slick-arrow-icon" /> */}
    </button>
  ),
  nextArrow: (
    <button type="button" className="slick-next">
      {/* <img src={nextIcon} alt="next" className="slick-arrow-icon" /> */}
    </button>
  ),
};

const bannerList = [bigBanner, bigBanner, bigBanner];

function Banner() {
  return (
    <div className="container">
      <div className={clsx(stylesBanner.topBanner, 'row sm-gutter')}>
        <div className={clsx(stylesBanner.bigBannerWrap, 'col c-8')}>
          <Slider {...settings}>
            {bannerList.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  alt="banner img"
                  className={clsx(stylesBanner.bannerItem)}
                />
              );
            })}
          </Slider>
        </div>
        <div className={clsx(stylesBanner.smallBannerWrap, 'col c-4')}>
          <img src={smallBanner} alt="small banner" className={clsx(stylesBanner.bannerItem)} />
        </div>
      </div>
      <div className="row sm-gutter">
        <div className={clsx(stylesBanner.bottomBannerItem, 'col c-4')}>
          <div>
            <img
              src={bottomBanner}
              alt="bottom banner"
              className={clsx(stylesBanner.bottomBannerImg)}
            />
          </div>
        </div>
        <div className={clsx(stylesBanner.bottomBannerItem, 'col c-4')}>
          <div>
            <img
              src={bottomBanner}
              alt="bottom banner"
              className={clsx(stylesBanner.bottomBannerImg)}
            />
          </div>
        </div>
        <div className={clsx(stylesBanner.bottomBannerItem, 'col c-4')}>
          <div>
            <img
              src={bottomBanner}
              alt="bottom banner"
              className={clsx(stylesBanner.bottomBannerImg)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
