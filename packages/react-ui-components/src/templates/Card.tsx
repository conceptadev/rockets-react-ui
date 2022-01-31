import {
  TailwindCard,
  TailwindCardProps,
} from '../tailwind-abstraction/TailwindCard';

export const Card: React.FC<TailwindCardProps> = (props) => (
  <TailwindCard {...props} />
);

export default Card;
