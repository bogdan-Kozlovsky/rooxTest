import React from 'react';

import {Home} from 'components/home/Home';
import s from 'style.module.scss';

export const App = () => (
  <div className={`${s.wrapper} container`}>
    <div className="container">
      <Home/>
    </div>
  </div>
);
