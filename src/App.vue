<template>
  <main class="bg-slate-200 min-h-screen flex justify-center items-center">
    <div class="bg-slate-50 w-full max-w-3xl mx-auto rounded p-5 shadow">
      <SpinnerComponent v-if="isLoading" />
      <NotificationComponent v-else :notifications="notifications" />
    </div>
  </main>
</template>
<script lang="ts" setup>
import { onMounted, provide, reactive, ref } from 'vue'
import { SpinnerComponent } from '@/components/Loading'
import { NotificationComponent } from '@/components/Notification'

import { sleep } from '@/utils/sleep'
import type { Notifications } from './interfaces/Notifications'
import { initialStateNotifications } from './consts/initialNotifications'

const notifications = reactive<Notifications>({ ...initialStateNotifications })
const isLoading = ref(true)

const markAllAsRead = () => {
  notifications.notificationsTotal = 0
  notifications.notifications = notifications.notifications.map((not) => {
    if (not.isNew) not.isNew = false
    return not
  })
}

provide('notifications', markAllAsRead)

onMounted(async () => {
  const result = await fetch('data/data.json')
  const data = await result.json()

  await sleep()

  isLoading.value = false
  Object.assign(notifications, data)
})
</script>
