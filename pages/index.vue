<template>
  <MarketList :markets="contents" />
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import "@nuxtjs/axios";

import MarketList from "../components/MarketList.vue";

import { MarketResponse } from "../interfaces/Market.interface";
import { ApiResponse } from "../interfaces/Misc.interface";

export default defineComponent({
  name: "IndexPage",
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get<ApiResponse<MarketResponse>>(
        "api/markets"
      );
      return response.data;
    } catch (e) {
      console.log("error", e);
      return {};
    }

    return {};
  },
  components: { MarketList },
});
</script>
