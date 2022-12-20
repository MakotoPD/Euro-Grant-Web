<template>
	<div>
		<div class="flex justify-between relative w-full py-2 px-2">
			<NuxtLink to="/">
				<img src="/vectors/logo.svg" alt="eurogrant img" loading="lazy" placeholder="logo" >
			</NuxtLink>

			<div class="flex space-x-4">
				<NuxtLink to="/#start" class="p-0.5">Start</NuxtLink>
				<NuxtLink to="/#onas" class="p-0.5">O nas</NuxtLink>
				<NuxtLink to="/#oferta" class="p-0.5">Oferta</NuxtLink>
			</div>

			<div class="hidden md:flex">
				<div class="flex items-center">
					<a href="tel:609990376">
						<img src="/img/phone.png" alt="tel icon" />
					</a>
				</div>
				<div class="flex items-center pl-2">
					<a href="mailto:euro-grant.info@wp.pl">
						<img src="/img/mail.png" alt="mail to" />
					</a>
				</div>
			</div>

			<img src="/vectors/waves1.svg" alt="" class="absolute left-0 top-0 -z-10 opacity-50" />
			<img src="/vectors/waves2.svg" alt="" class="absolute right-0 top-36 -z-10" />
		</div>
		<slot/>

		<div class="footer w-full flex flex-col items-center pt-8 pb-1 text-center">
			<div>
				<div>
					<img src="/vectors/logo-white.svg" alt="logo euro-grant" />
				</div>
				<div class="flex w-full justify-center text-white">
					<NuxtLink to="/#start" class="p-2">Start</NuxtLink>
					<NuxtLink to="/#onas" class="p-2">O nas</NuxtLink>
					<NuxtLink to="/#oferta" class="p-2">Oferta</NuxtLink>
					<NuxtLink to="/rodo" class="p-2">Rodo</NuxtLink>
				</div>
			</div>
			<div class="pt-16">
				<p class="text-white">
					© 2021. Euro-Grant. All rights reserved. Design & develop by <a href="https://makoto.click" target="_blank" class="text-orange-500 underline">Makoto</a>.
				</p>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">

</script>