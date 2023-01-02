<script setup>
import Navbar from './Sections/Navbar.svelte';
import Footer from './Sections/Footer.svelte';
import Header from './Sections/Header.svelte';
</script>

<div class="min-h-screen">
    <Navbar />

    <Header>
        <slot name="header" />
    </Header>

    <main class="p-4">
        <slot />
    </main>

    <Footer />

    <slot name="modal" />
</div>
