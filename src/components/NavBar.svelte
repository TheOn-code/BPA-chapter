<script>
	let mobileMenuIsOpen = false;
	let mobileMenuItems = [
		{ text: 'Home', link: '/' },
		{ text: 'About', link: '/about' },
		{ text: 'Services', link: '/services' }
		// Add more menu items as needed
	];
</script>

<div class="relative px-6 pt-6 border-b border-gray-300 navbar">
	<div class="navbar-start">
		<a href="./" class="w-20 h-20">
			<img src="circle-logo.png" alt="BPA Small Logo" class="h-16" />
		</a>
	</div>
	<div class="navbar-end">
		<label class="border-none btn btn-circle swap swap-rotate bg-base-100">
			<!-- this hidden checkbox controls the state -->
			<input type="checkbox" bind:checked={mobileMenuIsOpen} />

			<!-- hamburger icon -->
			<svg
				class="fill-current swap-off"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
			>
				<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
			</svg>

			<!-- close icon -->
			<svg
				class="fill-current swap-on"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
			>
				<polygon
					points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
				/>
			</svg>
		</label>
	</div>
	<!-- Mobile Menu -->
	<div
		class="absolute left-0 w-full mt-2 bg-white rounded-md shadow-lg menu top-full"
		class:invisible={!mobileMenuIsOpen}
	>
		<ul class="px-4 py-2 space-y-2">
			{#each mobileMenuItems as item (item.text)}
				<li>
					<a
						href={item.link}
						class="block text-xl text-center transition duration-300 ease-in-out hover:text-primary"
						on:click={() => (mobileMenuIsOpen = false)}
					>
						{item.text}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
