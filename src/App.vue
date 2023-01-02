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
