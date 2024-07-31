import { ViteSSG } from 'vite-ssg/single-page';
import App from './App.vue';

import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import '~/assets/index.css';

export const createApp = ViteSSG(App);
