import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/todolist',
    component: () => import('../views/todo-list.vue'),
  }],
});
