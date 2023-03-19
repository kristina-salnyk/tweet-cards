const theme = Object.freeze({
  colors: {
    accent: '#5CD3A8',
    primary: '#EBD8FF',
    secondary: '#5736A3',
    black: '#373737',
    logo: 'rgba(255, 255, 255, 0.3)',
    background:
      'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
  },
  shadows: [
    '0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF',
    '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF',
    '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
    '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
  ],
  animation: {
    cubicBezier: '0.5s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  shape: {
    borderRadius: {
      s: '10.3108px',
      m: '13.1749px',
      l: '20px',
      xl: '85.9232px',
    },
  },
  typography: {
    font: {
      primary: ['Montserrat, sans-serif'],
    },
    size: {
      m: '18px',
      l: '20px',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
});

export default theme;
