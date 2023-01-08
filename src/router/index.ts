import { createRouter, createWebHistory } from 'vue-router';

import Article from '../views/Article.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article/:title',
    name: 'Article',
    component: Article,
    // beforeEnter: (to, _, next) => {
    //   const { id } = to.params

    //   if(Array.isArray(id)){
    //     next({ path: '/error'});
    //     return 
    //   };

    //   //Is a valid article id
    //   const index: number = parseInt(id);
    //   if(index < 0 || index >= shortArticles.length){
    //     next({ path: '/error'});
    //     return 
    //   };

    //   next();
    // }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
