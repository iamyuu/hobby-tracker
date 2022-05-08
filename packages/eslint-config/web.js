/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	extends: ['custom', 'kentcdodds/jsx-a11y', 'kentcdodds/jest'],
	settings: {
		jest: {
			version: 27,
		},
	},
	rules: {
		'no-console': 'warn',
	},
};
