<script setup>
import Authenticated from '@/Layouts/Authenticated.svelte';
// import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.svelte';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.svelte';

export let status;
</script>

<svelte:head>
    <title>Profile</title>
</svelte:head>

<Authenticated>
    <li slot="header">
        Profile
    </li>

    <div class="py-12">
        <div class="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
            <div class="p-4 shadow bg-base-200 sm:p-8 sm:rounded-lg">
                <UpdateProfileInformationForm
                    status={status}
                    class="max-w-xl"
                />
            </div>

            <div class="p-4 shadow bg-base-200 sm:p-8 sm:rounded-lg">
                <UpdatePasswordForm class="max-w-xl" />
            </div>

            <!-- <div class="p-4 shadow bg-base-200 sm:p-8 sm:rounded-lg">
                <DeleteUserForm class="max-w-xl" />
            </div> -->
        </div>
    </div>
</Authenticated>
