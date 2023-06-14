
<script>
    import { Card, CardHeader, CardBody, CardFooter } from "$lib/component/card";
    import Forms from "$lib/component/forms/forms.svelte";
    import Radio from "$lib/component/radio/radio.svelte";
    import List from "$lib/component/list/list.svelte";
    import {pricing} from "$lib/module/pricing/storelocal.js";

    // pricing.add({item:"Item1", price:20});
    // pricing.add({item:"Item2", price:10});
    // pricing.add({item:"Item3", price:40});
    // pricing.add({item:"Item4", price:30});

    let data = JSON.parse(JSON.stringify($pricing));

    let selectedPrice = "";
    let addData;

    $:{
      if(addData)
      {
        pricing.add(addData)
        data     = JSON.parse(JSON.stringify($pricing));
        addData  = null;
      }
    }

</script>

<div class="position-absolute top-50 start-50 translate-middle">
    <Card>
        <CardHeader>
        Selected Price: <span>${selectedPrice}</span>
        </CardHeader>
        <CardBody>
            <List>
                <Radio data={data} bind:selectedPrice></Radio>
            </List>
        </CardBody>
        <CardFooter>
            <Forms bind:addData></Forms>
        </CardFooter>
    </Card>
</div>