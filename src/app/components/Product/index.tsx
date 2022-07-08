import { Icon } from '@iconify/react';
import clsx from 'clsx';
import React from 'react';
import ReactStars from 'react-stars';
import { ProductStatusEnum } from 'types';
import { formatCurrency } from 'utils';
import stylesProduct from './Product.module.scss';

interface Props {
  image: string;
  name: string;
  rating: number;
  code: string;
  defaultPrice: number;
  salesPrice: number;
  salesPercent: number;
  status: string;
}

function Product({
  image,
  name,
  rating,
  code,
  defaultPrice,
  salesPrice,
  salesPercent,
  status,
}: Props) {
  const statusRender = React.useMemo(() => {
    return status === ProductStatusEnum.ENABLE
      ? { title: 'Còn hàng', icon: 'ic:round-done', enable: true }
      : { title: 'Liên hệ', icon: 'fluent:call-24-filled', enable: false };
  }, [status]);

  return (
    <div className={clsx(stylesProduct.productItem)}>
      <img className={clsx(stylesProduct.productImg)} src={image} alt="img" />
      <div>
        <div className={clsx(stylesProduct.ratingWrap, 'd-flex')}>
          <ReactStars count={5} value={rating} edit={false} size={20} color2={'#FF9727'} />
          <p>Mã: {code}</p>
        </div>
        <p className={clsx(stylesProduct.productName)}>{name}</p>
        <div className={clsx(stylesProduct.defaultPrice, 'd-flex')}>
          <p>{formatCurrency(defaultPrice.toString())}đ</p>
          <p>{`(Tiết kiệm: ${salesPercent}%)`}</p>
        </div>
        <p className={clsx(stylesProduct.salePrice)}>{formatCurrency(salesPrice.toString())}đ</p>
        <div className={clsx(stylesProduct.statusWrap, 'd-flex')}>
          <div
            className={clsx(stylesProduct.statusItem, 'd-flex', {
              [stylesProduct.enable]: statusRender.enable,
            })}
          >
            <Icon icon={statusRender.icon} className={clsx(stylesProduct.statusIcon)} />
            <p>{statusRender.title}</p>
          </div>
          <Icon icon="bytesize:cart" className={clsx(stylesProduct.cartIcon)} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Product);
