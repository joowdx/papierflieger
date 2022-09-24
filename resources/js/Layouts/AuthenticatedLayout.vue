<script setup>
import Navbar from './Sections/Navbar.vue';
import Footer from './Sections/Footer.vue';
import Header from './Sections/Header.vue';

defineProps([
    'links'
]);
</script>

<template>
    <div class="min-h-screen">
        <Navbar />

        <Header class="p-4 bg-base-200">
            <slot name="header" />
        </Header>
        <main class="p-4">
            <slot />
        </main>

        <Footer />
    </div>
</template>
