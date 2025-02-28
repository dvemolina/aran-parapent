<script>
    const recomendations = [
        {description: "Tener entre 15 y 65 anos preferiblemente, no obligatorio", icon: "/svg/id.svg"},
        {description: "Ropa comoda para actividad deportiva en la montana", icon: "/svg/mountain.svg"},
        {description: "Recomendado abrigo y manga larga, incluso en verano", icon: "/svg/clothes.svg"},
        {description: "Ganas de disfrutar ver todo desde otra prespectiva", icon: "/svg/perspective.svg"},
        {description: "Practicar tu mejor graznido de buitre pirenaico", icon: "/svg/bird.svg"}
    ]
</script>

<section class="bg-neutral-200 w-full h-full flex flex-col justify-center items-center pt-26 pb-20">
    <div class="h-full w-full flex flex-col gap-4 justify-center items-center max-w-6xl">
        <h1 class="sifon text-center md:text-start text-3xl lg:text-4xl text-neutral-900 pt-8 lg:pt-0">
            ¿QUE NECESITAS PARA VOLAR?
            </h1>
        <div class="flex flex-row items-center justify-center py-6 gap-4 ">   
            {#each recomendations as { description, icon}}
                <div class="flex flex-col bg-neutral-50 shadow-lg rounded-lg p-6 hover:scale-105 gap-4">
                    <img src={icon} alt="Recomendation to fly" class=" size-8 lg:size-10 opacity-80">
                    <p class="font-sans text-md lg:text-lg text-neutral-800">{description}</p>
                </div>
            {/each}
        </div>
        <button class="cta-button-secondary w-fit self-center px-8 py-1" aria-label="Quiero Volar">Quiero Volar</button>
    </div>
</section>