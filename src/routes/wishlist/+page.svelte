<script lang="ts">
	import { enhance } from '$app/forms';
	import Navbar from '$lib/Navbar.svelte';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	export let data;

	let list = data.items;

	async function deleteItem(item_id) {
		console.log(item_id);
		const response = await fetch('/api/wishlist', {
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

<Navbar />

<div class="container-sm">
	<form method="POST" action="/wishlist?/addItem">
		<row>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Item Name</label>
				<input class="form-control" id="nameInput" placeholder="Name" name="name" />
			</div>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Item Link</label>
				<input class="form-control" id="linkInput" name="link" />
			</div>
		</row>
		<div class="mb-3">
			<label for="exampleFormControlTextarea1" class="form-label">Item Description</label>
			<textarea class="form-control" id="descInput" rows="2" name="description" />
		</div>
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
						on:click={() => deleteItem(item.item_id)}
					>
						<i class="bi-x" style="font-size: 3rem; color: #ff4545" />
					</button>
					<a
						href="/wishlist/{item.item_id}"
						class="btn"
					>
						<h4>{item.item_name}</h4>

						<p>{item.item_desc}</p>
						<a href={item.item_link}>
							{item.item_link}
						</a>
					</a>
				</row>
			</div>
		{/each}
	</ul>
</div>