import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: {
					name: 'Roboto',
					weights: [400, 500, 800],
				},
			},
		}),
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
