<script>
    export let addData;

    let Forms;

    const handleSubmit = ()=>{
        let formData = new FormData(Forms);

        addData = Object.fromEntries(formData.entries());
        Forms.reset()
    }
</script> 


<form on:submit|preventDefault={handleSubmit} bind:this={Forms}>
    <div>
        <label for="items" class="form-label">Item:</label>
        <input type="text" name="item" class="form-control mb-3" id="items">
    </div>
    <div>
        <label for="price" class="form-label">Price:</label>
        <input type="text" name="price" class="form-control mb-3" id="price">
    </div>
    <hr>
    <div class="d-flex justify-content-center mb-2">
        <button type="submit" class="btn btn-primary">Add Item</button>
    </div>
</form>