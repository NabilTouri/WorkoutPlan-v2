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

<div class="container relative flex flex-col max-w-[1400px] mx-auto w-full min-h-screen px-10 sm:px-20">
    <Header {y} {innerHeight}/>
    <slot />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
