/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        enveus: {
          primary: "rgb(148, 13, 254)",
          black: "rgb(18, 18, 18)",
          card: "rgb(25, 25, 25)",
          discord: "rgb(88, 101, 242)",
          authBlack: "rgb(22, 22, 22)"
        }
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
        enveus: ["WildBreathZelda", "var(--font-montserrat)", ...fontFamily.sans]
      },
      backgroundImage: {
        "hero": "url(/assets/img/bg-auth.jpeg)",
        "main": "linear-gradient(180.09deg,hsla(0,0%,7%,0) 44.9%,#121212 99.93%),radial-gradient(43.93% 43.94% at 41.07% 56.06%,rgba(27,27,27,.124) 20.31%,rgba(37,37,37,.4) 100%), url(/assets/img/main-bg.jpg)",
        "auth": "url(/assets/img/bg-auth.jpeg)",
        "authPanel": "url(/assets/img/img-auth.png)",
        "aboutUs": "url(/assets/img/bg-about-us.png)",
        "discord": "url(/assets/img/bg-discord.png)"
      }
    },
  },
  plugins: [],
}
