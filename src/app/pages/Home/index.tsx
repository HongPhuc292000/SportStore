import React from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';

import Product from 'app/components/Product';
import styleHome from './Home.module.scss';

import productImg from 'assets/images/product.png';
import prevIcon from 'assets/images/prev-icon.svg';
import nextIcon from 'assets/images/next-icon.svg';
import { Link } from 'react-router-dom';
import Banner from './components/Banner';

let settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: (
    <button type="button" className="slick-prev">
      <img src={prevIcon} alt="prev" className="slick-arrow-icon" />
    </button>
  ),
  nextArrow: (
    <button type="button" className="slick-next">
      <img src={nextIcon} alt="next" className="slick-arrow-icon" />
    </button>
  ),
};

const productList = [
  {
    name: 'Giầy thể thao cao cấp',
    image: productImg,
    rating: 5,
    code: 'TSXJSX',
    defaultPrice: 660000,
    salesPrice: 220000,
    salesPercent: 7,
    status: 'ENABLE',
  },
  {
    name: 'Giầy thể thao cao cấp',
    image: productImg,
    rating: 5,
    code: 'TSXJSX',
    defaultPrice: 660000,
    salesPrice: 220000,
    salesPercent: 7,
    status: 'ENABLE',
  },
  {
    name: 'Giầy thể thao cao cấp',
    image: productImg,
    rating: 5,
    code: 'TSXJSX',
    defaultPrice: 660000,
    salesPrice: 220000,
    salesPercent: 7,
    status: 'ENABLE',
  },
  {
    name: 'Giầy thể thao cao cấp',
    image: productImg,
    rating: 5,
    code: 'TSXJSX',
    defaultPrice: 660000,
    salesPrice: 220000,
    salesPercent: 7,
    status: 'ENABLE',
  },
  {
    name: 'Giầy thể thao cao cấp',
    image: productImg,
    rating: 5,
    code: 'TSXJSX',
    defaultPrice: 660000,
    salesPrice: 220000,
    salesPercent: 7,
    status: 'ENABLE',
  },
];

function Home() {
  return (
    <div className={clsx(styleHome.home)}>
      <div className={clsx(styleHome.bannerWrap)}>
        <Banner />
      </div>
      <div className="container">
        <div className={clsx(styleHome.contentContainer)}>
          <div className={clsx(styleHome.listProductHeader, 'd-flex')}>
            <p className={clsx(styleHome.listProductTitle)}>Giầy thể thao</p>
            <Link className={clsx(styleHome.listProductMore)} to={'/'}>
              Xem thêm
            </Link>
          </div>
          <Slider {...settings}>
            {productList.map((item, index) => {
              return <Product key={index} {...item} />;
            })}
          </Slider>
        </div>
        <div className={clsx(styleHome.contentContainer)}>
          <div className={clsx(styleHome.listProductHeader, 'd-flex')}>
            <p className={clsx(styleHome.listProductTitle)}>Giầy thể thao</p>
            <Link className={clsx(styleHome.listProductMore)} to={'/'}>
              Xem thêm
            </Link>
          </div>
          <Slider {...settings}>
            {productList.map((item, index) => {
              return <Product key={index} {...item} />;
            })}
          </Slider>
        </div>
        <div className={clsx(styleHome.contentContainer)}>
          <div className={clsx(styleHome.listProductHeader, 'd-flex')}>
            <p className={clsx(styleHome.listProductTitle)}>Giầy thể thao</p>
            <Link className={clsx(styleHome.listProductMore)} to={'/'}>
              Xem thêm
            </Link>
          </div>
          <Slider {...settings}>
            {productList.map((item, index) => {
              return <Product key={index} {...item} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
