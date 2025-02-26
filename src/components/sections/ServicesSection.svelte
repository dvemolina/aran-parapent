<script>

	import ServiceCard from "../ServiceCard.svelte";
    
    const services = [
        {title: 'Vuelo Biplaza', description:'Disfruta de un vuelo desde diversas zonas del Pirineo. Puede ser un vuelo tranquilo de 10-15 minutos o si las condiciones lo permiten un vuelo mas potente (termico) de unos 10-30 minutos que no te dejara indiferente.', imageUrl: 'preparing.jpg'},
        {title: 'Hike & Fly', description: 'Actividad que combina andar 1-2 horas con el parapente a la espalda y salir de un sitio poco accesible y privilegiado de vuelo. Para aquellos que prefieren ganarse el descenso. Vuelo de 15-30 minutos (depende condiciones).', imageUrl: 'hike-fly.jpg'}
    ]

</script>
<section class="h-full w-full flex flex-col justify-center items-center gap-10 px-4 lg:px-18 py-16 lg:py-28">
        <div class="flex flex-col gap-2 w-full">
            <h1 class="sifon text-center text-3xl lg:text-4xl text-neutral-900">
               DESCUBRE NUESTROS VUELOS <br>
            <span class="text-[2rem] lg:text-[2.5rem]">MAS ESPECIALES</span></h1>
            <p class="font-sans text-md lg:text-xl text-center text-neutral-900 pt-4">Vuelos tranquilos de tarde, vuelos termicos de adrenalina o actividad combinada de Trekking y Vuelo desde puntos escondidos.</p>
        </div>
        <div class="services w-full flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center">
            {#each services as service}
            <ServiceCard {service}/>
            {/each}
        </div>
        <div class="flex flex-col items-center justify-center text-neutral-800 py-6">
            
            <ul>
                <li> - Tener entre 10 y 65 anos</li>
                <li> - Ropa comoda para actividad deportiva</li>
                <li> - Recomendado abrigo y manga larga</li>
                <li> - Ganas de ver todo desde otra prespectiva</li>
                <li> - Practicar tu mejor graznido de buitre</li>
            </ul>
        </div>
        <button class="cta-button-secondary w-fit self-center px-4 py-1" aria-label="Quiero Volar">Quiero Volar</button>
</section>

<style>
   section{
    background: var(--primaryGradientVertical); 
   }
</style>