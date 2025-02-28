<script>

	import ServiceCard from "../ServiceCard.svelte";
    
    const services = [
        {title: 'Vuelo Biplaza', description:'Disfruta de un vuelo desde diversas zonas del Pirineo. Puede ser un vuelo tranquilo de 10-15 minutos o si las condiciones lo permiten un vuelo mas potente (térmico) de unos 10-30 minutos que no te dejara indiferente.', imageUrl: 'preparing.jpg', price: "150"},
        {title: 'Hike & Fly', description: 'Actividad que combina trekking guiado de 1-2 horas con el parapente a la espalda y salir de un sitio poco accesible y privilegiado de vuelo. Para aquellos que prefieren ganarse el descenso. Vuelo de 15-30 minutos (depende condiciones).', imageUrl: 'hike-fly.jpg', price: "250"}
    ]

</script>
<section id="services-section" class="h-full w-full flex flex-col justify-center items-center gap-10 px-4 lg:px-18 py-16 lg:py-28">
        <div class="flex flex-col gap-2 w-full">
            <h1 class="sifon text-center text-3xl lg:text-4xl text-neutral-900">
               DESCUBRE NUESTROS VUELOS <br>
            <span class="text-[2rem] lg:text-[2.5rem]">MAS ESPECIALES</span></h1>
            <p class="font-sans text-md lg:text-xl text-center text-neutral-900 pt-4">Vuelos tranquilos de tarde, vuelos térmicos de adrenalina o actividad combinada de Trekking y Vuelo desde puntos escondidos.</p>
        </div>
        <div class="services w-full flex flex-col md:flex-row gap-6 lg:gap-8 justify-center items-center">
            {#each services as service}
            <ServiceCard {service}/>
            {/each}
        </div>
        
</section>

<style>
   section{
    background: var(--primaryGradientVertical); 
   }
</style>