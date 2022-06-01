import React from 'react';

import s from 'components/sidebar/style.module.scss';
import {SidebarPropsType} from "components/sidebar/types";

export const Sidebar = ({onSortCityClick, onSortCompanyNameClick}: SidebarPropsType) => (
  <aside className={s.sidebar}>
    <p className={s.sidebar__text}>Сортировка:</p>
    <button onClick={onSortCityClick} className={`${s.sidebar__btn} btn`}>по городу</button>
    <button onClick={onSortCompanyNameClick} className={`${s.sidebar__btn} btn`}>по компании</button>
  </aside>
);
