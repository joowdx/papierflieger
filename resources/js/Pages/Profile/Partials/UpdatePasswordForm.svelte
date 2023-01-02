<script>
import { fade } from 'svelte/transition';
import ValidationError from '@/Components/ValidationError.svelte';
import { useForm } from '@inertiajs/inertia-svelte';

let newPassword;
let password;

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    $form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if ($form.errors?.password) {
                $form.reset('password', 'password_confirmation');
                newPassword.value.focus();
            }
            if ($form.errors?.current_password) {
                $form.reset('current_password');
                password.value.focus();
            }
        },
    });
};
</script>

<section>
    <header>
        <h2 class="text-lg font-medium text-primary">Update Password</h2>

        <p class="mt-1 text-sm">
            Ensure your account is using a long, random password to stay secure.
        </p>
    </header>

    <form on:submit|preventDefault={updatePassword} class="mt-6 space-y-6">
        <div>
            <label class="label" for="current_password">
                Current Password
            </label>

            <input id="current_password" bind:this={password} bind:value={$form.current_password} type="password" class="block w-full mt-1 input input-bordered" />

            <ValidationError error={$form.errors.current_password} class="mt-2" />
        </div>

        <div>
            <label class="label" for="password" >
                New Password
            </label>

            <input id="password" bind:this={newPassword} bind:value={$form.password} type="password" class="block w-full mt-1 input input-bordered" />

            <ValidationError error={$form.errors.password} class="mt-2" />
        </div>

        <div>
            <label class="label" for="password_confirmation" >
                Confirm Password
            </label>

            <input id="password_confirmation" bind:value={form.password_confirmation} type="password" class="block w-full mt-1 input input-bordered" />

            <ValidationError error={$form.errors.password_confirmation} class="mt-2" />
        </div>

        <div class="flex items-center gap-4">
            <button class="btn btn-primary" :disabled="form.processing">Save</button>

            {#if $form.recentlySuccessful}
                 <p transition:fade class="text-sm text-gray-600">Saved.</p>
            {/if}
        </div>
    </form>
</section>
