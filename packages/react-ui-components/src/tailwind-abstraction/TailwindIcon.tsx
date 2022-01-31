import { TailwindThemeProps } from '../themeUtils';
import * as OutlineIcons from '@heroicons/react/outline';
import * as SolidIcons from '@heroicons/react/solid';

export interface TailwindIconProps {
  icon: string;
  outline?: boolean;
  styles?: string;
  onClick?(): void;
}

export const TailwindIcon = (props: TailwindIconProps & TailwindThemeProps) => {
  const Icons = props.outline ? OutlineIcons : SolidIcons;

  // @ts-ignore
  const Icon = Icons[props.icon];

  return (
    <div
      style={{ cursor: props.onClick ? 'pointer' : 'auto' }}
      onClick={props.onClick}
    >
      <Icon
        className={`${styles.base} ${props.size ? styles[props.size] : ''} ${
          props.styles
        }`}
      />
    </div>
  );
};

const styles = {
  base: `  `,
  xs: ` h-3 w-3 `,
  sm: ` h-4 w-4 `,
  md: ` h-5 w-5 `,
  lg: ` h-6 w-6 `,
  xl: ` h-7 w-7 `,
};
