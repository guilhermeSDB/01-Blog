<template>
  <div class="max-w-[900px] mx-auto px-4 lg:px-0 overflow-hidden">

    <div class="my-10">
      <router-link to="/">
        <i class='bx bx-left-arrow-alt w-10 h-10 flex items-center justify-center text-3xl cursor-pointer hover:bg-slate-200 rounded-full'></i>
      </router-link>
    </div>
    
    <div>
      <h1 class="text-5xl text-black">{{ data.title }}</h1>
      <p class="my-10 font-light">
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, ComputedRef } from 'vue';
import { shortArticles } from '../assets/articles';
import { useRoute } from 'vue-router';
import { Article } from '../types/Article';
import type { Ref } from 'vue';

const route = useRoute();
const articleId = computed(() => route.params.id) as ComputedRef<string>;
const data: Ref<Article> = ref({
  id: 0,
  date: '',
  title: '',
  description: '',
});

if(articleId.value){
  const response: Article | undefined = shortArticles.find(x => x.id == parseInt(articleId.value));

  if (response) {
    data.value = response;
  }
}

</script>