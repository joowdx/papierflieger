<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { ref, onMounted } from 'vue';

const username = ref(null);
const password = ref(null);

defineProps({
    canResetPassword: Boolean,
    status: String,
});

onMounted(() => {
    username.value.focus();
})
;
const form = useForm({
    username: null,
    password: null,
    remember: null,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password');

            (form.errors.username?.includes('required') ? username : password).value?.focus();
        },

    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Login" />
        <div class="h-full hero">
            <div class="flex-col gap-x-11 hero-content lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <div class="flex items-center justify-center w-full mb-2">
                        <Link :href="$page.props.ziggy.url">
                            <svg class="w-20 h-20 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z"/>
                            </svg>
                        </Link>
                    </div>
                    <Link :href="$page.props.ziggy.url">
                        <h1 class="text-5xl font-bold"> {{ $page.props.app.name }} </h1>
                    </Link>
                    <p class="py-6">
                        We follow the revolution.
                    </p>
                </div>
                <form class="flex-shrink-0 w-full max-w-sm shadow-lg card bg-base-100" @submit.prevent=submit>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Username</span>
                            </label>
                            <input ref="username" type="text" placeholder="username" class="input input-bordered" v-model="form.username" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input ref="password" type="password" placeholder="password" class="input input-bordered" v-model="form.password" />
                        </div>
                        <div class="form-control">
                            <label class="justify-start px-0 space-x-2 cursor-pointer label">
                                <input type="checkbox" class="checkbox checkbox-primary" v-model="form.remember" />
                                <span class="label-text">Remember me</span>
                            </label>
                        </div>
                        <InputError :message="form.errors.username || form.errors.password" />
                        <div class="mt-6 form-control">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </GuestLayout>
</template>
