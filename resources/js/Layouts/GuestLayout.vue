<script setup>
import Footer from './Sections/Footer.vue';
import Navbar from './Sections/Navbar.vue';
</script>

<template>
    <div class="flex flex-col items-center justify-between min-h-screen bg-base-100">
        <Navbar />
        <main class="w-full px-6 py-4 overflow-hidden sm:max-w-3xl sm:rounded-lg">
            <slot />
        </main>
        <Footer />
    </div>
</template>
