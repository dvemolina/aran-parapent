<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition'; // Import fade transition
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
  
	// Set the loading state
	let { children } = $props();
	let loading = $state(true);
  
	// On mount, set loading to false after the page loads
	onMount(() => {
		setTimeout(() =>
			loading = false
		, 2500
		)
	});
  </script>
  
  <style>
	.loader {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background: white;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  z-index: 9999;
	}
  </style>
  
  <!-- Apply the fade transition -->
  {#if loading}
	<div class="loader flex flex-col gap-2" transition:fade={{ duration: 300 }}>
	  <!-- Lottie loader -->
	  <dotlottie-player 
		src="loader.lottie" 
		background="transparent" 
		speed="1" 
		style="width: 300px; height: 300px" 
		loop 
		autoplay>
	  </dotlottie-player>
	  <p class="font-semibold text-neutral-800 text-center">Espera un segundo, estamos aterrizando...</p>
	</div>
  {:else}
	<!-- Main content after loading -->
	<ParaglideJS {i18n}>
	  <Header />
	  {@render children()}
	  <Footer />
	</ParaglideJS>
  {/if}
  