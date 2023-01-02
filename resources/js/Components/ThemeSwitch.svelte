<script>
import { onMount } from 'svelte';

const themes = [
    { name: 'light', dark: false },
    { name: 'dark', dark: true },
    { name: 'cupcake', dark: false },
    { name: 'bumblebee', dark: false },
    { name: 'emerald', dark: false },
    { name: 'corporate', dark: false },
    { name: 'synthwave', dark: false },
    { name: 'retro', dark: false },
    // { name: 'cyberpunk', dark: false },
    { name: 'valentine', dark: false },
    { name: 'halloween', dark: true },
    { name: 'garden', dark: false },
    { name: 'forest', dark: true },
    { name: 'aqua', dark: false },
    { name: 'lofi', dark: false },
    { name: 'pastel', dark: false },
    { name: 'fantasy', dark: false },
    // { name: 'wireframe', dark: false },
    { name: 'black', dark: true },
    { name: 'luxury', dark: true },
    { name: 'dracula', dark: true },
    { name: 'cmyk', dark: false },
    { name: 'autumn', dark: false },
    { name: 'business', dark: true },
    { name: 'acid', dark: false },
    { name: 'lemonade', dark: false },
    { name: 'night', dark: true },
    { name: 'coffee', dark: true },
    { name: 'winter', dark: false },
]

function setTheme (newTheme) {
    var theme = themes.find(e => e.name === newTheme) ?? themes.find(e => e.name === 'black');

    localStorage.setItem('theme', theme.name);

    document.documentElement.setAttribute('data-theme', theme.name);

    if (theme.dark) {
        document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
        document.documentElement.style.removeProperty('color-scheme');
    }
}

onMount(() => setTheme(localStorage.theme));
</script>

<div title="Change Theme" class="dropdown dropdown-end ">
    <button tabindex="0" class="gap-1 normal-case btn btn-ghost">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current md:h-6 md:w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
        <span class="hidden md:inline">Theme</span>
        <svg width="12px" height="12px" class="hidden w-3 h-3 ml-1 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
    </button>
    <div class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
        <div class="grid grid-cols-1 gap-3 p-3">
            {#each themes as theme}
                <div class="overflow-hidden rounded-lg outline-base-content outline-2 outline-offset-2" data-set-theme={theme.name} data-act-class="outline">
                    <button on:click={() => setTheme(theme.name)} data-theme={theme.name} class="w-full font-sans cursor-pointer bg-base-100 text-base-content">
                        <div class="grid grid-cols-5 grid-rows-3">
                            <div class="flex col-span-5 row-span-3 row-start-1 gap-1 px-4 py-3">
                                <div class="flex-grow text-sm font-bold">{ theme.name }</div>
                                <div class="flex flex-wrap flex-shrink-0 gap-1">
                                    <div class="w-2 rounded bg-primary"></div>
                                    <div class="w-2 rounded bg-secondary"></div>
                                    <div class="w-2 rounded bg-accent"></div>
                                    <div class="w-2 rounded bg-neutral"></div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            {/each}
        </div>
    </div>
</div>
