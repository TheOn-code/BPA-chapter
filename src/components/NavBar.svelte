<script>
	let mobileMenuIsOpen = false;
	let mobileMenuItems = [
		{ text: '🏠 Home', link: '/' },
		{ text: '📢 Leadership', link: '/leadership' },
		{ text: '📸 Photos', link: '/photos' },
		{ text: '⚒️ Events', link: '/events' },
		{ text: '📋 WSAP', link: '/WSAP' },
		{ text: '👔 Attire', link: '/Attire' }
		// Add more menu items as needed
	];
</script>

<div class="relative p-4 border-b border-gray-300 navbar shadow-md">
	<div class="navbar-start">
		<a
			href="./"
			class="flex items-center w-20 h-20 md:hidden"
			on:click={() => (mobileMenuIsOpen = false)}
		>
			<img src="circle-logo.png" alt="BPA Small Logo" class="p-1" />
		</a>
		<a href="./" class="items-center hidden md:block">
			<img src="large-logo.png" alt="BPA Large Logo" class="h-20" />
		</a>
	</div>
	<div class="navbar-end">
		<label class="border-none btn btn-circle swap swap-rotate bg-base-100 md:hidden">
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
		<div class="flex-none hidden md:block">
			<ul class="menu menu-horizontal px-1">
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
	<!-- Mobile Menu -->
	<div
		class="absolute left-0 w-full mt-2 bg-white rounded-md shadow-lg menu top-full"
		class:invisible={!mobileMenuIsOpen}
	>
		<ul class="w-full px-4 py-2 space-y-2">
			{#each mobileMenuItems as item (item.text)}
				<li>
					<a
						href={item.link}
						class="btn-ghost btn-block block text-xl text-center transition duration-300 ease-in-out hover:text-primary"
						on:click={() => (mobileMenuIsOpen = false)}
					>
						{item.text}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
