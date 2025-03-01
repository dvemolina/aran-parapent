<script lang="ts">
  import { onMount } from "svelte";

  import ContactModal from "./ContactModal.svelte";
  let showModal = $state(false)
  
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
    if (menuOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling again
      document.body.style.overflow = '';
    }
  };
</script>

<header
  class="@container fixed w-full top-0 left-0 z-50 transition-all"
  class:scrolled={isScrolled}
  class:openMenu={menuOpen}
  class:darkened={menuOpen}
>
  <div class="w-full flex flex-row justify-between @5xl:justify-around items-center p-4">
    <!-- Logo -->
    <a href="/">
      <img src="/logo/logo-blanc.png" alt="Aran Parapent - Inicio" class="{isScrolled ? 'max-w-[5rem]' : 'max-w-[6rem]'} @5xl:{isScrolled ? 'max-w-[6rem]' : 'max-w-[7rem]'} transition-all">
    </a>

    <!-- Desktop Nav -->
    <nav class="@lg:flex flex-row justify-center items-center hidden space-x-6 {isScrolled ? 'lg:opacity-100' : 'lg:opacity-0'} transition-all">
      <a href="#services-section" class="text-neutral-100 hover:text-neutral-50 font-normal">Servicios</a>
      <a href="#about-section" class="text-neutral-100 hover:text-neutral-50 font-normal">Aran Parapent</a>
      <a href="#" onclick={() => showModal = true} class="text-neutral-100 hover:text-neutral-50 font-normal">Contacto</a>
      <a href="https://instagram.com/aranparapent" class="text-neutral-300 hover:text-neutral-100 font-normal">
        <img src="/svg/instagram.svg" alt="Instagram: @aranparapent" class="size-5 invert">
      </a>
    </nav>

    <!-- Mobile Hamburger Button -->
    <button
      class="@lg:hidden block focus:outline-none"
      onclick={toggleMenu}
      aria-label="Toggle Menu"
    >
      <span class="text-3xl font-semibold text-background text-neutral-100">☰</span>
    </button>
  </div>

  <!-- Mobile Menu (Collapsible) -->
  <div
    class="@lg:hidden w-full h-full flex items-center justify-center"
    class:hidden={!menuOpen}
    class:openMenu={menuOpen} 
    
  >
    <nav class="flex flex-col items-center space-y-4 p-4 w-full h-full">
      <a onclick={toggleMenu} href="#services-section" class="text-neutral-300 hover:text-primary font-normal">Servicios</a>
      <a onclick={toggleMenu} href="#about-section" class="text-neutral-300 hover:text-primary font-normal">Aran Parapent</a>
      <a onclick={toggleMenu} href="#" class="text-neutral-300 hover:text-primary font-normal">Contacto</a>
      <a onclick={toggleMenu} href="https://instagram.com/aranparapent" class="text-neutral-300 hover:text-primary font-normal">
        <img src="/svg/instagram.svg" alt="Instagram: @aranparapent" class="size-5 invert"/>
      </a>
    </nav>
  </div>
</header>

<!-- Contact Modal -->
{#if showModal}
    <ContactModal bind:showModal={showModal}/>
{/if}

<style>
 /* Header background when scrolled */
 /* Darkened header when menu is open */
 
.scrolled {
  height: 70px;
  background: rgba(47, 47, 47, 0.214);  
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all ease-in-out 0.3s;
}


/* Expanded header on mobile when menu is open */
.openMenu {
  height: 100dvh; /* Full viewport height */
  transition: all ease-in-out 0.3s;
}

.darkened {
  background: rgba(0, 0, 0, 0.7) !important; /* Darker background for header */
  backdrop-filter: blur(15px) !important; /* Stronger blur */
  -webkit-backdrop-filter: blur(15px) !important;
}

</style>
