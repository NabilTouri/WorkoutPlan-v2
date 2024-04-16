<script>
    import { page } from '$app/stores';
    import Header from '../components/header.svelte';
    import '../app.css';

    export let data
    const user = data.user || ''
    let y;
    let innerWidth = 0;
    let innerHeight = 0;
</script>

<svelte:head>
	<title>{$page.data.title || 'Workout Plan'}</title>
</svelte:head>

<div class="flex flex-col items-stretch min-h-screen">
    <Header {y} {user}/>
    <slot />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />