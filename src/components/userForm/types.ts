import { UserResponsType } from 'components/home/types';

export type FormikErrorType = {
  name?: string;
  username?: string;
  email?: string;
  street?: string;
  city?: string;
  zipcode?: string;
  phone?: string;
  website?: string;
};

export type UserSettingsType = {
  formikName: string;
  title: string;
  inputType: string;
  data: string | undefined;
};

export type UserFormPropsType = {
  currentUser: UserResponsType;
  isDisabledInput: boolean;
  isDisabledButton: boolean;
  setIsDisabledButton: (isDisabledButton:boolean) => void;
};