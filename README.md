# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## colour
text-colour

## background
backgroundColor:value
bg-color
bg-color-value

## border
borderColor:value

border-color(black/white)
border-color-value

## spacing 
marginTop:value |padding:value

m-value | p-value | mt-value |mx-value | pt-value

## sizes

p-1 | (1-4px,2-8px)

xs-extra small - 12
sm - small   - 14
base- base   - 16
md - medium  
l=large
xl - extra large

example class="sm:text-5xl md:text-7xl "

## height|width

width-> w-value |w-screen | w-1/2 |w-full
height ->h-value

## decoration

font-bold underline 

## alignments

text-(right/top/bottom/center/left)
## flexbox
display:flex

flex
flex-col
flex-row
justify-(right/top/bottom/center/left)
items-center
gap-value

## grid
grid

## shadow
shadow-xs

## hover
hover:bg-red-400