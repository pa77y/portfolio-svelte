<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const contactInfo = [
		{
			label: 'Email',
			value: 'pa77y@protonmail.com',
		},
	];
</script>

<div class="flex flex-col">
	<section
		id="contactInformation"
		class="flex flex-col lg:justify-center text-center gap-6 md:gap-8 lg:gap-10"
	>
		<h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl mt-5">
			<span class="text-orange-400">Contact</span> Information
		</h2>
		<div
			class="flex flex-col gap-5 border-white border-opacity-50 border-2 rounded-md sm:mx-6 p-6 flex-wrap w-fit bg-black bg-opacity-30 self-center"
		>
			{#each contactInfo as info}
				<div class="flex flex-wrap text-1xl sm:text-2xl md:text-3xl">
					<h3 class="text-orange-500">{info.label}:</h3>
					<span class="ml-3">{info.value}</span>
				</div>
			{/each}
		</div>
	</section>
</div>
