import { Icon } from '@iconify/react';
import clsx from 'clsx';
import React from 'react';
import ReactStars from 'react-stars';
import { ProductI, ProductStatusEnum } from 'types';
import { formatCurrency } from 'utils';
import stylesProduct from './Product.module.scss';

interface Props {
  data?: ProductI;
}

function Product({ data }: Props) {
  const statusRender = React.useMemo(() => {
    return data?.status === ProductStatusEnum.INSTOCK
      ? { title: 'Còn hàng', icon: 'ic:round-done', enable: true }
      : { title: 'Liên hệ', icon: 'fluent:call-24-filled', enable: false };
  }, [data?.status]);

  return (
    <div className={clsx(stylesProduct.productItem)}>
      <img className={clsx(stylesProduct.productImg)} src={data?.imageUrl} alt="img" />
      <div>
        <div className={clsx(stylesProduct.ratingWrap, 'd-flex')}>
          <ReactStars count={5} value={data?.rating} edit={false} size={20} color2={'#FF9727'} />
          <p>Mã: {data?.code}</p>
        </div>
        <p className={clsx(stylesProduct.productName)}>{data?.name}</p>
        <div className={clsx(stylesProduct.defaultPrice, 'd-flex')}>
          <p>{formatCurrency(data?.defaultPrice.toString())}đ</p>
          <p>{`(Tiết kiệm: ${data?.salePercent}%)`}</p>
        </div>
        <p className={clsx(stylesProduct.salePrice)}>
          {formatCurrency(data?.salePrice.toString())}đ
        </p>
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
