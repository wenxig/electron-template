import { createRouter, createWebHistory } from "vue-router"
import Init from '@renderer/pages/index.vue'
export const router = createRouter({
  history: createWebHistory('/'),
  routes: [{
    path: '/',
    component: Init
  }]
})