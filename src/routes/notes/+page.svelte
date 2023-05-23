<script>
	import Navbar from "$lib/Navbar.svelte";
	import 'bootstrap-icons/font/bootstrap-icons.css';
</script>
<Navbar></Navbar>
<div class="container-sm">
    <ul class="list-group list-group-horizontal-md mt-5">
      <a href="/notes/0" class="list-group-item list-group-item-action text-center">
        <h3  class="text-center">Math Notes</h3>
		<p>5/22/2023</p>
      </a>
    </ul>
    <button type="button" class="btn position-absolute bottom-0 end-0 mx-5 my-5 px-0 py-1" style="background-color:transparent" data-bs-toggle="modal" data-bs-target="#addItemModal">
      <i class="bi-patch-plus-fill" style="font-size: 3rem; color: #ff4545"></i>
    </button>
</div>

<div class="modal fade" id="addItemModal" tabindex="-1" aria-labelledby="Add New Item" aria-hidden="true">
	<div class="modal-dialog">
	  <div class="modal-content">
		<div class="modal-header">
		  <h1 class="modal-title fs-5" id="exampleModalLabel">Add a New Item</h1>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
		  <div class="mb-3">
			<label for="exampleFormControlInput1" class="form-label">Name</label>
			<input class="form-control" id="nameInput" placeholder="Name">
		  </div>
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		  <button type="button" class="btn btn-primary" style="background-color: #ff4545;">Add</button>
		</div>
	  </div>
	</div>
  </div>