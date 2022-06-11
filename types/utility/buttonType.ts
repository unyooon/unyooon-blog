/* eslint-disable no-redeclare */
export const buttonType = {
  flat: 0
} as const;
export type buttonType = typeof buttonType[keyof typeof buttonType];

export const buttonTypeText = {
  0: 'flat'
} as const;
export type buttonTypeText = typeof buttonTypeText[keyof typeof buttonTypeText];
