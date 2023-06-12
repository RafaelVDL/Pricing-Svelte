<script>
    import CardHeader from "$lib/component/card/header.svelte";
    import CardBody from "$lib/component/card/body.svelte";
    import CardFooter from "$lib/component/card/footer.svelte";
    // import { CardFooter } from ".";
  </script>
  
  <div class="card" style="max-width: 400px;">
    <slot>
      <CardHeader>
        <h2 class="h4">Card Header</h2>
      </CardHeader>
      <CardBody>
        <p>Card Body</p>
      </CardBody>
      <CardFooter />
    </slot>
  </div>
  