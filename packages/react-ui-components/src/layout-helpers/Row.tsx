import {TailwindContainer, TailwindContainerProps} from '../tailwind-abstraction/TailwindContainer';

type RowProps = TailwindContainerProps;

export const Row:React.FC<RowProps> = (props) => (
    <TailwindContainer {...props} />
)

export default Row;

