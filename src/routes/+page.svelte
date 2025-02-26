<script lang="ts">
	import AboutSection from '../components/sections/AboutSection.svelte';

   
	import HeroSection from '../components/sections/HeroSection.svelte';
	import ServicesSection from '../components/sections/ServicesSection.svelte';
	import SocialProof from '../components/sections/SocialProof.svelte';
  

    let { data } = $props();
    
</script>
<div class="h-full">

	<HeroSection/>
	<SocialProof reviews={data.reviews}/>
	<ServicesSection/>
	<AboutSection/>
</div>
