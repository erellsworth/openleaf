<template>
  <section>
    <Fieldset v-for="market in markets" :key="market.id">
      <template #legend> {{ market.name }} </template>
      Content
    </Fieldset>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from "@nuxtjs/composition-api";
import Fieldset from "primevue/fieldset";

export default defineComponent({
  name: "MarketList",
  props: ["markets"],
  components: { Fieldset },
});
</script>
