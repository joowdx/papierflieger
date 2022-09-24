<script setup>
import { Link, usePage } from '@inertiajs/inertia-vue3';
import ThemeSwitch from '@/Components/ThemeSwitch.vue';

const authenticated = Boolean(usePage().props.value.auth.user);

const navigation = [
    {name: 'Dashboard', href: route('dashboard'), current: route().current('dashboard')},
];

const dropdown = [
    {name: 'Profile', href: '#', badge: 'access'},
    {name: 'Logout', href: route('logout'), method: 'POST'},
];

</script>
<template>
    <nav class="px-4 py-0 navbar bg-base-100">
        <div class="navbar-start">
            <div v-if="authenticated" class="dropdown">
                <label tabindex="0" class="btn btn-accent lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" width="24" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </label>
                <ul tabindex="0" class="p-2 mt-3 shadow menu menu-compact tabs tabs-boxed dropdown-content bg-base-100 rounded-box w-52">
                    <li v-for="item in navigation" :key="`${item.name}${item.href}`" class="w-full">
                        <Link :href="item.href" :class="[item.current ? 'tab-active' : '', 'tab']"> {{ item.name }} </Link>
                    </li>
                </ul>
            </div>
            <Link :href="$page.props.ziggy.url" class="items-center hidden gap-3 text-xl font-bold normal-case lg:flex fill-primary">
                <svg height="36" width="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z"/>
                </svg>
                {{ $page.props.app.name }}
            </Link>
            <div v-if="authenticated" class="items-end hidden h-full ml-5 lg:flex">
                <ul class="flex p-0">
                    <li v-for="item in navigation" :key="`${item.name}${item.href}`">
                        <Link :href="item.href" :class="[item.current ? 'border-accent' : '', 'tab tab-bordered p-0 px-3 text-base-content']"> {{ item.name }} </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="! route().current('login')" class="navbar-center lg:hidden">
            <Link :href="$page.props.ziggy.url" class="flex items-center gap-3 text-xl font-bold normal-case fill-primary">
                <svg height="36" width="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z"/>
                </svg>
                {{ $page.props.app.name }}
            </Link>
        </div>
        <div class="navbar-end">
            <ThemeSwitch />
            <Link v-if="!authenticated && ! route().current('login')" as="button" :href="route('login')" class="ml-4 normal-case btn btn-ghost">Sign In</Link>
            <div v-if="authenticated" class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar" >
                    <div class="w-10 rounded-full fill-current">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"/>
                        </svg>
                    </div>
                </label>
                <ul tabindex="0" class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li v-for="item in dropdown">
                        <Link as="button" :href="item.href" :method="item.method ?? 'GET'" class="justify-between">
                            {{ item.name }}
                            <span v-if="item.badge" class="badge bg-accent">
                                {{ item.badge }}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
