import {UserResponsType} from 'components/home/types';

export const sortArr = (arr: UserResponsType[], key1: string, key2: string) => [...arr].sort((a: any, b: any) => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  if (a[key1][key2] < b[key1][key2]) return -1;
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  if (a[key1][key2] > b[key1][key2]) return 1;
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  return 0;
})

