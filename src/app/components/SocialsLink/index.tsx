import React from 'react';
import clsx from 'clsx';
import styleSocials from './SocialsLink.module.scss';
import { Icon } from '@iconify/react';

function SocialsLink() {
  return (
    <div className={clsx(styleSocials.socialContainer)}>
      <a
        href="https://www.facebook.com/NguyenHongPhuc29"
        className={clsx(styleSocials.socialItem)}
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="bxl:facebook" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCpmNKAShaLuyGHtxvlBHCvg"
        className={clsx(styleSocials.socialItem)}
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="bxl:youtube" />
      </a>
      <button onClick={() => window.scrollTo(0, 0)} className={clsx(styleSocials.socialItem)}>
        <Icon icon="bx:arrow-to-top" />
      </button>
    </div>
  );
}

export default React.memo(SocialsLink);
