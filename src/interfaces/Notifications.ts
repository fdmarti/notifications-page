export interface Notifications {
  notificationsTotal: number
  notifications: Notification[]
}

export interface Notification {
  user: string
  avatar: string
  type: number
  isNew: boolean
  detail: string
  time: string
}
