<script lang="ts">
	import AboutSection from '../components/sections/AboutSection.svelte';

   
	import HeroSection from '../components/sections/HeroSection.svelte';
	import MapsSection from '../components/sections/MapsSection.svelte';
	import ServicesSection from '../components/sections/ServicesSection.svelte';
	import SocialProof from '../components/sections/SocialProof.svelte';
	import FAQSection from '../components/sections/FAQSection.svelte';

    let { data } = $props();
    
</script>
<div class="h-full">

	<HeroSection />
	<SocialProof reviews={data.reviews}/>
	<ServicesSection/>
	<FAQSection/>
	<AboutSection/>
	<MapsSection />
</div>
