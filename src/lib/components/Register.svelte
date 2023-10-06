<script lang="ts">
	type actionType = 'PUT' | 'PATCH';

	export let method: actionType = 'PUT';
	export let action: string = 'api/auth/register';
	export let username: string | null = null;
	let title: string;
	if (method === 'PATCH') {
		title = 'Update Password';
	} else {
		title = 'Register';
	}
	async function handleSubmit(e: SubmitEvent) {
		console.log('I was clicked');
		const formData = new FormData(e.target as HTMLFormElement);
		if (formData.get('password') !== formData.get('confirmpassword')) {
			alert('Passwords do not match');
			return;
		}
		const request = {
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(Object.fromEntries(formData)),
			method: method
		};
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

<form on:submit|preventDefault={handleSubmit}>
	<h1>{title}</h1>
	<label for="username"
		>Username
		<input
			type="text"
			name="username"
			placeholder="Username"
			value={username}
			disabled={!!username ?? null}
		/></label
	>
	<label for="username"
		>Password
		<input type="password" name="password" placeholder="Password" /></label
	>
	<label for="username"
		>Confirm Password
		<input type="password" name="confirmpassword" placeholder="Confirm Password" /></label
	>
	<input type="submit" value="Submit" />
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1em;
		max-width: 400px;
	}
	label {
		display: flex;
		justify-content: space-between;
	}
</style>
