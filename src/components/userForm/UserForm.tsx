import React, {useState} from 'react';

import {useFormik} from 'formik';

import {Modal} from "components/modal/Modal";
import s from 'components/userForm/style.module.scss';
import {
  FormikErrorType,
  UserFormPropsType,
  UserSettingsType,
} from 'components/userForm/types';
import {validationForm} from "utils/validationForm";

export const UserForm = (props: UserFormPropsType) => {

  const {currentUser, isDisabledInput, isDisabledButton, setIsDisabledButton} = props;

  const {name, username, email, address, phone, website} = currentUser;

  const [valueModal, setValueModal] = useState<string>('')
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false)

  const initialValues = {
    name,
    username,
    email,
    street: address.street,
    city: address.city,
    zipcode: address.zipcode,
    phone,
    website,
    comment: '',
  };

  const userSettings: UserSettingsType[] = [
    {formikName: 'name', title: 'Name', inputType: 'text', data: name},
    {formikName: 'username', title: 'User name', inputType: 'text', data: username},
    {formikName: 'email', title: 'E-mail', inputType: 'text', data: email},
    {formikName: 'street', title: 'Street', inputType: 'text', data: address.street},
    {formikName: 'city', title: 'City', inputType: 'text', data: address.city},
    {
      formikName: 'zipcode',
      title: 'Zip-code',
      inputType: 'text',
      data: address.zipcode,
    },
    {formikName: 'phone', title: 'Phone', inputType: 'text', data: phone},
    {formikName: 'website', title: 'Website', inputType: 'text', data: website},
  ];

  const formik = useFormik({
    initialValues,
    validate: values => {
      const errors: FormikErrorType = {};

      validationForm(values, errors)

      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      if (Object.keys(errors).length === 0) {
        setIsDisabledButton(false)
      } else {
        setIsDisabledButton(true)
      }
      return errors;
    },
    onSubmit: values => {
      setIsActiveModal(true)
      setValueModal(JSON.stringify(values))
    },
  });

  return (
    <>
      <Modal value={valueModal} isActiveModal={isActiveModal} setIsActiveModal={setIsActiveModal}/>

      <form onSubmit={formik.handleSubmit}>

        {userSettings.map(d => {
          const fieldName = d.formikName as keyof typeof initialValues;
          return (
            <label className={s.userForm__item} key={d.formikName}>
              <span className={s.userForm__span}>{d.title}</span>
              <input
                disabled={isDisabledInput}
                className={s.userForm__input}
                id={d.formikName}
                type="text"
                placeholder={d.formikName}
                {...formik.getFieldProps(d.formikName)}
                style={
                  formik.touched[fieldName] && formik.errors[fieldName]
                    ? {borderColor: 'red'}
                    : undefined
                }
              />

              {formik.touched[fieldName] && formik.errors[fieldName] ? (
                <div className={s.userForm__error}>{formik.errors[fieldName]}</div>
              ) : null}
            </label>
          );
        })}

        <label className={s.userForm__textarea}>
          Comment
          <textarea className={s.userForm__textarea}/>
        </label>
        <button className="btn" disabled={isDisabledButton}>
          Отправить
        </button>
      </form>
    </>
  );
};
