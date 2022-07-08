import { Icon } from '@iconify/react';
import React from 'react';
import clsx from 'clsx';

import styleLocation from './FooterLocation.module.scss';

interface footerLocationItemContent {
  des: string | number;
  icon: string;
}

interface footerLocationItem {
  title: string;
  address: footerLocationItemContent;
  image: footerLocationItemContent;
  map: footerLocationItemContent;
  tel: footerLocationItemContent;
  insurance: footerLocationItemContent;
  email: footerLocationItemContent;
  openTime: footerLocationItemContent;
  closeTime: footerLocationItemContent;
}

interface footerLocationItemIconProps {
  darker?: boolean;
  primary?: boolean;
  icon: string;
  title: string | number;
}

interface locationProps {
  data: footerLocationItem[];
}

function FooterLocation() {
  const footerLocationList = [
    {
      title: 'SPORT STORE Hà Nội',
      address: { des: 'Số 02, Phương Đình, Đan Phượng, Hà Nội', icon: 'ep:location' },
      image: { des: 'Hình ảnh thực tế showroom', icon: 'ion:images-outline' },
      map: { des: 'Xem bản đồ đường đi', icon: 'gis:map-poi' },
      tel: { des: 9969123654, icon: 'akar-icons:phone' },
      insurance: { des: 19008198, icon: 'akar-icons:phone' },
      email: { des: 'sportstore@gmail.com', icon: 'charm:mail' },
      openTime: { des: 28800, icon: 'akar-icons:clock' },
      closeTime: { des: 72000, icon: '' },
    },
    {
      title: 'SPORT STORE Hà Nội',
      address: { des: 'Số 02, Phương Đình, Đan Phượng, Hà Nội', icon: 'ep:location' },
      image: { des: 'Hình ảnh thực tế showroom', icon: 'ion:images-outline' },
      map: { des: 'Xem bản đồ đường đi', icon: 'gis:map-poi' },
      tel: { des: 9969123654, icon: 'akar-icons:phone' },
      insurance: { des: 19008198, icon: 'akar-icons:phone' },
      email: { des: 'sportstore@gmail.com', icon: 'charm:mail' },
      openTime: { des: 28800, icon: 'akar-icons:clock' },
      closeTime: { des: 72000, icon: '' },
    },
    {
      title: 'SPORT STORE Hà Nội',
      address: { des: 'Số 02, Phương Đình, Đan Phượng, Hà Nội', icon: 'ep:location' },
      image: { des: 'Hình ảnh thực tế showroom', icon: 'ion:images-outline' },
      map: { des: 'Xem bản đồ đường đi', icon: 'gis:map-poi' },
      tel: { des: 9969123654, icon: 'akar-icons:phone' },
      insurance: { des: 19008198, icon: 'akar-icons:phone' },
      email: { des: 'sportstore@gmail.com', icon: 'charm:mail' },
      openTime: { des: 28800, icon: 'akar-icons:clock' },
      closeTime: { des: 72000, icon: '' },
    },
  ];

  const FooterLocationItem = React.memo(
    ({ icon, title, primary, darker }: footerLocationItemIconProps) => {
      return (
        <div
          className={clsx(styleLocation.locationItemDes, {
            [styleLocation.primary]: primary,
            [styleLocation.darker]: darker,
          })}
        >
          <Icon icon={icon} className={clsx(styleLocation.icon)} />
          <p className={clsx(styleLocation.des)}>{title}</p>
        </div>
      );
    }
  );

  const handleConvertTime = (from: string | number, to: string | number) => {
    let fromTime = 0;
    let toTime = 0;
    if (typeof from === 'string') {
      fromTime = parseInt(from);
    } else {
      fromTime = from;
    }
    if (typeof to === 'string') {
      toTime = parseInt(to);
    } else {
      toTime = to;
    }
    const hoursFrom = Math.floor(fromTime / 3600);
    const minutesFrom = Math.floor((fromTime - hoursFrom * 3600) / 60);
    const hoursTo = Math.floor(toTime / 3600);
    const minutesTo = Math.floor((toTime - hoursTo * 3600) / 60);
    let minutesFromRender = '';
    let minutesToRender = '';
    if (minutesFrom < 10) {
      minutesFromRender = '0' + minutesFrom;
    } else {
      minutesFromRender = '' + minutesFrom;
    }
    if (minutesTo < 10) {
      minutesToRender = '0' + minutesTo;
    } else {
      minutesToRender = '' + minutesTo;
    }
    return `${hoursFrom}:${minutesFromRender} - ${hoursTo}:${minutesToRender}`;
  };

  const FooterLocationRender = React.memo(({ data }: locationProps) => {
    return (
      <div className={clsx(styleLocation.footerLocationWrap, 'row')}>
        {data.map((item, index) => {
          return (
            <div key={index} className="col c-4">
              <div className={clsx(styleLocation.locationTitle)}>
                <p className={clsx(styleLocation.icon)}>{index + 1}</p>
                <p className={clsx(styleLocation.title)}>{item.title}</p>
              </div>
              <FooterLocationItem icon={item.address.icon} title={item.address.des} darker />
              <FooterLocationItem icon={item.image.icon} title={item.image.des} primary />
              <FooterLocationItem icon={item.map.icon} title={item.map.des} primary />
              <FooterLocationItem icon={item.tel.icon} title={item.tel.des} />
              <FooterLocationItem icon={item.insurance.icon} title={item.insurance.des} />
              <FooterLocationItem icon={item.email.icon} title={item.email.des} />
              <FooterLocationItem
                icon={item.openTime.icon}
                title={handleConvertTime(item.openTime.des, item.closeTime.des)}
              />
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className="container">
      <FooterLocationRender data={footerLocationList} />
    </div>
  );
}

export default FooterLocation;
