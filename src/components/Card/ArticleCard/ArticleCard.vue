<template>
  <article class="bg-white rounded-md shadow-md mx-5 my-[25px] p-4 lg:mx-0 lg:my-[50px] transition-all">
    <div class="flex items-center justify-between">
      <time class="text-sm text-[#717171]">{{ props.data.date }}</time>
      <i 
        v-on:click="handleToggleFavorite" 
        :class="[isFavorite 
          ? 
          'bxs-heart' 
          : 
          'bx-heart',
          'bx bx-sm text-[#574AE8] text-[59px] cursor-pointer']"
      >
      </i>
    </div>
    <h2 v-on:click="handleClickTitle(props.data.id)" class="text-lg text-[#1A202C] mt-[27px] mb-[9px] cursor-pointer hover:underline">
      {{ props.data.title }}
    </h2>
    <p class="text-sm text-[#717171] leading-[26px]">
      {{ props.data.content }}
    </p>
  </article>  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const emit = defineEmits<{
  (e: 'onClick', value: number ): void
}>();

const isFavorite: Ref<boolean> = ref(false);

const props = defineProps({
  data: { type: Object, required: true },
})

function handleToggleFavorite(){
  isFavorite.value = !isFavorite.value;
}

function handleClickTitle(id: number){
  emit('onClick', id);
}

</script>