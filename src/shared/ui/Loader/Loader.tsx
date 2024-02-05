import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}
export const Loader = memo(({ className }: LoaderProps) => (
  <div className={classNames('loader', {}, [className])}>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
));
