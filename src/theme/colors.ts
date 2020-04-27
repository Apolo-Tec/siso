export default {
  dodgerBlue: '#4D7EFE',
  white: '#ffffff',
  aquaHaze: '#F8FAFB',
  athensGray: '#F2F4F6',
  athensDarkGray: '#E8ECEF',
  brightTurquoise: '#2CE5F6',
  wildStrawberry: '#FE4D97',
  atlantis: '#6DD239',
  sunshade: '#FFAB2B',
  gullGray: '#98A9BC',
  bermudaGray: '#778CA2',
  charade: '#252631',
};

export interface ColorPropsBackground {
  /** Primary is: bostonBlue... */
  primary: string;
  secondary: string;
  tertiary: string;
  fourth: string;
  modal: string;
  lightBlue: string;
  lightRed: string;
  darkBlue: string;
  progressBar: string;
  corduroy: string;
  error: string;
  dotIndicator: string;
  white: string;
}

export type ButtonColorScheme = {
  borderColor?: string;
  backgroundColor: string;
  fontColor: string;
};

export interface ColorsPropsButtonFlat {
  primary: ButtonColorScheme;
  secondary: ButtonColorScheme;
  disabled: ButtonColorScheme;
}

export interface ColorsPropsButtonOutline {
  primary: ButtonColorScheme;
  disabled: ButtonColorScheme;
}

export interface ColorsPropsText {
  primary: string;
  secondary: string;
  tertiary: string;
  fourth: string;
  darkBlue: string;
  darkRed: string;
  corduroy: string;
  white: string;
  recharge: string;
  externalLink: string;
}

export interface ColorsPropsInformation {
  error: string;
  success: string;
}

export interface ColorPropsInput {
  border: string;
}

export interface ColorsProps {
  background: ColorPropsBackground;
  text: ColorsPropsText;
  information: ColorsPropsInformation;
  input: ColorPropsInput;
  border: string;
  button: {
    primary: ButtonColorScheme;
    secondary: ButtonColorScheme;
    tertiary: ButtonColorScheme;
    disabled: ButtonColorScheme;
  };
}

export type ColorsButtonFlatOptions = keyof ColorsPropsButtonFlat;

export type ColorsButtonOutlineOptions = keyof ColorsPropsButtonOutline;

export type ColorsBackgroundOptions = keyof ColorPropsBackground;

export type ColorsTextOptions = keyof ColorsPropsText;

export type ColorsInformationOptions = keyof ColorsPropsInformation;

export type ColorsInputOptions = keyof ColorPropsInput;