import { ColorsButtonFlatOptions } from '../../theme/colors';

type Variant = ColorsButtonFlatOptions;

export interface ButtonProps {
  title: string;
  variant: Variant;
  disabled?: boolean;
};

export interface StyledProps {
  variant: Variant;
}