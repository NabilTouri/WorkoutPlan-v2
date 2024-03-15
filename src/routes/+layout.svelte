<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.title || 'Workout Plan'}</title>
</svelte:head>

<slot />