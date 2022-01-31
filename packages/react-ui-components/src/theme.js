//https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
//https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js

const theme = {
    colors:{
        default: {
            600: 'var(--theme-default-600)',
            700: 'var(--theme-default-700)',
        },
        "default-dark": {
            600: 'var(--theme-default-dark-600)',
            700: 'var(--theme-default-dark-700)',
        },
        primary: {
            600: 'var(--theme-primary-600)',
            700: 'var(--theme-primary-700)',
        },
        "primary-dark": {
            600: 'var(--theme-primary-dark-600)',
            700: 'var(--theme-primary-dark-700)',
        },
        secondary: {
            100: 'var(--theme-secondary-100)',
            200: 'var(--theme-secondary-200)',
            700: 'var(--theme-secondary-700)'
        }, 
        "secondary-dark": {
            100: 'var(--theme-secondary-dark-100)',
            200: 'var(--theme-secondary-dark-200)',
            700: 'var(--theme-secondary-dark-700)'
            
        },
        outlined: {
            0: 'var(--theme-outlined-0)',
            50: 'var(--theme-outlined-50)',
            300: 'var(--theme-outlined-300)',
            700: 'var(--theme-outlined-700)'
        }, 
        "outlined-dark": {
            0: 'var(--theme-outlined-dark-0)',
            50: 'var(--theme-outlined-dark-50)',
            300: 'var(--theme-outlined-dark-300)',
            700: 'var(--theme-outlined-dark-700)'
        },
        gray: {
            400: 'var(--theme-gray-400)'
        }
    },

    backgroundColor:{
        signin: 'var(--theme-signing-bg)'
    }
}

const scheme = {
    "--theme-default-600": "#2563EB",
    "--theme-default-700": "#1D4ED8",
    "--theme-default-dark-600": "#2563EB",
    "--theme-default-dark-700": "#1D4ED8",

    "--theme-primary-600": "#2563EB",
    "--theme-primary-700": "#1D4ED8",
    "--theme-primary-dark-600": "green",
    "--theme-primary-dark-700": "green",

    "--theme-gray-400": "#9CA3AF",

    "--theme-secondary-100": "#DBEAFE",
    "--theme-secondary-200": "#BFDBFE",
    "--theme-secondary-700": "#1D4ED8",
    "--theme-secondary-dark-100": "#DBEAFE",
    "--theme-secondary-dark-200": "#BFDBFE",
    "--theme-secondary-dark-700": "#1D4ED8",

    "--theme-outlined-0": "#FFFFFF",
    "--theme-outlined-50": "#F9FAFB",
    "--theme-outlined-700": "#374151",
    "--theme-outlined-300": "#D1D5DB",
    "--theme-outlined-dark-0": "#FFFFFF",
    "--theme-outlined-dark-50": "#F9FAFB",
    "--theme-outlined-dark-700": "#374151",
    "--theme-outlined-dark-300": "#D1D5DB",

    "--theme-signing-bg": "#F9FAFB"
}

// const images = {
//     companyLogo: require('./assets/company-logo.png'),
// }

module.exports = {
    theme,
    scheme,
 }
