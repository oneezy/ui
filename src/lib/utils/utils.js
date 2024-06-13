export function convertPathToTitle(path) {
	const parts = path.split('/').filter(Boolean);
	if (parts.length === 0) return 'Home';

	const lastPart = parts[parts.length - 1];
	return lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
}

export function formatPhoneNumber(phoneNumber) {
	// Remove all non-digit characters
	let cleaned = phoneNumber.replace(/\D/g, '');

	// Remove leading '1' if present
	if (cleaned.startsWith('1')) {
		cleaned = cleaned.substring(1);
	}

	// Check if the input is of correct length
	if (cleaned.length !== 10) {
		throw new Error('Invalid phone number length. Expected 10 digits.');
	}

	// Format the cleaned number
	const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
	if (match) {
		return `(${match[1]}) ${match[2]}-${match[3]}`;
	}

	return null;
}
