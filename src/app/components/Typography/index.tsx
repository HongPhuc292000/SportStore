import clsx from 'clsx';

import styleTypography from './Typography.module.scss';

interface Props {
  children: string;
}

export const TitleCategory = ({ children }: Props) => {
  return <p className={clsx(styleTypography.titleCategory)}>{children}</p>;
};
