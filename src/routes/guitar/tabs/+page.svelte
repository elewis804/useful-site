<script lang="ts">
	import { enhance } from '$app/forms';
	import Navbar from '$lib/Navbar.svelte';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	export let data;

	let list = data.items;

	async function deleteItem(item_id) {
		console.log(item_id);
		const response = await fetch('/api/tabs', {
			method: 'DELETE',
			body: JSON.stringify(item_id),
			headers: {
				'content-type': 'application/json'
			}
		});

		const result = await response.json();
		list = result;
	}
</script>
<Navbar></Navbar>
<div class="container-sm">
	<form method="POST" action="/guitar/tabs?/addItem">
		<row>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Song Name</label>
				<input class="form-control" id="nameInput" placeholder="Name" name="name" />
			</div>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Song Link</label>
				<input class="form-control" id="songInput" name="song"/>
			</div>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Song Guide</label>
				<input class="form-control" id="guideInput" name="guide"/>
			</div>
		</row>
		<button
			type="submit"
			class="position-absolute translate-middle start-50 btn btn-secondary mt-2"
			style="background-color: #ff4545;">Add</button
		>
	</form>
	<ul class="list-group list-group-vertical-md mt-5">
		{#each list as item}
			<div class="list-group-item list-group-item-action text-center mb-2">
				<row>
					<button
						type="button"
						class="btn position-absolute start-0"
						style="background-color:transparent"
						on:click={() => deleteItem(item.tab_id)}
					>
						<i class="bi-x" style="font-size: 3rem; color: #ff4545" />
					</button>
					<a
						href="/guitar/tabs/{item.tab_id}"
						class="btn"
					>
						<h4>{item.tab_name}</h4>
						{#if item.tab_song != null}
							<a href={item.tab_song}>{item.tab_song}</a>
						{/if}
						<div></div>
						{#if item.tab_guide != null}
							<a href={item.tab_guide}>{item.tab_guide}</a>
						{/if}
					</a>
				</row>
			</div>
		{/each}
	</ul>
</div>