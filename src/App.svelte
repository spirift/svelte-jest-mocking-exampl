<script>
  import Select from "svelte-select";
  // const Select = require("svelte-select").default;
  console.log(`Select: `, Select);

  const items = ["thing"];
  const selectedValue = null;
</script>

<div>
  <h1>Hello</h1>
  <Select {items} {selectedValue} />
</div>
