import clsx from 'clsx';
import React from 'react';

import styleCopyright from './Copyright.module.scss';

function Copyright() {
  const copyrightContent: string[] = [
    '© 2021 Công ty Cổ phần đầu tư thể thao Sport Store',
    'Địa chỉ: Số 02, Đan Phượng, Hà Nội',
    'Email: info@sportstore.vn. Điện thoại: 1900 1903',
    'GPĐKKD số 0101161194 do Sở KHĐT Tp.Hà Nội cấp ngày 31/8/2001',
  ];

  return (
    <div className={clsx(styleCopyright.copyright)}>
      <div className="container">
        {copyrightContent.map((item, index) => (
          <p key={index} className={clsx(styleCopyright.copyrightDes)}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Copyright;
