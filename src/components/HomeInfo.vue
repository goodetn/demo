<template>
  <div id="components-affix-demo-target" ref="containerRef" class="scrollable-container">
    <div class="background">
      <a-affix :target="() => containerRef">
        <a-button type="primary">Fixed at the top of container</a-button>
      </a-affix>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, VNode } from 'vue';

export default defineComponent({
  setup() {
    const containerRef = ref<VNode>();
    return {
      containerRef,
    };
  },
});
</script>

