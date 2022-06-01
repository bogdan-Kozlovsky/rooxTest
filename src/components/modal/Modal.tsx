import React, {useState} from 'react';

import s from './style.module.scss'

import {ModalPropsType} from "components/modal/types";

export const Modal = ({value,isActiveModal,setIsActiveModal}: ModalPropsType) => {

  const closeModal = () => {
    setIsActiveModal(false)
  }
  return (
    <div role="presentation" className={isActiveModal ? s.active : s.notActive} onClick={closeModal}>
      <div className={s.wrapper}>
        <div role="presentation" className={s.modal} onClick={e => e.stopPropagation()}>
          <div className={s.closeBtnWrapper}>
            <button className={s.btnClose}>
              <span role="presentation" className={s.closeIcon} onClick={closeModal}>
                    &times;
                  </span>
            </button>
          </div>
          <h3 className={s.title}>{value}</h3>
        </div>
      </div>
    </div>
  );
};

