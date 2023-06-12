
<script>

    export let data, selectedPrice;

</script>

{#each data as data, index}

    <input type="radio" class="btn-check" name="vbtn-radio" id="btnRadio{index}" autocomplete="off" on:click={()=>(selectedPrice = data.price)}>
    <label class="btn btn-outline-secondary" for="btnRadio{index}">{data.item} - {data.price}</label>

{/each}