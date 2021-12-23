import {
  TailwindDivider,
  TailwindDividerProps,
} from '../tailwind-abstraction/TailwindDivider';

const Divider: React.FC<TailwindDividerProps> = (props) => {
  return <TailwindDivider {...props} />;
};

export default Divider;
