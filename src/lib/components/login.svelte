<script lang="ts">

    export let action: string = 'api/auth/login'

    async function handleSubmit(event: SubmitEvent) {
        const newForm = new FormData(event.target as HTMLFormElement)
        const request = {
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(newForm)),
            method: 'POST',
        }
        try {
            const response = await fetch(action, request);
            const data = await response.json();
            if (response.ok) {
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
</script>

<div class="container">
    <h1>Login</h1>
    <form on:submit|preventDefault={handleSubmit}>
        <label for="username">Username
        <input type="text" placeholder="username" name="username"></label>
        <label for="password">Password
        <input type="password" placeholder="password" name="password"></label>
        <input type="submit" value="Login">
    </form>
</div>