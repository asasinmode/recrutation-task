import antfu from '@antfu/eslint-config';

export default antfu({
	formatters: true,
	unocss: true,
	stylistic: {
		semi: true,
		indent: 'tab',
	},
	rules: {
		'curly': ['error', 'all'],
		'no-labels': 'off',
		'style/brace-style': ['error', '1tbs'],
		'ts/no-unused-expressions': 'off',
	},
});
