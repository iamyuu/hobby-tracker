/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	extends: ['kentcdodds'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': ['off'],
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
		'import/prefer-default-export': 'off',
		'jsdoc/require-property-description': 'off',
		'jsdoc/require-param-description': 'off',
		'jsdoc/require-returns': 'off',
		'no-restricted-imports': ['error', { patterns: ['~/features/*/*'] }],
		'no-warning-comments': 'off',
		radix: ['error', 'as-needed'],
	},
};
