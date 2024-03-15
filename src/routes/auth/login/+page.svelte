<script>
    export let form;
</script>

<h1>login</h1>

<p class="mb-4">{form?.message || ''}</p>
<form method="post" action="?/login">
    <input type="text" placeholder="username" name="username">
    <input type="password" placeholder="password" name="password">
    <button type="submit">login</button>
    <a href="/auth/register">register</a>
</form>