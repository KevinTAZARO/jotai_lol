import { atom } from 'jotai';

export const skillsAtom = atom([]);
export const skillsCountAtom = atom(
  ( get ) => get(skillsAtom).length,
  [skillsAtom]
);