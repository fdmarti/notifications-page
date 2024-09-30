<template>
  <span class="bg-blue-700 text-slate-50 p-2 rounded-lg ml-2">{{ text }}</span>
</template>
<script lang="ts" setup>
interface Props {
  text: string | number
}
defineProps<Props>()
</script>
