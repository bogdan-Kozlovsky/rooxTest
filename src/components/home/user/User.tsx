import React from 'react';

import s from 'components/home/user/style.module.scss';
import { UserPropsType } from 'components/home/user/types';

export const User = (props: UserPropsType) => {

  const { user, setUser } = props;

  const { name, company, address } = user;

  const onSetUserClick = () => {
    setUser(user);
  };

  return (
    <div className={`${s.user__wrapper}`}>
      <ul>
        <li className={s.user__item}>
          <span className={s.user__item_span}>ФИО:</span>
          {name}
        </li>
        <li className={s.user__item}>
          <span className={s.user__item_span}>город:</span>
          {address.city}
        </li>
        <li className={s.user__item}>
          <span className={s.user__item_span}>компания:</span>
          {company.name}
        </li>
      </ul>
      <div>
        <button onClick={onSetUserClick} className="btn">
          Подробнее
        </button>
      </div>
    </div>
  );
};
