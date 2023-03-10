import { atom } from 'jotai';

export const firstNameAtom = atom(null);
export const lastNameAtom = atom(null);
export const fullNameAtom = atom(
  ( get ) => {
    const firstName = get(firstNameAtom);
    const lastName = get(lastNameAtom);
    return firstName && lastName
      ? `${firstName} ${lastName}`
      : null;
  },
  [firstNameAtom, lastNameAtom]
);