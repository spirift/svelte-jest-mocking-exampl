<script>
  // In order to get jest to play nice with svelte-select we need to import from the component path
  // We also need to include svelte-select in the transform in `transformIgnorePatterns` inside jest.config.js
  import Select from "svelte-select/src/Select.svelte";

  const items = ["thing"];
  const selectedValue = null;
</script>

<div>
  <h1>Hello</h1>
  <Select {items} {selectedValue} />
</div>
