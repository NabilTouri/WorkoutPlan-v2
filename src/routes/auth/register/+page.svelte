<script>
    import { page } from '$app/stores';
    export let form;

    const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
    console.log(redirectTo);
</script>

<h1>register</h1>

<p class="mb-4">{form?.message || ''}</p>
<form method="post" action="?/register&redirectTo={redirectTo}">
    <input type="text" placeholder="name" name="name">
    <input type="text" placeholder="surname" name="surname">
    <input type="number" placeholder="age" name="age">
    <select name="gender" id="gender">
        <option value="male">male</option>
        <option value="female">female</option>
    </select>
    <input type="text" placeholder="username" name="username">
    <input type="password" placeholder="password" name="password">
    <input type="password" placeholder="confirm password" name="confirmPassword">
    <button type="submit">register</button>
    <a href="/auth/login?redirectTo={redirectTo}">login</a>
</form>