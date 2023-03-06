# Tailwind text clamp

### **Utility to linearly scale text proportionally to the viewport in Tailwind CSS** 

Adds a `text-clamp` utility to tailwind to linearly scale the text proportionally to the viewport using CSS `clamp()`.

<!-- The @tailwindcss/typography plugin adds a set of prose classes that can be used to quickly add sensible typographic styles to content blocks that come from sources like markdown or a CMS database. -->

## Getting Started

Install via NPM:
```
npm i @onthetools/tailwind-text-clamp
```

Add to plugins array in your `tailwind.config.js` file:

```json
module.exports = {
  plugins: [
    // ...
    require("@onthetools/tailwind-text-clamp"),
  ],
}
```

## Basic usage ##

You can now use the `text-clamp-{size}` to linearly scale the font-size of an element.

| Class   | Size at start of clamp  | Size at end of clamp  |
| -----   | ---- | ----     |
| clamp-text-xs | `font-size: 0.64rem;` |  `font-size: 0.707rem;` |
| clamp-text-sm | `font-size: 0.8rem;` |  `font-size: 1rem;` |
| clamp-text-base | `font-size: 1rem;` |  `font-size: 1.414rem;` |
| clamp-text-lg | `font-size: 1.25rem;` |  `font-size: 1.999rem;` |
| clamp-text-xl | `font-size: 1.562rem;` |  `font-size: 2.827rem;` |
| clamp-text-2xl | `font-size: 1.953rem;` |  `font-size: 3.997rem;` |
| clamp-text-3xl | `font-size: 2.441rem;` |  `font-size: 5.652rem;` |
| clamp-text-4xl | `font-size: 3.051rem;` |  `font-size: 7.992rem;` |
| clamp-text-5xl | `font-size: 3.814rem;` |  `font-size: 11.302rem;` |
| clamp-text-6xl | `font-size: 4.768rem;` |  `font-size: 15.981rem;` |
| clamp-text-7xl | `font-size: 5.960rem;` |  `font-size: 22.596rem;` |
| clamp-text-8xl | `font-size: 7.450rem;` |  `font-size: 31.951rem;` |
| clamp-text-9xl | `font-size: 9.313rem;` |  `font-size: 45.179rem;` |


<p class="text-clamp-sm">Waltz, bad nymph, for quick jigs vex.</p>
<p class="text-clamp-base">Waltz, bad nymph, for quick jigs vex.</p>
<p class="text-clamp-lg">Waltz, bad nymph, for quick jigs vex.</p>
<p class="text-clamp-xl">Waltz, bad nymph, for quick jigs vex.</p>
<p class="text-clamp-2xl">Waltz, bad nymph, for quick jigs vex.</p>

```html
<p class="text-clamp-sm ...">Waltz, bad nymph, for ...</p>
<p class="text-clamp-base ...">Waltz, bad nymph, for ...</p>
<p class="text-clamp-lg ...">Waltz, bad nymph, for ...</p>
<p class="text-clamp-xl ...">Waltz, bad nymph, for ...</p>
<p class="text-clamp-2xl ...">Waltz, bad nymph, for ...</p>
```

`text-clamp` uses Tailwind's `theme.screens` for start and end points for clamping font-sizes. By default text will start scaling between `screens.sm` (default: 640px) and `screens.2xl` (default: 1536px).

.

.



### Options
```json
module.exports = {
  plugins: [
    // ...
    require("@onthetools/tailwind-text-clamp")({
      fontScaleMin: 1.125,
      fontScaleMax: 1.5,
    }),
  ],
}
```

## Usage: 

- rootFontPx: Int 
  - font size in px of the html element - default 16
- fontScaleMin: Int 
  - minimum font size in rem - default 1.25
- fontScaleMax: Int 
  - maximum font size in rem - default 1.414,
- screenStart: String 
  - Tailwind theme.screen size for starting point of slope - default "sm"
- screenEnd: String 
  - Tailwind theme.screen size for end point of slope - default "2xl"
- viewportStart: String 
  - manually set starting point of slope in px or rem, this has priority over screenStart - default null
- viewportEnd: String 
  - manually set end point of slope in px or rem, this has priority over screenStart - default null
		

<style>
  .clamp-text-xxs {
  font-size: clamp(0.512rem , 0.5204635388458743rem + -0.02115884711468563vw, 0.5001510456157761rem);
}

.clamp-text-xs {
  font-size: clamp(0.64rem , 0.5919903010709234rem + 0.12002424732269143vw, 0.7072135785007072rem);
}

.clamp-text-sm {
  font-size: clamp(0.8rem , 0.6571428571428573rem + 0.35714285714285704vw, 1rem);
}

.clamp-text-base {
  font-size: clamp(1rem , 0.7042857142857144rem + 0.7392857142857141vw, 1.414rem);
}

.clamp-text-lg {
  font-size: clamp(1.25rem , 0.714717142857143rem + 1.3382071428571423vw, 1.9993959999999997rem);
}

.clamp-text-xl {
  font-size: clamp(1.5625rem , 0.6591814685714288rem + 2.258296328571428vw, 2.8271459439999997rem);
}

.clamp-text-2xl {
  font-size: clamp(1.953125rem , 0.49279688227428653rem + 3.650820294314284vw, 3.997584364815999rem);
}

.clamp-text-3xl {
  font-size: clamp(2.44140625rem , 0.14770764867869834rem + 5.734246503303255vw, 5.652584291849823rem);
}

.clamp-text-4xl {
  font-size: clamp(3.0517578125rem , -0.4775253133397488rem + 8.823207814599373vw, 7.992754188675648rem);
}

.clamp-text-5xl {
  font-size: clamp(3.814697265625rem , -1.5332007037766893rem + 13.369744923504223vw, 11.301754422787365rem);
}

.clamp-text-6xl {
  font-size: clamp(4.76837158203125rem , -3.240420683533097rem + 20.021980663910867vw, 15.980680753821336rem);
}

.clamp-text-7xl {
  font-size: clamp(5.9604644775390625rem , -5.922548457006869rem + 29.707532336364828vw, 22.596682585903366rem);
}

.clamp-text-8xl {
  font-size: clamp(7.450580596923828rem , -10.050225531321551rem + 43.752015320613445vw, 31.951709176467357rem);
}

.clamp-text-9xl {
  font-size: clamp(9.313225746154785rem , -16.305696417680974rem + 64.0473054095894vw, 45.179716775524845rem);
}

</style>