import React, { useState } from 'react';

import s from 'components/fullUser/style.module.scss';
import { FullUserPropsType } from 'components/fullUser/types';
import { UserForm } from 'components/userForm/UserForm';

export const FullUser = (props: FullUserPropsType) => {

  const { currentUser, cleanUser } = props;

  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);
  const [isDisabledInput, setIsDisabledInput] = useState<boolean>(true);

  const isDeactivationForm = () => {
    setIsDisabledInput(false);
    setIsDisabledButton(false);
  };

  return (
    <div>
      <div className={s.fullUser__wrapper}>
        <h1 className="title">Профиль пользователя</h1>
        <div>
          <button className={`${s.fullUser__btn} btn`} onClick={cleanUser}>
            reset
          </button>
          <button className={`${s.fullUser__btn} btn`} onClick={isDeactivationForm}>
            Редактировать
          </button>
        </div>
      </div>
      <ul className={s.fullUser__items}>

        <UserForm
          currentUser={currentUser}
          isDisabledInput={isDisabledInput}
          isDisabledButton={isDisabledButton}
          setIsDisabledButton={setIsDisabledButton}
        />

      </ul>
    </div>
  );
};
