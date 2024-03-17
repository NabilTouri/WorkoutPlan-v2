<script>
    import { page } from '$app/stores';
    import '../app.css';
</script>

<svelte:head>
	<title>{$page.data.title || 'Workout Plan'}</title>
</svelte:head>

<slot />