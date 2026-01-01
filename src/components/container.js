import React from 'react';
import * as containerStyles from './github.module.css';
const container = ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
);
export default container;
