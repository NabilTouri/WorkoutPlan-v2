<script>
    import { page } from '$app/stores';
    export let form;

    const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<h1>login</h1>

<p class="mb-4">{form?.message || ''}</p>
<form method="post" action="?/login&redirectTo={redirectTo}">
    <input type="text" placeholder="username" name="username">
    <input type="password" placeholder="password" name="password">
    <button type="submit">login</button>
    <a href="/auth/register?redirectTo={redirectTo}">register</a>
</form>