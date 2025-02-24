<script lang="ts">
    import { onMount } from "svelte";

    let isScrolled = $state(false);
    let menuOpen = $state(false);

    const handleScroll = () => {
    isScrolled = window.scrollY > 10; // Change background if scrolled
    };

    onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    });

    const toggleMenu = () => {
    menuOpen = !menuOpen;
    };
</script>

<header
  class="@container fixed w-full top-0 left-0 z-50 transition-all"
  class:scrolled={isScrolled}
  class:openMenu={menuOpen}
>
    <div class="w-full flex flex-row justify-between @6xl:justify-evenly items-center p-4">
        <!-- Logo -->
        <a href="/">
            <img src="/logo/logo-blanc.png" alt="Aran Parapent - Inicio" class="{isScrolled ? 'max-w-[6rem]' : 'max-w-[6rem]'} @6xl:{isScrolled ? 'max-w-[8rem]' : 'max-w-[8rem]'} transition-all">
        </a>

        <!-- Desktop Nav -->
        <nav class="@lg:flex flex-row justify-center items-center hidden space-x-6">
        <a href="#" class="text-neutral-300 hover:text-primary font-semibold">Servicios</a>
        <a href="#" class="text-neutral-300 hover:text-primary font-semibold">Aran Parapent</a>
        <a href="#" class="text-neutral-300 hover:text-primary font-semibold">Contacto</a>
        <a href="#" class="text-neutral-300 hover:text-primary font-semibold">
            <img src="/svg/instagram.svg" alt="Instagram: @aranparapent" class=" @6xl:size-8 size-10 invert">
        </a>
        </nav>

        <!-- Mobile Hamburger Button -->
        <button
        class="@lg:hidden block focus:outline-none"
        onclick={toggleMenu}
        aria-label="Toggle Menu"
        >
        <span class="text-3xl font-semibold text-background text-neutral-300">☰</span>
        </button>
        
    </div>
    <!-- Mobile Menu (Collapsible) -->
    <nav
    class="@lg:hidden flex flex-col items-center space-y-4 p-4 w-full h-full"
    class:hidden={!menuOpen}
    
    >
        <a href="#" class="text-neutral-300 hover:text-primary font-semibold">Servicios</a>
        <a href="#" class="text-neutral-300 hover:text-primary font-semibold">Aran Parapent</a>
        <a href="#" class="text-neutral-300 hover:text-primary font-semibold">Contacto</a>
        <a href="#" class="text-neutral-300 hover:text-primary font-semibold">
            <img src="/svg/instagram.svg" alt="Instagram: @aranparapent" class="size-8 invert"/>
        </a>
    
    </nav>  
</header>

<style>
 .openMenu {
    height: 100dvh;
    background-color: rgba(13, 6, 3, 0.565);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
 }

 .scrolled{
    height: 75px;
    background-color: rgba(13, 6, 3, 0.568);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
 }

</style>
