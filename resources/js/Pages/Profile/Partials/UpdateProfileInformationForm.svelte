<script>
import ValidationError from '@/Components/ValidationError.svelte';
import { useForm, page } from '@inertiajs/inertia-svelte';
import { fade } from 'svelte/transition'

const user = $page.props.auth.user;

const form = useForm({
    name: user.name,
    username: user.username,
});
</script>

<section>
    <header>
        <h2 class="text-lg font-medium text-primary">Profile Information</h2>

        <p class="mt-1 text-sm">
            Update your account's profile information.
        </p>
    </header>

    <!-- svelte-ignore missing-declaration -->
    <form class="mt-6 space-y-4" on:submit|preventDefault={() => $form.patch(route('profile.update'))}>
        <div>
            <label class="label" for="name">
                <span class="label-text">Name</span>
            </label>

            <input id="name" type="text" class="block w-full mt-1 input input-bordered" bind:value={$form.name}/>

            <ValidationError class="mt-2" error={$form.errors?.name} />
        </div>

        <div>
            <label class="label" for="username">
                Username
            </label>

            <input id="username" type="text" class="block w-full mt-1 input input-bordered" bind:value={$form.username}/>

            <ValidationError class="mt-2" error={$form.errors?.username} />
        </div>

        <div class="flex items-center gap-4">
            <button class="btn btn-primary" disabled={$form.processing}>Save</button>

            {#if $form.recentlySuccessful}
                 <p transition:fade class="text-sm text-gray-600">Saved.</p>
            {/if}
        </div>
    </form>
</section>
