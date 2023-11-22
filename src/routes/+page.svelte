<script>
	const yearsDeveloping = new Date().getFullYear() - 2018;

	let majorPoints = [
		{
			name: 'a self and University taught developer',
			description:
				'I started out learning code basics at a technical University. The Missouri University of Science and Tecnology in fact. There, I learned the basics of many web-dev languages, but centered on back-end development with PHP. First hire out of Uni saw me speciallizing in Front-End development instead funny enough.',
		},
		{
			name: 'a product design and UX double checker',
			description:
				'My foray into UI development saw me joining team after team upgrading web pages to modern design while following and sometimes editing UX designs. I have a passion for helping others get things done.',
		},
		{
			name: 'an excellent communicator',
			description:
				"Communication is key to any team. I'm a great communicator and I can easily help others get things done. I have a passion for sharing and solving problems.",
		},
		{
			name: `${yearsDeveloping} years of experience`,
			description: `I've had ${yearsDeveloping} years of experience in web development since University. Some of it as a quality assurance enginner, some as a back-end dev, but the vast majority as a front-end dev.`,
		},
	];
</script>

<div class="flex flex-col p-4 overflow-auto">
	<section
		id="introPage"
		class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
	>
		<div
			class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
		>
			<h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
				Hi! I'm <span class="text-orange-400">Patrick</span> Dillon
				<br />Front-End
				<span class=" text-orange-400">Developer</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="text-orange-400">most experienced tech</span> includes JavaScript
				(Angular or SvelteKit), Typescript, TailwindCSS, Eslint, Cypress, and more!
			</p>

			<button
				class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
			>
				<a
					href="mailto:pa77y@protonmail.com?subject=Hey there Patrick, I'd like to hire you"
				>
					<div
						class="absolute top-0 right-full w-full h-full bg-orange-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
					/>
					<h4 class="relative z-9">Get in touch &rarr;</h4>
				</a>
			</button>
		</div>
		<div class="relative shadow-2xl grid place-items-center">
			<img
				src={'mugShot.png'}
				alt="Mugshot of myself"
				class="object-cover z-[2] max-h-[60vh]"
			/>
		</div>
	</section>
	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div
			class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-orange-500 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-orange-500 py-4"
		>
			<h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span class=" text-orange-400">about</span> me.
			</h3>
		</div>
		<p class="mx-auto font-semibold text-lg sm:text-xl md:text-2xl">
			I am . . .
		</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each majorPoints as point, index}
				<div class="flex gap-6 sm:gap-8">
					<p
						class=" text-4xl sm:text-5xl md:text-6xl text-slate-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-semibold"
					>
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl">
							{point.name}
						</h3>
						<p>{point.description}</p>
					</div>
				</div>
			{/each}
		</div>
		<p class="mx-auto">So why not hire?</p>
	</section>
</div>
