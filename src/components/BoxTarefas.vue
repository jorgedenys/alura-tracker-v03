<template>
    <div class="box has-text-weight-bold">
        <!-- slot: O que estiver dentro desse componente será renderizado nele. -->
         <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BoxTarefas'
})
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>