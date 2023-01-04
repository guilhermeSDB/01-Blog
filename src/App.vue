<template>
  <router-view v-slot="{ Component }">
    <transition 
      name="route" 
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useFavoriteStore } from './store/favorites';

const favorites = useFavoriteStore();

onMounted(() => {
  favorites.getFavorites();
})
</script>

<style>
.route-enter-form{
  opacity: 0;
  transform: translateY(-100px);
}

.route-enter-active{
  transition: all 0.2s ease-out;
}

.route-leave-to{
  opacity: 0;
  transform: translateY(-100px);
}

.route-leave-active{
  transition: all 0.2s ease-in;
}
</style>
