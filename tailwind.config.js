/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // se estiver usando src/
  ],

  theme: {
    extend: {

      colors: {
        purple: '#9775C9',
        HoverPurple: '#CEADFF',
        DarkPurple: '#6c4a97',
    
        White: '#FFFFFF',
        HoverWhite: '#E0CCFF',
    
        Background: '#25292F',
        MainComponentBackground: '#565B69',
        DarkComponentBackground: '#303741',
        LightComponentBackground: '#7D818E',
    
        Yellow: '#FFD484',
      },

      fontFamily: {
        text: `'League Spartan', Arial, sans-serif`,
        title: `'Bebas Neue', Arial, sans-serif`,
      },

      fontSize: {
        small: '0.875rem',
        base: '1rem',
        large: '1.25rem',
        xl: '1.5rem',
        xxl: '2rem',
        xxxl: '2.5rem',
      }, 

      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '80px',
      },
      
      borderRadius: {
        none: '0px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },

      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
