const { colors, typography } = require('./index');

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // A lista de arquivos onde o Tailwind vai procurar as classes
  ],
  theme: {
    extend: {
      colors: {
        mainPurple: colors.MainPurple,
        hoverPurple: colors.HoverPurple,
        darkPurple: colors.DarkPurple,
        white: colors.White,
        hoverWhite: colors.HoverWhite,
        background: colors.Background,
        mainComponentBackground: colors.MainComponentBackground,
        darkComponentBackground: colors.DarkComponentBackground,
        lightComponentBackground: colors.LightComponentBackground,
        yellow: colors.Yellow,
      },
      fontFamily: {
        text: [typography.fonts.text, 'sans-serif'],
        title: [typography.fonts.title, 'sans-serif'],
      },
      fontSize: typography.fontSizes, // Adiciona os tamanhos de fontes definidos
    },
  },
  plugins: [],
}
