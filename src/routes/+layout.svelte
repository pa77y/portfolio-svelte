<script lang="ts">
	import Header from '$lib/Header/Header.svelte';
	import Particles from '$lib/Particles/Particles.svelte';
	import '../app.scss';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Particles />
<main
	class="absolute left-0 top-0 h-full w-full flex flex-col text-white dark:text-white overflow-auto"
>
	<Header />
	<slot />
</main>

<svelte:head>
	<title>Patrick Dillon</title>
	<meta name="description" content="Personal website of Patrick Dillon" />
</svelte:head>
