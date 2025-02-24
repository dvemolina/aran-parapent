<div class="@container/wrapper overlay w-full h-screen relative">
    <div class="flex flex-col @5xl:flex-row h-full items-center justify-end @max-6xl:bg-[url('portrait-paraglide-cloud.jpg')] @5xl:bg-[url('landscape-paraglide.jpg')] bg-cover bg-center @5xl:bg-right-bottom gap-6
    ">
        <div class="h-2/5 @5xl:h-full @5xl:w-2/5"></div>
        <div class="content h-4/6 @5xl:h-full @5xl:w-3/5 z-10 flex flex-col justify-center items-center w-full gap-4">
            <div class="headings flex flex-col justify-center items-center w-full gap-4">

                <p class="sifon text-white text-4xl @5xl:text-7xl font-bold text-center">
                    VUELA ENTRE <br><span class="text-gradient text-outline text-[2.5rem] @5xl:text-[4.75rem]">CIMAS Y NUBES</span><br>
                    <span class="text-xl @5xl:text-4xl">LOS PIRINEOS A TUS PIES</span>
                </p>

                <p class="font-sans text-md @5xl:text-2xl text-center text-neutral-300"> Vuelos Biplaza en Parapente en Val d'Aran, <br>Ribagorza y rincones secretos del Pirineo. <br><span class="font-semibold text-neutral-200">¿Te atreves a descubrirlos?</span></p>
            </div>
                
            <button aria-label="Reserva Tu Vuelo" class="cta-button text-background @5xl:mt-6"><p class="text-xl @5xl:text-3xl @5xl:py-4 @5xl:px-8 text-background font-sans font-semibold">Reserva Tu Vuelo</p></button>
        </div>
    </div>
</div>

<style>
    .overlay::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, 
      rgba(0, 0, 0, 0.544) 15%,  /* Darkest part at the bottom (10% of the height) */
      rgba(0, 0, 0, 0.363) 40%,  /* Mid transition (30% of the height) */
      rgba(0, 0, 0, 0.127) 60%,  /* Light fade at 60% */
      rgba(0, 0, 0, 0.048) 100%         /* Fully transparent at the top */
    );
  }

  @media (width >= 64rem) {
    .overlay::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to left, 
      rgba(0, 0, 0, 0.456) 15%,  /* Darkest part at the bottom (10% of the height) */
      rgba(0, 0, 0, 0.296) 45%,  /* Mid transition (30% of the height) */
      rgba(0, 0, 0, 0.279) 60%,  /* Light fade at 60% */
      rgba(0, 0, 0, 0.128) 100%         /* Fully transparent at the top */
    );
  }
    }

</style>