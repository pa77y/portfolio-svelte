import type { SvelteComponent } from 'svelte';

export interface HCaptchaProps {
	sitekey?: string;
	apihost?: string;
	hl?: string;
	reCaptchaCompat?: boolean;
	theme?: CaptchaTheme;
	size?: string;
}

export declare class HCaptcha extends SvelteComponent {
	$$prop_def: HCaptchaProps;
}

export enum CaptchaTheme {
	DARK = 'dark',
	LIGHT = 'light',
}
