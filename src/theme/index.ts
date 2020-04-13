import 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

import colors, { ColorsProps } from './colors';
import units, { UnitsProps } from './units';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsProps;
    units: UnitsProps;
  }
}

export const sisoTheme: DefaultTheme = {
  colors: {
    background: {
      primary: colors.dodgerBlue,
      tertiary: colors.aquaHaze,
    },
  },
  units: {
    spacing: {
      none: units.spacing.none,
      xxs: units.spacing.xxs,
      extraSmall: units.spacing.extraSmall,
      small: units.spacing.small,
      medium: units.spacing.medium,
      large: units.spacing.large,
      xlarge: units.spacing.xlarge,
      xxlarge: units.spacing.xxlarge,
      xxxlarge: units.spacing.xxxlarge,
      xxxxlarge: units.spacing.xxxxlarge,
      extraLarge: units.spacing.extraLarge,
    },
    borderRadius: units.borderRadius,
    input: {
      height: units.input.height
    }
  },
}