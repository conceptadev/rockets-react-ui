import React from 'react';
import Header from '../atoms/Header';
import { CenteredRow } from '../layout-helpers/Row';
import Spacer from '../layout-helpers/Spacer';
import Column from '../layout-helpers/Column';
import { FallbackComponent, HOCWrapper } from '../utils/componentUtils';
import Caption from '../atoms/Caption';

export interface SigninTemplateProps {
  logo?: React.ReactNode;
  title?: React.ReactNode;
  caption?: React.ReactNode;
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
