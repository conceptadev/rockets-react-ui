import {
  TailwindSpacer,
  TailwindSpacerProps,
} from '../tailwind-abstraction/TailwindSpacer';

type SpacerProps = TailwindSpacerProps;

export const Spacer: React.FC<SpacerProps> = (props) => (
  <TailwindSpacer {...props} />
);

export default Spacer;
