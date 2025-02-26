<script lang="ts">
    interface Service {
        title: string;
        description: string;
        imageUrl: string;
    }

    interface Props {
        service: Service;
    }

    let { service }: Props = $props();
</script>

<div class="card card-vertical  w-full rounded-lg flex flex-col p-6 gap-4 relative">
    <h1 class="text-neutral-950 font-semibold text-lg">{service.title}</h1>
    
    <!-- Fixed size container with aspect ratio -->
    <div class="image-container-vertical rounded-lg">
        <img src={service.imageUrl} alt={service.title} class="image-vertical" loading="lazy">
    </div>

    <p class="text-neutral-800">{service.description}</p>
    <div class="w-full flex row justify-end">
        <p class="w-fit border border-neutral-600 bg-neutral-300 text-right p-2 rounded-full">150€/persona</p>
    </div>
</div>

<div class="card card-horizontal  w-full rounded-lg hidden flex-row p-4 gap-4 relative">
    
    <!-- Fixed size container with aspect ratio -->
    <div class="image-container-horizontal rounded-lg">
        <img src={service.imageUrl} alt={service.title} class="image-horizontal">
    </div>
    
    <div class="flex flex-col">
        <h1 class="text-neutral-950 font-semibold text-lg">{service.title}</h1>
        <p class="text-neutral-800 pt-4">{service.description}</p>
        <div class="w-full mt-auto flex row justify-end">
            <p class="w-fit border border-neutral-600 bg-neutral-300 text-right p-2 rounded-full">150€/persona</p>
        </div>
    </div>
</div>

<style>

    .card {
        background: rgba(242, 242, 242, 0.626);
        box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.077);
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


    /*HORIZONTAL*/

    .card-horizontal {
        max-height: 350px;
        max-width: 600px;
    }

    /* Image Container to force uniform size */
    .image-container-horizontal {
        height: 100%;
        max-width: 225px;
        aspect-ratio: 1 / 1;  /*Ensures consistent height based on width */
        overflow: hidden;
        border-radius: 8px;
        object-fit: cover; /* Ensures uniform appearance */
    }

    .image-horizontal {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures uniform appearance */
    }

</style>
