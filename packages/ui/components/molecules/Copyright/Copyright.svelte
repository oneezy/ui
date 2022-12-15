<script>
  export let date = new Date().getFullYear();
</script>

<div class="flex items-center justify-center text-center py-4">
  <span class="text--dim">
    &#169; Copyright {date}, <slot>Oneezy, Inc.</slot>
  </span>
</div>