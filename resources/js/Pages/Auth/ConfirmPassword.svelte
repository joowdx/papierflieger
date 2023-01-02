<script>
import Authenticated from '@/Layouts/Authenticated.svelte';
import ValidationError from '@/Components/ValidationError.svelte';
import { useForm } from '@inertiajs/inertia-svelte';
import { onMount } from 'svelte';

let password;

const form = useForm({
    password: '',
});

const submit = () => {
    $form.post(route('password.confirm'), {
        onFinish: () => {
            $form.reset();
            password.focus();
        },
    })
};

onMount(() => {
    password.focus();
});
</script>

<svelte:head>
    <title> Confirm Password </title>
</svelte:head>

<Authenticated>
    <li slot="header">
        <svg class="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/>
        </svg>
        Confirm Password
    </li>

    <div class="mt-[20vh] md:px-[25%]">
        <div class="mb-4 text-sm fill-current">
            This is a secure area of the application. Please confirm your password before continuing.
        </div>

        <form on:submit|preventDefault={submit}>
            <div>
                <label for="password" value="Password" />
                <input id="password" type="password" class="w-full input input-bordered" bind:this={password} bind:value={$form.password} autocomplete="current-password" />
                <ValidationError class="mt-2" message={$form.errors?.password} />
            </div>

            <div class="flex justify-end mt-4">
                <button type="submit" class="ml-4 btn btn-primary {form.processing ? 'opacity-25' : ''}" disabled={$form.processing}>
                    Confirm
                </button>
            </div>
        </form>
    </div>
</Authenticated>
