<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import 'bootstrap-icons/font/bootstrap-icons.css';
</script>

<Navbar />
<button
	type="button"
	class="btn position-absolute bottom-0 end-0 mx-5 my-5 px-0 py-1"
	style="background-color:transparent"
	data-bs-toggle="modal"
	data-bs-target="#editItemModal"
>
	<i class="bi-pencil-fill" style="font-size: 3rem; color: #ff4545" />
</button>
<div class="container-sm text-center my-5 px-5">
    <ul class="list-group px-5 width-500">
        <li class="list-group-item fs-1 text">Math Homework</li>
        <li class="list-group-item">
            <p class="fs-3 text">
                Description
            </p>
            <p class="fs-5 text">
                Page 451 Problems 3-9
            </p>
        </li>
        <li class="list-group-item">
            <p class="fs-3 text">
                Due Date: 
            </p>
            <p class="fs-5 text">
                03/12/2024
			</p>
        </li>
      </ul>
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
				<div class="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Item Description</label>
					<textarea class="form-control" id="descInput" rows="2" />
				</div>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Due Date</label>
					<input class="form-control" id="linkInput" />
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
