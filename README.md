# makes-styled

this repo demonstrates the usage of [Emotion 11](https://deploy-preview-1600--emotion.netlify.app/docs/introduction) (still in Beta) with [Styled-System](https://styled-system.com/getting-started) and *themes*.

> the reason I opted for the Emotion 11 Beta release was due to this current bug in Emotion 10 (which prevents the usage of a "themed styled" instance being able to use Components as selectors): https://github.com/emotion-js/emotion/issues/1305  
all of the other concepts here should still apply for the stable release of Emotion 10, but likely not Emotion 9 (LG's version)

## getting started

to run this example, simply pull down the code and:

```cmd
yarn && yarn start
```

you should be able to view the page at `http://localhost:8080`.

## what is going on?

there are few pieces in play here...
  * Emotion provides a `ThemeProvider` which holds the React context for our theme, allowing us to leverage that `theme` object when using `css`, `styled`, or even just the `useTheme` hook
  * Emotion provides a `Global` component that injects global styles to your app (we are leveraging Meyers Web reset as well as configuring a basic "dark mode")
  * Emotion's Babel plugin is being used so we can use Styled Components as CSS selectors (check out the `List` component)
  * Styled-System provides CSS-like props that can be injected to Styled Components or used in `css` calls
    - the benefit here is not having to re-define logic for how a CSS style like `width` may be processed, it can simply be shared with any component that wants to expose a `width` prop
    - **Responsive Styles:** instead of just passing a value, you can pass an array or object of values that correspond to prop values at various breakpoints
  * Theme specification is according to [System UI](https://system-ui.com/theme/)

## the theme

```js
{
  breakpoints: ['40em', '52em', '64em', '80em'],
  colors: { /* custom color definitions */ },
  space: [4, 8, 16, 24, 32, 64, 88], // https://wiki.corp.mongodb.com/pages/viewpage.action?pageId=100263649
  sizes: [16, 24, 32, 48, 64, 96, 128, 256, 512],
  fonts: { body: 'Akzidenz-Grotesk Std', code: 'Source Code Pro' },
  fontSizes: [12, 14, 16, 18, 32, 60],
  fontWeights: { regular: 400, medium: 500 },
  lineHeights: {},
  letterSpacings: {},
  borders: {},
  borderWidths: {},
  borderStyles: {},
  radii: {},
  shadows: {},
  zIndices: {},
}
```

the keys of the theme are important with respect to using `styled-system`.  that is because for certain CSS properties, `styled-system` will automatically select the theme scale (via it's respective key) and use that to resolve the property value.

as an example, one could specify the prop `fontFamily="code"` and the resulting `font-family` style on the rendered element will be `Source Code Pro`.  similarly, `m="2"` would set `margin` to be `16px` all around (as it's the `index: 2` of the `space` array).

check out https://styled-system.com/table to see what theme scales are passed to what css props.
