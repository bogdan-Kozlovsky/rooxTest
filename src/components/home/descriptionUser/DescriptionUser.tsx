import React from 'react';

import {DescriptionUserType} from "components/home/descriptionUser/types";
import s from "components/home/style.module.scss";
import {User} from "components/home/user/User";

export const DescriptionUser = (props: DescriptionUserType) => {

  const {userData, setUser, isPreloader} = props

  return (
    <div>
      <h1 className="title">Список пользователей</h1>

      {userData.map(user => (
        <User key={`${user.name} ${user.id}`} user={user} setUser={setUser}/>
      ))}

      {!isPreloader && <p className={s.userList__description}>Найдено 10 пользователей</p>}

    </div>
  );
};

