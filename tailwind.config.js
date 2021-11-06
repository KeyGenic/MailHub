module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Lobster':['Lobster', 'cursive'],
        'lato':[ 'Lato', 'sans-serif'],
        'Montserrat':['Montserrat', 'sans-serif']
      },
      colors:{
        myBlue : '#3b82f4',
        myYellow : '#f4b544',
        myGrey:'#EDEDED'
      },
    },
  },
  variants: {
    extends:{}
  },
  plugins: [
  ],
}
