<template>
	<div>
		<div id="start" class="hero pt-8">
			<div class="heroelement1 flex row-span-2 justify-end xl:justify-center w-full px-4">
				<div class="headerImg relative h-fit w-4/5 xl:w-3/5">
					<img src="img/img.png" :src="'{{ imgUrl }}'" alt="header image" class="w-full" />
				</div>
			</div>
			<div class="heroelement2 sm:flex justify-center items-center px-4 py-5 lg:justify-end lg:pr-24">
				<div>
					<h1 class="text-6xl font-bold text-green-600">Euro-Grant</h1>
					<p class="text-xl font-semibold">Geodezja z Inowrocławia</p>
				</div>

			</div>
		</div>

		<div class="container mx-auto">
			<About/>
			<Oferta/>
			<Ortofotomapy/>
			<Wspolpraca/>
		</div>
		
	</div>
</template>

<script setup lang="ts">
	const imgUrl = new URL('./img/img.png', import.meta.url).href
</script>