import {
    TailwindCaption,
    TailwindCaptionProps,
  } from '../tailwind-abstraction/TailwindCaption';
  import { ThemeProps, withTheme } from '../themeUtils';
  
  export type CaptionProps = TailwindCaptionProps & ThemeProps;
  
  const Caption: React.FC<CaptionProps> = withTheme(TailwindCaption, 'Caption');
  
  export default Caption;
  