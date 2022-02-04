import React from 'react';
import Header from '../atoms/Header';
import Spacer from '../layout-helpers/Spacer';
import Column from '../layout-helpers/Column';
import Caption from '../atoms/Caption';
import { CenteredRow } from '../layout-helpers/Row';
import { FallbackComponent, HOCWrapper } from '../utils/componentUtils';

export interface SigninTemplateProps {
  logo?: React.ReactNode | string;
  title?: React.ReactNode | string;
  caption?: React.ReactNode | string;
}

export const SigninTemplate: React.FC<SigninTemplateProps> = ({
  children,
  logo,
  title,
  caption,
}) => {
  return (
    <Column backgroundClass="bg-signin" fullWidth fullHeightVP>
      <Column customClass="w-[375px]">
        <Spacer vertical size={10} />

        <CenteredRow>
          <FallbackComponent component="">{logo}</FallbackComponent>
        </CenteredRow>

        <Spacer vertical size={5} />

        <CenteredRow>
          <FallbackComponent component={<Header label="Welcome" />}>
            {HOCWrapper(title, <Header label={title as string} />)}
          </FallbackComponent>
        </CenteredRow>

        <Spacer vertical size={5} />

        <CenteredRow>
          <FallbackComponent
            component={<Caption label="Signin to continue!" />}
          >
            {HOCWrapper(caption, <Caption label={caption as string} />)}
          </FallbackComponent>
        </CenteredRow>

        <Spacer vertical size={10} />

        {children}
      </Column>
    </Column>
  );
};

export default SigninTemplate;
