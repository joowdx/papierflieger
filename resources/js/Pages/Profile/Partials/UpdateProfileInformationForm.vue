<script setup>
import InputError from '@/Components/InputError.vue';
import { Link, useForm, usePage } from '@inertiajs/inertia-vue3';
import { ref } from 'vue';

const props = defineProps({
    status: String,
});

const user = usePage().props.value.auth.user;

const form = useForm({
    name: user.name,
    username: user.username,
});
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-primary">Profile Information</h2>

            <p class="mt-1 text-sm">
                Update your account's profile information.
            </p>
        </header>

        <form @submit.prevent="form.patch(route('profile.update'))" class="mt-6 space-y-6">
            <div>
                <label class="label" for="name">
                    <span class="label-text">Name</span>
                </label>

                <input
                    id="name"
                    type="text"
                    class="block w-full mt-1 input input-bordered"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div>
                <label class="label" for="username">
                    Username
                </label>

                <input
                    id="username"
                    type="text"
                    class="block w-full mt-1 input input-bordered"
                    v-model="form.username"
                    required
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.username" />
            </div>

            <div class="flex items-center gap-4">
                <button class="btn btn-primary" :disabled="form.processing">Save</button>

                <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
