<script lang="ts">
	import { onMount } from 'svelte';
	//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
	import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
	import config from './config.json';

	let ParticlesComponent;
	const particleConfig = config;

	onMount(async () => {
		const module = await import('svelte-particles');

		ParticlesComponent = module.default;
	});

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let onParticlesLoaded = (event) => {
		// const particlesContainer = event.detail.particles;
		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let particlesInit = async (engine) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(main);
		await loadSlim(engine);
	};
</script>

<div class="absolute h-full w-full lightModeGradient dark:darkModeGradient">
	<svelte:component
		this={ParticlesComponent}
		id="tsparticles"
		options={particleConfig}
		on:particlesLoaded={onParticlesLoaded}
		{particlesInit}
	/>
</div>

<style lang="scss">
	.lightModeGradient {
		background: linear-gradient(to top, #ff8a4c, #5145cd);
		opacity: 0.7;
	}
	:is(.dark .dark\:darkModeGradient) {
		background: linear-gradient(to top, #000000, #000000);
	}
</style>
