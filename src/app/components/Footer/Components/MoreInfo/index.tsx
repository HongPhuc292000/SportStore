import { Icon } from '@iconify/react';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import styleMoreInfo from './MoreInfo.module.scss';

interface TopMoreInfoItemProps {
  title: string;
  items: string[];
}

interface BottomMoreInfoItemProps {
  icon: string;
  title: string;
  content: string;
}

function MoreInfo() {
  const bottomMoreInfoContent = [
    {
      title: 'Giới thiệu sport store',
      items: [
        'Giới thiệu công ty',
        'Liên hệ hợp tác kinh doanh',
        'Thông tin tuyển dụng',
        'Tin tức',
      ],
    },
    {
      title: 'Hỗ trợ khách hàng',
      items: [
        'Hướng dẫn mua hàng trực tuyến',
        'Hướng dẫn thanh toán',
        'Hướng dẫn mua hàng trả góp',
        'In hóa đơn điện tử',
        'Gửi yêu cầu bảo hành',
        'Góp ý, khiếu nại',
      ],
    },
    {
      title: 'Chính sách chung',
      items: [
        'Chính sách, quy định chung',
        'Chính sách vận chyển',
        'Chính sách bảo hành',
        'Chính sách cho doanh nghiệp',
        'Bảo mật thông tin khách hàng',
        'Chính sách nhập lại tính phí',
      ],
    },
    {
      title: 'Thông tin khuyến mại',
      items: ['Thông tin khuyến mại', 'Sản phẩm khuyến mại', 'Sản phẩm bán chạy', 'Sản phẩm mới'],
    },
  ];
  const topMoreInfoContent = [
    {
      icon: 'mdi:truck-fast-outline',
      title: 'Chính sách giao hàng',
      content: 'Nhận hàng và thanh toán tại nhà',
    },
    {
      icon: 'ant-design:sync-outlined',
      title: 'Đổi trả dễ dàng',
      content: '1 đổi 1 trong vòng 15 ngày',
    },
    {
      icon: 'cil:credit-card',
      title: 'Thanh toán tiện lợi',
      content: 'Trả tiền mặt, CK, trả góp 0%',
    },
    {
      icon: 'cil:chat-bubble',
      title: 'Hỗ trợ nhiệt tình',
      content: 'Tư vấn, giải đáp mọi thắc mắc',
    },
  ];

  const BottomMoreInfoItem = React.memo(({ title, items }: TopMoreInfoItemProps) => {
    return (
      <div className="col c-3">
        <p className="footer-title has-border">{title}</p>
        <div className={clsx(styleMoreInfo.moreInfoDesWrap)}>
          {items.map((item, index) => {
            return (
              <Link key={index} to="/" className="footer-sub-des">
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    );
  });

  const TopMoreInfoItem = React.memo(({ icon, title, content }: BottomMoreInfoItemProps) => {
    return (
      <div className="col c-3">
        <div className={clsx(styleMoreInfo.topDesWrap, 'row', 'no-gutters')}>
          <Icon icon={icon} className={clsx(styleMoreInfo.topDesIcon)} />
          <div>
            <p className="footer-title">{title}</p>
            <p className={clsx(styleMoreInfo.topDesContent)}>{content}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={clsx(styleMoreInfo.moreInfo)}>
      <div className={clsx(styleMoreInfo.moreInfoWrap, 'container', 'footer-wrap')}>
        <div className={clsx(styleMoreInfo.footerDesWrap, 'row', 'no-gutters')}>
          {topMoreInfoContent.map((item, index) => (
            <TopMoreInfoItem
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className={clsx(styleMoreInfo.bottomItemWrap, 'row', 'no-gutters')}>
          {bottomMoreInfoContent.map((item, index) => {
            return <BottomMoreInfoItem key={index} title={item.title} items={item.items} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
