<script>
	import Navbar from '$lib/Navbar.svelte';
	import 'bootstrap-icons/font/bootstrap-icons.css';
</script>

<Navbar />
<div class="container-sm py-5">
	<h1 class="fs-10 text-center text">Math Notes</h1>

	<button
		type="button"
		class="btn btn-primary position-absolute my-3 start-50 translate-middle"
		style="background-color:#45aa45;"
		data-bs-toggle="modal"
		data-bs-target="#editItemModal"
	>
		Save
	</button>
    <div class="mb-3 my-5">
        <textarea class="form-control" id="notes_body" rows="25">Math notes go here. I like math.
        </textarea>
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
				<h1 class="modal-title fs-5" id="exampleModalLabel">Edit Item</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Item Name</label>
					<input class="form-control" id="nameInput" placeholder="Name" />
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
