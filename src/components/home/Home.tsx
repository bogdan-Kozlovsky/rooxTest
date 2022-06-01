import React, {useEffect, useState} from 'react';

import preloader from 'assets/images/preloader.svg';
import {FullUser} from 'components/fullUser/FullUser';
import {DescriptionUser} from "components/home/descriptionUser/DescriptionUser";
import s from 'components/home/style.module.scss';
import {UserResponsType} from 'components/home/types';
import {Sidebar} from 'components/sidebar/Sidebar';
import {sortArr} from "utils/sort";

const DELAY = 2000;

export const Home = () => {

  const [userData, setUserData] = useState<UserResponsType[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isPreloader, setIsPreloader] = useState<boolean>(true);

  const setUser = (user: UserResponsType) => {
    setCurrentUser(user);
  };

  const cleanUser = () => {
    setCurrentUser(null);
  };

  const onSortCityClick = () => {
    const res = sortArr(userData, 'company', 'name')
    setUserData(res)
  }

  const onSortCompanyNameClick = () => {
    const res = sortArr(userData, 'address', 'city')
    setUserData(res)
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUserData(json))
        .finally(() => {
          setIsPreloader(false);
        });
    }, DELAY);
  }, []);

  return (
    <div className={s.box}>
      <Sidebar onSortCityClick={onSortCityClick} onSortCompanyNameClick={onSortCompanyNameClick}/>

      <div className={s.userList__wrapper}>
        {currentUser && <FullUser currentUser={currentUser} cleanUser={cleanUser}/>}

        {isPreloader && <img className="preloader" src={preloader} alt="preloader"/>}

        {!currentUser && <DescriptionUser userData={userData} setUser={setUser} isPreloader={isPreloader}/>}
      </div>
    </div>
  );
};
