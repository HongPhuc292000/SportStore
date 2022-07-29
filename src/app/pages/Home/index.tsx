import React, { useEffect } from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';

import Product from 'app/components/Product';
import styleHome from './Home.module.scss';

import productImg from 'assets/images/product.png';
import prevIcon from 'assets/images/prev-icon.svg';
import nextIcon from 'assets/images/next-icon.svg';
import { Link } from 'react-router-dom';
import Banner from './components/Banner';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { homeManagementAction } from './slice/index';
import { selectHomeManagement } from './slice/selector';

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

function Home() {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector(selectHomeManagement);

  useEffect(() => {
    dispatch(homeManagementAction.getProducts());
  }, []);

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
            {products?.data?.map((item, index) => {
              return <Product key={index} data={item} />;
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
            {products?.data?.map((item, index) => {
              return <Product key={index} data={item} />;
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
            {products?.data?.map((item, index) => {
              return <Product key={index} {...item} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
