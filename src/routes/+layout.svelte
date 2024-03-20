<script>
    import { page } from '$app/stores';
    import Header from '../components/Header.svelte';
    import '../app.css';

    let y;
    let innerWidth = 0;
    let innerHeight = 0;
</script>

<svelte:head>
	<title>{$page.data.title || 'Workout Plan'}</title>
</svelte:head>

<div class="bg-primary overflow-hidden w-full min-h-screen">
    
    <Header {y} {innerHeight}/>
    <slot />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
