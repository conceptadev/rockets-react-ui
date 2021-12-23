import '../src/index.css';
import {applyScheme} from '../src/themeUtils';
const { scheme } = require('../src/theme');

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    darkClass: 'dark',
    classTarget: 'html',
    stylePreview: true,
  }
}

export const decorators = [
  (Story) => {
    applyScheme(scheme);
    return <div style={{display: 'flex', justifyContent: 'center'}} >
      <Story />
    </div>
  }
];