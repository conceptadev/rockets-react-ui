import { TailwindThemeProps } from '../themeUtils';
import { TailwindIcon } from './TailwindIcon';
import styled from 'styled-components';
import tw from 'twin.macro';
import '../tailwind.css';

export interface TailwindButtonProps {
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  onClick?(): void;
}

type PropsType = TailwindThemeProps &
  React.PropsWithChildren<TailwindButtonProps>;

const StyledTailwindButton = styled.button.attrs((props: PropsType) => ({
  type: 'button',
  onClick: props.onClick,
  className: `inline-flex items-center justify-center rounded-md p-1.5 font-medium focus:ring-2 focus:outline-none focus:ring-offset-2`,
}))`
  ${({ size }: PropsType) => {
    switch (size) {
      case 'xs':
        return tw`text-xs px-2.5 py-1.5`;
      case 'sm':
        return tw`text-sm px-3 py-2 leading-4`;
      case 'md':
        return tw`text-sm px-4 py-2`;
      case 'lg':
        return tw`text-base px-4 py-2`;
      case 'xl':
        return tw`text-base px-6 py-3`;
    }
  }}

  ${({ themeType }: PropsType) => {
    switch (themeType) {
      case 'secondary':
        return tw`border border-transparent text-secondary-700 dark:text-secondary-dark-700 bg-secondary-100 dark:bg-secondary-dark-100 hover:bg-secondary-200 dark:hover:bg-secondary-dark-200 focus:ring-secondary-700`;
      case 'outlined':
        return tw`text-outlined-700 dark:text-outlined-dark-700 bg-outlined-0 dark:bg-outlined-dark-0 hover:bg-outlined-50 dark:hover:bg-outlined-dark-50 border-2 border-outlined-300 focus:ring-offset-2 focus:ring-primary-600`;
      default:
        return tw`border 
        border-transparent 
        shadow-sm 
        text-white 
        bg-primary-600 
        dark:bg-primary-dark-600 
        hover:bg-primary-700 
        dark:hover:bg-primary-dark-700 
        focus:ring-primary-600`;
    }
  }}

  ${({ rounded }: PropsType) => {
    return rounded ? tw`rounded-full shadow-sm` : '';
  }}

  span {
    ${({ leftIcon, rightIcon, label }: PropsType) => {
      if (label && leftIcon) {
        return tw`-ml-0.5 mr-2`;
      } else if (label && rightIcon) {
        return tw`-ml-0.5 mr-2`;
      }
    }}
  }
`;

export const TailwindButton2 = (props: PropsType) => {
  return (
    <StyledTailwindButton {...props}>
      {props.leftIcon && (
        <span>
          <TailwindIcon icon={props.leftIcon} />
        </span>
      )}
      {props.label ? props.label : props.children}
      {props.rightIcon && (
        <span>
          <TailwindIcon icon={props.rightIcon} />
        </span>
      )}
    </StyledTailwindButton>
  );
};
