<template>
  <header class="w-full h-[200px] bg-gradient-to-r from-[#574ae8] to-[#3ea1db] px-5">
    <div class="max-w-[900px] mx-auto">
      <div class="flex items-center justify-between text-white text-lg font-normal pt-12">
        <div>
          Codêlandia
        </div>
        <div>
          blog
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

function onChangeValue(valor: string){
  console.log(valor);
}

</script>