import { UserResponsType } from 'components/home/types';

export type UserPropsType = {
  setUser: (user: UserResponsType) => void;
  user: UserResponsType;
};