export type UserResponsType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressResponsType;
  phone: string;
  website: string;
  company: { name: string; catchPhrase: string; bs: string };
};

type AddressResponsType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
};