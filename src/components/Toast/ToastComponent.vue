<template>
  <div :class="[isNew, 'rounded w-full h-auto flex items-center gap-4 p-4']">
    <picture>
      <img
        :src="`/images/${toast.avatar}`"
        :alt="`Profile picture ${toast.user}`"
        class="w-12 min-w-12"
      />
    </picture>
    <section>
      <p class="md:text-base text-sm">
        <span class="font-bold hover:text-blue-900 hover:cursor-pointer">{{ toast.user }}</span>
        &nbsp;
        <span
          :class="`text-gray-600 font-medium relative ${dotIsNew}`"
          v-html="typeNotification"
        ></span>
      </p>

      <p class="text-gray-500 font-semibold sm:text-sm text-xs">{{ toast.time }} ago</p>
      <p
        v-if="toast.type === 4"
        class="mt-2 bg-blue-100 text-slate-900 font-semibold text-sm p-5 hover:cursor-pointer hover:opacity-70"
      >
        {{ toast.detail }}
      </p>
    </section>
    <picture v-if="toast.type === 5">
      <img
        :src="`/images/${toast.detail}`"
        :alt="`comented picture ${toast.user}`"
        class="w-8 rounded-xl hover:cursor-pointer hover:opacity-70"
      />
    </picture>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { Notification } from '@/interfaces/Notifications'

interface Props {
  toast: Notification
}

const props = defineProps<Props>()

const isNew = computed(() => {
  return props.toast.isNew ? 'bg-slate-200' : 'bg-slate-100'
})

const dotIsNew = computed(() => {
  return props.toast.isNew
    ? 'after:w-2 after:h-2 after:bg-red-500 after:rounded-full after:content-[""] after:absolute'
    : ''
})

const typeNotification = computed(() => {
  switch (props.toast.type) {
    case 1:
      return `reacted to your recent post <span class="font-bold hover:opacity-80 text-blue-900 hover:cursor-pointer">${props.toast.detail}</span>`
    case 2:
      return `followed you`
    case 3:
      return `has joined your group <span class="font-bold hover:opacity-80 text-blue-900 hover:cursor-pointer">${props.toast.detail}</span>`
    case 4:
      return `sent you a private message.`
    case 5:
      return `commented on your picture`
    case 6:
      return `left the group <span class="font-bold hover:opacity-80 text-blue-900 hover:cursor-pointer">${props.toast.detail}</span>`

    default:
      return 'Hola'
  }
})
</script>
