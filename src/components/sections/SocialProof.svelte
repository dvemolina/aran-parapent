<script lang="ts">
	import { onMount } from "svelte";
	import ReviewCard from "../ReviewCard.svelte";
	import { fade } from "svelte/transition";


    let { reviews } = $props()
    let currentIndex = $state(0);
	let interval: NodeJS.Timeout | undefined = $state();

    function goToMaps() {
        window.location.href = 'https://maps.app.goo.gl/YFqf97miC2ekGvPdA'
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

<section class="socialproof bg-neutral-200 h-full w-full flex flex-col-reverse justify-center md:flex-row items-center gap-4 px-4 py-16 md:py-28">
	<div class="flex flex-col h-full justify-center w-full items-center gap-8 md:gap-4 px-2 md:ml-16">
        <div class="flex flex-col gap-2 justify-center items-center">
            <h1 class="sifon text-center text-3xl lg:text-4xl text-neutral-900 pt-8 lg:pt-0">
                TU SUEÑO Y EL NUESTRO <br>
                <span class=" text-[2rem] lg:text-[2.5rem]">HECHO REALIDAD</span></h1>
                <p class="font-sans text-md md:text-xl text-center text-neutral-800">Volar en Parapente en las montanas de casa es el sueno y privilegio de nuestra vida. Unete a los que ya lo han compartido con nosotros:</p>
        </div>
        <div class="carousel flex flex-row justify-center items-center gap-2 md:gap-8" transition:fade>
            {#if reviews.length > 0}
            <button onclick={prevReview} class="hover:cursor-pointer opacity-30 hover:opacity-80">
                <img src="/svg/left.svg" alt="Previous Review" class="max-w-8">
            </button>
            <ReviewCard review={reviews[currentIndex]} />
            <button onclick={nextReview} class="hover:cursor-pointer opacity-30 hover:opacity-80">
                <img src="/svg/right.svg" alt="Next Review" class="max-w-8">
            </button>
            {:else}
            <p class="font-semibold text-neutral-800">Cargando Google Reviews...</p>
            {/if}
        </div>
        <button class="hover:cursor-pointer hover:bg-neutral-900 shadow-sm rounded-full bg-neutral-900/30 px-3 py-1 w-fit" onclick={() => goToMaps()} aria-label="Google Reviews"><p class="text-sm font-normal text-neutral-50">Ir a Google Reviews</p></button>
    </div>
    <div class="flex flex-col h-full w-full justify-center items-center">
        <div class="video-container rounded-xl border border-neutral-500 shadow-lg">
            <video controls poster="/video-cover.jpg">
                <track kind="captions">
                <source src="test-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
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