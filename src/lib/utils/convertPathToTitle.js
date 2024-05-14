export function convertPathToTitle(path) {
	const parts = path.split('/').filter(Boolean);
	if (parts.length === 0) return 'Home';

	const lastPart = parts[parts.length - 1];
	return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
}
