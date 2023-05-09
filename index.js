const plugin = require("tailwindcss/plugin");

// Mostly pinched from https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
const clampedFonts = (options = {}) => {

	// optional Custom class name for utility
	const utilityClassName = options.utilityClassName || 'text'

	const pxToEms = (value) => {
		// if px / 16
		const num = parseInt(value, 10);
		const unit = value.replace(/[0-9]/g, "");
		return unit === "px" ? num / options.rootFontPx : num;
	};

	const scale = {
		min: options.fontScaleMin,
		max: options.fontScaleMax,
	};

	const vp = {
		min: options.viewportStart,
		max: options.viewportEnd,
	};

	const fontSizes = [
		"base",
		"lg",
		"xl",
		"2xl",
		"3xl",
		"4xl",
		"5xl",
		"6xl",
		"7xl",
		"8xl",
		"9xl",
	];
	const fontSizesSmall = ["sm", "xs", "xxs"];

	const largeFonts = Object.assign(
		...fontSizes.map((key, i) => {
			// set min and max font sizes using font scale
			const fs = {
				min: scale.min ** i,
				max: scale.max ** (i + 1),
			};

			// set viewport widths in rem for clamping. e.g min font size will be @ 25rem screen with and max font size @ 85rem
			const slope = (fs.max - fs.min) / (pxToEms(vp.max) - pxToEms(vp.min));
			const yAxisIntersection = -pxToEms(vp.min) * slope + fs.min;

			return {
				[`.${utilityClassName}-${key}`]: {
					"font-size": `clamp(${fs.min}rem , ${yAxisIntersection}rem + ${
						slope * 100
					}vw, ${fs.max}rem)`,
				},
			};
		})
	);
	const smallFonts = Object.assign(
		...fontSizesSmall.map((key, i) => {
			const fs = {
				min: 1 / scale.min ** (i + 1),
				max: 1 / scale.max ** i,
			};

			const slope = (fs.max - fs.min) / (pxToEms(vp.max) - pxToEms(vp.min));
			const yAxisIntersection = `${-pxToEms(vp.min) * slope + fs.min}`; // make this unit

			return {
				[`.${utilityClassName}-${key}`]: {
					"font-size": `clamp(${fs.min}rem , ${yAxisIntersection}rem + ${
						slope * 100
					}vw, ${fs.max}rem)`,
				},
			};
		})
	);
	console.log(largeFonts);
	return {
		...smallFonts,
		...largeFonts,
	};
};

module.exports = plugin.withOptions(function (options = {}) {
	return function ({ addUtilities, theme }) {
		/**
		* USAGE: takes parameters
			* - rootFontPx: Int 
							- font size in px of the html element - default 16
			* - fontScaleMin: Int 
							- minimum font size in rem - default 1.25
			* - fontScaleMax: Int 
							- maximum font size in rem - default 1.414,
			* - screenStart: String 
							- Tailwind theme.screen size for starting point of slope - default "sm"
			* - screenEnd: String 
							- Tailwind theme.screen size for end point of slope - default "2xl"
			* - viewportStart: String 
							- manually set starting point of slope in px or rem, this has priority over screenStart - default null
			* - viewportEnd: String 
							- manually set end point of slope in px or rem, this has priority over screenStart - default null
		*/
		const screens = theme("screens");
		const defaultOptions = {
			rootFontPx: 16,
			fontScaleMin: 1.25,
			fontScaleMax: 1.414,
		};
		options = {
			...defaultOptions,
			...options,
			viewportStart: options.viewportStart
				? options.viewportStart
				: screens[options.screenStart] || screens.sm,
			viewportEnd: options.viewportEnd
				? options.viewportEnd
				: screens[options.screenEnd] || screens["2xl"],
		};
		addUtilities({
			...clampedFonts({ ...options }),
		});
	};
});

