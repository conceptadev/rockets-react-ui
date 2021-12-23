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
import image from '../assets/company-logo.png';
import Divider from '../atoms/Divider';

export interface SimpleLoginFormProps {
  onClickSignIn(user: string, password:string): void;
}

export const SimpleLoginForm: React.FC<SimpleLoginFormProps> = ({onClickSignIn}) => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Column backgroundClass="bg-outlined-50">
      <Spacer vertical size={10} />

      <Row justify="center">
        <img src={image} alt="Company Logo" />
      </Row>

      <Spacer vertical size={5} />
      
      <Row>
         <Spacer size={10} />
         <Header label="Sign in to your account" />
         <Spacer size={10} />
      </Row>

      <Spacer vertical size={5} />

      <Card>

        <Spacer vertical size={5} />

        <FormInput label="Email address" fullWidth value={user} onChange={(value)=>setUser(value)}/>

        <Spacer vertical size={5} />

        <FormInput label="PassWord" type="password" fullWidth value={password} onChange={(value)=>setPassword(value)} />

        <Spacer vertical size={5} />

        <Button label="Sign in" fullWidth onClick={()=>{
          onClickSignIn(user, password)
        }}/>

      </Card>
      <Spacer vertical size={10} />
    </Column>
  );
};

export default SimpleLoginForm;
