import {
  TailwindAnchor,
  TailwindAnchorProps,
} from '../tailwind-abstraction/TailwindAnchor';
import { ThemeProps, withTheme } from '../themeUtils';

export type AnchorProps = TailwindAnchorProps & ThemeProps;

const Anchor: React.FC<AnchorProps> = withTheme(TailwindAnchor, 'Anchor');

export default Anchor;
