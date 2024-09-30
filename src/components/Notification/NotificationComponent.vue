<template>
  <div>
    <section class="w-full flex justify-between items-center mb-10">
      <h3 class="text-2xl font-bold">
        Notifications <BadgeComponent :text="notifications.notificationsTotal" />
      </h3>
      <span
        class="font-semibold hover:cursor-pointer text-blue-950 hover:opacity-75"
        @click="notif"
      >
        Mark all as read
      </span>
    </section>
    <section class="flex flex-col gap-2">
      <ToastComponent
        v-for="(toast, index) in notifications.notifications"
        :key="index"
        :toast="toast"
      />
    </section>
  </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import type { Notifications } from '@/interfaces/Notifications'
import { BadgeComponent } from '@/components/Badge'
import { ToastComponent } from '@/components/Toast'

interface Props {
  notifications: Notifications
}

defineProps<Props>()

const notif = inject<() => {}>('notifications')
</script>
