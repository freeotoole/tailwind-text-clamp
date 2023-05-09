# Tailwind text clamp

### **Utility to linearly scale text proportionally to the viewport in Tailwind CSS** 

Adds a `text-clamp` utility to tailwind to linearly scale the text proportionally to the viewport using CSS `clamp()`.

<!-- The @tailwindcss/typography plugin adds a set of prose classes that can be used to quickly add sensible typographic styles to content blocks that come from sources like markdown or a CMS database. -->

## Getting Started

Install via NPM:
```bash
npm i @onthetools/tailwind-text-clamp
```

Add to plugins array in your `tailwind.config.js` file:

```js
module.exports = {
  plugins: [
    // ...
    require("@onthetools/tailwind-text-clamp"),
  ],
}
```
You can now use the `text-{size}` utility to linearly scale the font-size of an element.

| Class   | Size at start of clamp  | Size at end of clamp  |
| -----   | ---- | ----     |
| text-xs | `font-size: 0.64rem;` |  `font-size: 0.707rem;` |
| text-sm | `font-size: 0.8rem;` |  `font-size: 1rem;` |
| text-base | `font-size: 1rem;` |  `font-size: 1.414rem;` |
| text-lg | `font-size: 1.25rem;` |  `font-size: 1.999rem;` |
| text-xl | `font-size: 1.562rem;` |  `font-size: 2.827rem;` |
| text-2xl | `font-size: 1.953rem;` |  `font-size: 3.997rem;` |
| text-3xl | `font-size: 2.441rem;` |  `font-size: 5.652rem;` |
| text-4xl | `font-size: 3.051rem;` |  `font-size: 7.992rem;` |
| text-5xl | `font-size: 3.814rem;` |  `font-size: 11.302rem;` |
| text-6xl | `font-size: 4.768rem;` |  `font-size: 15.981rem;` |
| text-7xl | `font-size: 5.960rem;` |  `font-size: 22.596rem;` |
| text-8xl | `font-size: 7.450rem;` |  `font-size: 31.951rem;` |
| text-9xl | `font-size: 9.313rem;` |  `font-size: 45.179rem;` |

_____

## Basic usage ##

Just add your text-clamp class to any text you want to linearly scale:

```html
<h2 class="text-2xl">III. A Case of Identity</h2>
<p class="text-base">“My dear fellow,” said Sherlock Holmes as we sat on either side of the fire in his lodgings at Baker Street, “life is infinitely stranger than anything which the mind of man could invent. We would not dare to conceive the things which are really mere commonplaces of existence.” </p>
<p class="text-sm"><cite>The Adventures of Sherlock Holmes</cite> by Arthur Conan Doyle</p>
```



### Options
You can pass options to the plugin via `tailwind.config.js`:
```js
module.exports = {
  plugins: [
    // ...
    require("@onthetools/tailwind-text-clamp")({
      utilityClassName: 'clamp-text',
      fontScaleMin: 1.125,
      fontScaleMax: 1.333,
      screenStart: 'md',
      screenEnd: 'xl', 
    }),
  ],
}
```

## Available options: 

### Using a custom class name for clamping
By default clamp is applied to the default tailwind font-size utility (`.text.sm`, `.text-base`, `.text-lg`, etc...). If you'd like to retain tailwind defaults and use a custom class name for clamping use the `utilityClassName` option.

```js
{
  utilityClassName: 'clamp-text'
}
```
Now you can apply the clamping conditionally while retaining the default tailwind size utilities.

```html
<h2 class="text-clamp-2xl">III. A Case of Identity</h2>
<p class="text-base">“My dear fellow,” said Sherlock Holmes as we sat on either side of the fire in his lodgings at Baker Street, “life is infinitely stranger than anything which the mind of man could invent. We would not dare to conceive the things which are really mere commonplaces of existence&hellip;” </p>
<p class="text-sm"><cite>The Adventures of Sherlock Holmes</cite> by Arthur Conan Doyle</p>
```

### Changing the breakpoints between the scale is active:

`text-clamp` picks up breakpoint values Tailwind's `theme.screens` for start and end breakpoints for clamping font-sizes. By default text will start scaling between `screens.sm` and `screens.2xl`.

```js
// Default values are:
{
  screenStart: 'sm', // default: 640px
  screenEnd: '2xl', // default: 1536px
}
```
**Note:** If these screens are not present in your tailwind.config.js you will have to set the screenStart and screenEnd values to values that exist in your tailwind.config.js `theme.screens` object or set the breakpoints manually using viewportStart and viewportEnd.

```js
// Note viewport values ALWAYS take priority over screen values:
{
  viewportStart: '380px', // Text starts scaling here
  viewportEnd: '1556px', // Text stops scaling here
}
```


### Changing the font scale at start and end screens:

I'm a huge fan of using the font scales over at [typescale.com](https://typescale.com/) so the default font is 1.250 (Major Third) at the smallest screen size and 1.414 (Augmented Fourth) at the largest. You can change the min and max font scale.

```js
// Default values are:
{
  fontScaleMin: 1.25, // Scale of font-size before starting breakpoint
  fontScaleMax: 1.414,// Scale of font-size after ending breakpoint
}
```

### Changing root HTML font-size

On the off chance your not using the default 16px font-size on the root html element you will need to set the rootFontPx to ensure the match converting px to ems is accurate. Really I have no idea why anyone would need to change this??? But if you're some sort of monster you can do this.

```js
{
  rootFontPx: 12, // Must match font-size in px of html element
}
```
