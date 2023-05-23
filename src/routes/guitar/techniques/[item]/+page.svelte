<script>
	import Navbar from '$lib/Navbar.svelte';
	import 'bootstrap-icons/font/bootstrap-icons.css';
</script>

<Navbar />
<div class="container-sm my-3">
	<div class="text-center text">
		<h1 class="fs-10">Hybrid Picking</h1>
		<p>Using a pick and fingers to play notes quicker</p>
		<a href="https://youtu.be/jBysdeWwRfI">https://youtu.be/jBysdeWwRfI</a>
		<button
			type="button"
			class="btn btn-primary position-absolute my-5 start-50 translate-middle"
			style="background-color:#45aa45;"
			data-bs-toggle="modal"
			data-bs-target="#editItemModal"
		>
			Save
		</button>
		<textarea class="form-control my-5" id="notes_body" rows="25">Learn how to finger pick with middle, ring and pinky fingers</textarea>
	</div>

	<button
		type="button"
		class="btn position-absolute bottom-0 end-0 mx-5 my-5 px-0 py-1"
		style="background-color:transparent"
		data-bs-toggle="modal"
		data-bs-target="#editItemModal"
	>
		<i class="bi-pencil-fill" style="font-size: 3rem; color: #ff4545" />
	</button>
</div>

<div
	class="modal fade"
	id="editItemModal"
	tabindex="-1"
	aria-labelledby="Add New Item"
	aria-hidden="true"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">Edit Technique</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Name</label>
					<input class="form-control" id="nameInput" placeholder="Name" />
				</div>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Guide link</label>
					<input class="form-control" id="nameInput" placeholder="" />
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary" style="background-color: #ff4545;"
					>Save</button
				>
			</div>
		</div>
	</div>
</div>
