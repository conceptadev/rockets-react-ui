import SignInForm from "./organisms/SignInForm";
import SimpleLoginForm from "./organisms/SimpleLoginForm";

import CheckboxLabel from "./molecules/CheckboxLabel";
import FormInput from "./molecules/FormInput";
import Notification from "./molecules/Notification";

import Column from "./layout-helpers/Column";
import Row from "./layout-helpers/Row";
import Spacer from "./layout-helpers/Spacer";

import Anchor from "./atoms/Anchor";
import Button from "./atoms/Button";
import Checkbox from "./atoms/Checkbox";
import Divider from "./atoms/Divider";
import Header from "./atoms/Header";
import Icon from "./atoms/Icon";
import Input from "./atoms/Input";
import Label from "./atoms/Label";

import "./index.css";

import {applyScheme} from '../src/themeUtils';
import { scheme, theme } from '../src/theme';

applyScheme(scheme);

const organisms = {
    SignInForm,
    SimpleLoginForm
};

const molecules ={
    CheckboxLabel,
    FormInput,
    Notification
};

const layoutHelpers = {
    Column,
    Row,
    Spacer,
};

const atoms = {
    Anchor,
    Button,
    Checkbox,
    Divider,
    Header,
    Icon,
    Input,
    Label
};

const RocktsUI = {
    ...organisms, ...molecules, ...layoutHelpers, ...atoms
};

export {
    Anchor,
    Button,
    Checkbox,
    Divider,
    Header,
    Icon,
    Input,
    Label,
    Column,
    Row,
    Spacer,
    CheckboxLabel,
    FormInput,
    SignInForm,
    SimpleLoginForm,
    Notification,
    theme
};

export default RocktsUI;
