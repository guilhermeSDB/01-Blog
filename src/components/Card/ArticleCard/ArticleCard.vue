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
    <h2 v-on:click="handleClickTitle(props.data.title)" class="text-lg text-[#1A202C] mt-[27px] mb-[9px] cursor-pointer hover:underline">
      {{ props.data.title }}
    </h2>
    <p class="text-sm text-[#717171] leading-[26px]">
      {{ props.data.content }}
    </p>
  </article>  
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFavoriteStore } from '../../../store/favorites';

const emit = defineEmits<{
  (e: 'onClick', value: string ): void
}>();

const props = defineProps({
  data: { type: Object, required: true },
})

const store = useFavoriteStore();
const isFavorite = computed(()=> store.isFavorite(props.data.title))

function handleToggleFavorite(){

  if(isFavorite.value){
    store.removeFavorites(props.data.title);
  }else{
    store.addFavorites(props.data.title);
  }
}


function handleClickTitle(title: string){
  emit('onClick', title);
}

</script>