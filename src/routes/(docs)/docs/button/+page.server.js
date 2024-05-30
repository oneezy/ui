export function load() {
	const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
	const colorName = 'primary';
	const classes = [];

	shades.forEach((light) => {
		shades.forEach((dark) => {
			const bgClass = `bg-${colorName}-${light}-${dark}`;
			const lightText = light <= 500 ? 950 : 50;
			const darkText = dark <= 500 ? 950 : 50;
			const textClass = `text-${colorName}-${lightText}-${darkText}`;
			classes.push(bgClass, textClass);
		});
	});

	return { classes };
}
