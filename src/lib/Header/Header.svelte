<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		DarkMode,
	} from 'flowbite-svelte';
</script>

<Navbar
	class="bg-opacity-0 dark:bg-opacity-60 border-b-2 border-white border-opacity-10 custom-navHamburger"
>
	<NavBrand href="/" class="flex-1">
		<!-- <img class="mr-3 h-6 sm:h-9 rounded-full" src="/fire.gif" alt="Fire Gif" /> -->
		<span
			class="self-center whitespace-nowrap text-xl text-white dark:text-white"
			><strong>Patrick</strong> Dillon</span
		>
	</NavBrand>
	<div class="flex md:order-2">
		<DarkMode />
		<NavHamburger 
			class="bg-inherit hover:bg-white hover:bg-opacity-50 text-white"
		/>
	</div>
	<NavUl>
		<NavLi href="/" class="text-white">Home</NavLi>
		<NavLi href="/contact" class="text-white">Contact</NavLi>
	</NavUl>
</Navbar>

<style lang="scss">
	:global(.custom-navHamburger ul) {
		background-color: unset;
	}
</style>
