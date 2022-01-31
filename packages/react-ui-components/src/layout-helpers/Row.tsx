import {
  TailwindContainer,
  TailwindContainerProps,
} from '../tailwind-abstraction/TailwindContainer';

type RowProps = TailwindContainerProps;

export const Row: React.FC<RowProps> = (props) => (
  <TailwindContainer {...props} />
);

const CenteredRow: React.FC = (props) => (
  <Row fullWidth justify="center" {...props} />
);

export { CenteredRow };

export default Row;
