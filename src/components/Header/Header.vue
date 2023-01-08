<template>
  <header class="w-full h-[200px] bg-gradient-to-r from-[#574ae8] to-[#3ea1db] px-5">
    <div class="max-w-[900px] mx-auto">
      <div class="flex items-center justify-between text-white text-lg font-normal pt-12">
        <div>
          Codêlandia
        </div>
        <div class="flex items-center gap-3">
          <span v-on:click="handleOpenFavorites" class="transition-all cursor-pointer hover:underline">Favoritos</span>

          <hr class="border-[.1px] border-gray-200 w-[.1px] h-4 rounded-full">

          <span>blog</span>
        </div>
      </div>
  
      <div class="py-3 mt-10">
        <Search 
          placeholder="Pesquisar no blog"
          @onInput="onChangeValue" 
        />
      </div>
    </div>
  </header>
</template>

<script setup lang=ts>
import Search from '../Common/Search/Search.vue';

const emit = defineEmits<{
  (e: 'onInput', value: string ): void,
  (e: 'handleOpenFavorites' ): void,
}>();

function onChangeValue(value: string){
  emit('onInput', value)
}

function handleOpenFavorites(){
  emit('handleOpenFavorites');
}

</script>