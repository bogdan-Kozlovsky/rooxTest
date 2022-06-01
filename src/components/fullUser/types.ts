import { UserResponsType } from 'components/home/types';

export type FullUserPropsType = {
  currentUser: UserResponsType;
  cleanUser: () => void;
};

