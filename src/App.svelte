<script lang="ts">
  import Router from 'svelte-spa-router';
  import Header from './componetns/Header.svelte';
  import { routes } from './router';
  import Tailwindcss from './Tailwindcss.svelte';
</script>

<Tailwindcss />
<Header />
<main class="pt-16">
  <div class="container mx-auto px-6 my-4">
    <Router {routes} />
  </div>
</main>
