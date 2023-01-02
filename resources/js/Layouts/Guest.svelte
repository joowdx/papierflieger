<script>
import Footer from './Sections/Footer.svelte';
import Navbar from './Sections/Navbar.svelte';
</script>

<div class="flex flex-col items-center justify-between min-h-screen bg-base-100">
    <Navbar />

    <main class="w-full px-6 py-4 overflow-hidden sm:max-w-3xl sm:rounded-lg">
        <slot />
    </main>

    <Footer />
</div>
