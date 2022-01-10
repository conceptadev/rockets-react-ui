import React, {useState} from 'react'
import CheckboxLabel from '../molecules/CheckboxLabel';
import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';
import Anchor from '../atoms/Anchor';
import Header from '../atoms/Header';
import Row from '../layout-helpers/Row';
import Spacer from '../layout-helpers/Spacer';
import Card from '../templates/Card';
import Column from '../layout-helpers/Column';
import Label from '../atoms/Label';
// @ts-ignore
// import image from '../assets/company-logo.png';
import Divider from '../atoms/Divider';

export interface SignInformProps {
  onClickSignIn(user: string, password:string): void;
}

export const SignInForm: React.FC<SignInformProps> = ({onClickSignIn}) => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Column backgroundClass="bg-outlined-50">
      <Spacer vertical size={10} />

      <Row justify="center">
        {/* <img src={image} alt="Company Logo" /> */}
      </Row>

      <Spacer vertical size={5} />

      <Header label="Sign in to your account" />

      <Spacer vertical size={5} />

      <Row justify="center">
        <Label label="Or" />
        <Spacer size={1} />
        <Anchor label="start your 14-day free trial" href="#" />
      </Row>

      <Spacer vertical size={5} />

      <Card>

        <Row justify="between">
          <FormInput label="First Name" fullWidth />
          <Spacer size={5} />
          <FormInput label="Last Name" fullWidth />
        </Row>

        <Spacer vertical size={5} />

        <FormInput label="Email address" fullWidth value={user} onChange={(value)=>setUser(value)}/>

        <Spacer vertical size={5} />

        <FormInput label="PassWord" type="password" fullWidth value={password} onChange={(value)=>setPassword(value)} />

        <Spacer vertical size={5} />

        <Row justify="between">
          <CheckboxLabel label="Remember me" />
          <Anchor label="Forgot your password?" href="#" />
        </Row>

        <Spacer vertical size={5} />

        <Button label="Sign in" fullWidth onClick={()=>{
          onClickSignIn(user, password)
        }}/>

        <Spacer vertical size={8} />

        <Divider label="Or continue with" />

        <Spacer vertical size={8} />

        <Row justify="between">
          <Button outlined fullWidth>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                clipRule="evenodd"
              />
            </svg>
          </Button>

          <Spacer size={3} />

          <Button outlined fullWidth>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Button>

          <Spacer size={3} />

          <Button outlined fullWidth>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Row>

        <Spacer vertical size={8} />

        <Row justify="center">
          <Anchor label="No account? Sign up" href="#" />
        </Row>
      </Card>
      <Spacer vertical size={10} />
    </Column>
  );
};

export default SignInForm;
