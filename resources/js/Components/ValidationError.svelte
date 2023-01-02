<script>
import { fly } from "svelte/transition";

export let error;
</script>

{#if error}
    <p transition:fly class="text-sm text-red-600">
        { error }
    </p>
{/if}
