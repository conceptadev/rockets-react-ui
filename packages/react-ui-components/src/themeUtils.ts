export function withTheme<T extends TailwindThemeProps>(
  WrappedComponent: (props: T) => JSX.Element,
  componentName?: string,
) {
  const EnhanceComponent: React.FC<ThemeProps> = (props) => {
    const { primary, secondary, outlined, rounded, xs, sm, md, lg, xl, fullWidth, ...rest } = props;

    const themePropsToTailwindProps = {} as T;

    if (primary) {
      themePropsToTailwindProps.themeType = 'primary';
    } else if (secondary) {
      themePropsToTailwindProps.themeType = 'secondary';
    } else if (outlined) {
      themePropsToTailwindProps.themeType = 'outlined';
    }

    if (rounded) {
      themePropsToTailwindProps.rounded = 'rounded';
    }

    if (xs) {
      themePropsToTailwindProps.size = 'xs';
    } else if (sm) {
      themePropsToTailwindProps.size = 'sm';
    } else if (lg) {
      themePropsToTailwindProps.size = 'lg';
    }else if (xl) {
      themePropsToTailwindProps.size = 'xl';
    }else {
      themePropsToTailwindProps.size = 'md';
    }

    if(fullWidth){
      themePropsToTailwindProps.fullWidth = 'w-full';
    }

    return WrappedComponent({ ...themePropsToTailwindProps, ...rest });
  };

  EnhanceComponent.displayName = componentName || WrappedComponent.name;

  //@ts-ignore
  import ('./tailwind.css');

  return EnhanceComponent;
}

export const applyScheme = (scheme: ThemeScheme) => {
  const root = document.documentElement;
  Object.keys(scheme).forEach((cssVar) => {
    root.style.setProperty(cssVar, scheme[cssVar]);
  });
};

export interface ThemeTypeProps {
  themeType?: 'default' | 'primary' | 'secondary' | 'outlined';
  rounded?: 'rounded';
  fullWidth?: 'w-full'
}

export interface ThemeSizeProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export type TailwindThemeProps = ThemeTypeProps & ThemeSizeProps;

export interface ThemeProps {
  primary?: boolean;
  secondary?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  fullWidth?: boolean;
}

export interface ThemeScheme {
  [cssVar: string]: string;
}
