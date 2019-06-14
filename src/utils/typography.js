import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1": {
      fontFamily: ["Lora", "serif"].join(",")
    }
  }
}

Wordpress2016.baseFontSize = "16px"
Wordpress2016.googleFonts = [
  {
    name: 'Lora',
    styles: [
      '400',
      '700'
    ],
  },
  {
    name: 'Source Sans Pro',
    styles: [
      '400',
      '700'
    ],
  },
]
Wordpress2016.headerFontFamily = ["Lora", "serif"]
Wordpress2016.bodyFontFamily = ["Lora", "serif"]


const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
