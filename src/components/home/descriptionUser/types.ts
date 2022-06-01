import {UserResponsType} from "components/home/types";

export type DescriptionUserType = {
  userData: UserResponsType[]
  setUser: (user: UserResponsType) => void
  isPreloader: boolean
}