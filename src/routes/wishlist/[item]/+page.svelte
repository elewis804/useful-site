<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	export let data;
</script>

<Navbar />
<div class="container-sm text-center mt-4 px-5">
	<row class="row position-absolute translate-middle start-50 gx-5">
		<a
			class="col btn btn-secondary"
			style="background-color: #ff4545;"
			href="/wishlist">Back</a
		>
		<button
			class="col btn btn-secondary"
			style="background-color: #ff4545;">Delete</button
		>
	</row>

	<ul class="list-group px-5 width-500 pt-4">
		<li class="list-group-item fs-1 text">{data.item[0].item_name}</li>
		<li class="list-group-item">
			<p class="fs-3 text">Description</p>
			<p class="fs-5 text">
				{data.item[0].item_desc}
			</p>
		</li>
		<li class="list-group-item">
			<p class="fs-3 text">Link</p>
			<a class="fs-5 text" href={data.item[0].item_link}>
				{data.item[0].item_link}
			</a>
		</li>
	</ul>
</div>

<div class="container-sm px-5 mt-2 mb-5">
	<form method="POST" action="?/saveItem" class="px-5">
		<div class="mb-3">
			<label for="exampleFormControlInput1" class="form-label">Item Name</label>
			<input class="form-control" id="nameInput" placeholder={data.item[0].item_name} name="name" />
		</div>
		<div class="mb-3">
			<label for="exampleFormControlInput1" class="form-label">Item Link</label>
			<input class="form-control" id="linkInput" placeholder={data.item[0].item_link} name="link" />
		</div>
		<div class="mb-3">
			<label for="exampleFormControlTextarea1" class="form-label">Item Description</label>
			<textarea
				class="form-control"
				id="descInput"
				rows="2"
				placeholder={data.item[0].item_desc}
				name="description"
			/>
		</div>
		<button
			type="submit"
			class="position-absolute translate-middle start-50 btn btn-secondary mt-2"
			style="background-color: #ff4545;">Save</button
		>
	</form>
</div>
