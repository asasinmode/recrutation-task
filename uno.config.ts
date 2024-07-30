import {
	defineConfig,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
	],
	blocklist: ['container'],
	shortcuts: [
		{
			'flex-center': 'flex justify-center items-center',
		},
		[/^hoverable[:-](.+)$/, ([, c]) => `hover:${c} focus-visible:${c}`],
	],
});