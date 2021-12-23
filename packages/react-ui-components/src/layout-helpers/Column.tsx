import {
  TailwindContainer,
  TailwindContainerProps,
} from '../tailwind-abstraction/TailwindContainer';

type ColumnProps = TailwindContainerProps;

export const Column: React.FC<ColumnProps> = (props) => (
  <TailwindContainer column {...props} />
);

export default Column;
