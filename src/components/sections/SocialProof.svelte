<script lang="ts">
	import { onMount } from 'svelte';
	import ReviewCard from '../ReviewCard.svelte';
	import { fade } from 'svelte/transition';
	let { reviews } = $props();

	let currentIndex = $state(0);
	let interval: NodeJS.Timeout | undefined = $state();

	function goToMaps() {
		window.location.href = 'https://maps.app.goo.gl/YFqf97miC2ekGvPdA';
	}
	onMount(() => {
		startAutoSlide();
	});

	function startAutoSlide() {
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % reviews.length;
		}, 6000);
	}

	function prevReview() {
		clearInterval(interval);
		currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
		startAutoSlide();
	}

	function nextReview() {
		clearInterval(interval);
		currentIndex = (currentIndex + 1) % reviews.length;
		startAutoSlide();
	}
</script>

<section
	id="social-section"
	class="socialproof flex h-full w-full flex-col-reverse items-center justify-center gap-4 bg-neutral-200 px-4 py-16 md:flex-row md:py-28"
>
	<div class="flex h-full w-full flex-col items-center justify-center gap-8 px-2 md:ml-16 md:gap-4">
		<div class="flex flex-col items-center justify-center gap-2">
			<h1 class="sifon pt-8 text-center text-3xl text-neutral-900 lg:pt-0 lg:text-4xl">
				TU SUEÑO Y EL NUESTRO <br />
				<span class=" text-[2rem] lg:text-[2.5rem]">HECHO REALIDAD</span>
			</h1>
			<p class="text-md text-center font-sans text-neutral-800 md:text-xl">
				Volar en Parapente en las montañas de casa es el sueño y privilegio de nuestra vida. Únete a
				los que ya lo han compartido con nosotros:
			</p>
		</div>
		<div class="carousel flex flex-row items-center justify-center gap-2 md:gap-8" transition:fade>
			{#if reviews.length > 0}
				<button onclick={prevReview} class="opacity-30 hover:cursor-pointer hover:opacity-80">
					<img src="/svg/left.svg" alt="Previous Review" class="max-w-8" />
				</button>
				<ReviewCard review={reviews[currentIndex]} />
				<button onclick={nextReview} class="opacity-30 hover:cursor-pointer hover:opacity-80">
					<img src="/svg/right.svg" alt="Next Review" class="max-w-8" />
				</button>
			{:else}
				<p class="font-semibold text-neutral-800">Cargando Google Reviews...</p>
			{/if}
		</div>
		<button
			class="w-fit rounded-full bg-neutral-900/30 px-3 py-1 shadow-sm hover:cursor-pointer hover:bg-neutral-900"
			onclick={() => goToMaps()}
			aria-label="Google Reviews"
			><p class="text-sm font-normal text-neutral-50">Ir a Google Reviews</p></button
		>
	</div>
	<div class="flex h-full w-full flex-col items-center justify-center">
		<div class="video-container rounded-xl border border-neutral-500 shadow-lg">
			<video controls poster="/video-cover.webp">
				<track kind="captions" />
				<source src="aran-parapent-video.webm" type="video/mp4" />
				YTu navegador no es compatible con el video.
			</video>
		</div>
	</div>
</section>

<style>
	.carousel {
		height: 250px;
		position: relative;
	}

	.video-container {
		max-width: 375px; /* or fixed width (e.g., 300px) */
		width: 100%;
		height: 525px;
		overflow: hidden;
	}

	video {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Or "contain" if you want to preserve the whole video within the container */
	}
</style>
