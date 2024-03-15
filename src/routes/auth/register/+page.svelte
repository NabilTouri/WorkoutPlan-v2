<script>
    export let form;
</script>

<h1>register</h1>

<p class="mb-4">{form?.message || ''}</p>
<form method="post" action="?/register">
    <input type="text" placeholder="name" name="name">
    <input type="text" placeholder="surname" name="surname">
    <input type="number" placeholder="age" name="age">
    <input type="text" placeholder="gender" name="gender">
    <input type="text" placeholder="username" name="username">
    <input type="password" placeholder="password" name="password">
    <input type="password" placeholder="confirm password" name="confirmPassword">
    <button type="submit">register</button>
    <a href="/auth/login">login</a>
</form>