export function defaultProps(props) {
	const defaults = {
		icon: null,
		// type
		button: 'button',
		href: null,
		// states
		disabled: false,
		neutral: false,
		// styles
		primary: false,
		secondary: false,
		accent: false,
		tonal: false,
		outline: false,
		ghost: false,
		glass: false,
		link: false,
		invert: false,
		// position
		left: false,
		right: false,
		// sizes
		xs: false,
		sm: false,
		md: false,
		lg: false,
		xl: false,
		// other
		children: null
	};

	return { ...defaults, ...props };
}
