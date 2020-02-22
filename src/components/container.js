import React from 'react';
import containerStyles from './github.module.scss';
export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
);
