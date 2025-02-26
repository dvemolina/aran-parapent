<script lang="ts">
	import { fade } from "svelte/transition";

    let { review, maxLength = 175 } = $props()

</script>

<div class="card flex flex-col py-6 px-4 rounded-lg z-10 bg-neutral-50 max-w-[750px] border border-neutral-300" transition:fade>
    <h3 class="font-semibold text-neutral-800 text-lg">{review.author_name} </h3>
    <div class="flex flex-row gap-1">
        <img src="/svg/google.svg" alt="Google Review" class="max-w-4">
        <p class="stars">{'★'.repeat(review.rating)}</p>
    </div>

    <p class="text-neutral-700 pt-2">
        {review.text.slice(0, maxLength)}{review.text.length > maxLength ? '...' : ''}
    </p>
</div>

<style>
    .card {
        max-width: 750px;
        box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.077);
    }

    .stars {
        color: gold;
    }
</style>
