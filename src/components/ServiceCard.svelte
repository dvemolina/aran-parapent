<script lang="ts">
    interface Service {
        title: string;
        description: string;
        imageUrl: string;
        price: string;
    }

    interface Props {
        service: Service;
    }

    let { service }: Props = $props();
</script>

<div class="card card-vertical  w-full rounded-lg flex flex-col p-6 gap-4 relative ">
    <h1 class="text-neutral-950 font-semibold text-lg">{service.title}</h1>
    
    <!-- Fixed size container with aspect ratio -->
    <div class="image-container-vertical rounded-lg object-center">
        <img src={service.imageUrl} alt={service.title} class="image-vertical object-center">
    </div>

    <p class="text-neutral-800">{service.description}</p>
    <div class="w-full flex row justify-end">
        <p class="w-fit text-neutral-900 shadow-md text-lg bg-neutral-100/75 text-right py-2 px-4 rounded-lg font-semibold">{service.price}€ - persona</p>
    </div>
</div>



<style>

    .card {
        background: rgba(242, 242, 242, 0.626);
        box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.077);
        transition: all ease-in-out 0.3s;
    }

    .card:hover {
        background: rgba(242, 242, 242, 0.912);
    }

    /*VERTICAL*/
    .card-vertical {
        max-width: 350px;
    }

    /* Image Container to force uniform size */
    .image-container-vertical {
        width: 100%;
        aspect-ratio: 4 / 2.5; /* Ensures consistent height based on width */
        overflow: hidden;
        border-radius: 8px;
        
    }

    /* Ensure images cover the entire container */
    .image-vertical {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures uniform appearance */
        max-height: 250px;
    }


</style>
