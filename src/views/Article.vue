<template>
  <div>
    <img :src="data.imageUrl" alt="" class=" w-full mx-auto h-40 object-cover mb-6 lg:h-80 lg:mb-10">

    <div class="max-w-[900px] mx-auto px-4 lg:px-0 overflow-hidden">
      <div class="mb-10">
        <router-link to="/">
          <i class='bx bx-left-arrow-alt w-10 h-10 flex items-center justify-center text-3xl cursor-pointer hover:bg-slate-200 rounded-full'></i>
        </router-link>
      </div>
      
      <div>

        <div class="my-5 font-light text-gray-400">
          <p>{{ data.date }} at {{ data.time }} </p>
        </div>

        <div>
          <h1 class="text-5xl text-black">{{ data.title }}</h1>
          <p class="my-10 font-light">
            {{ data.content }}
          </p>
        </div>
        <a :href="data.readMoreUrl" target="_blank" class="text-[#3ea1db] underline">Read More</a>
        <p class="text-gray-400 font-light">
          Author:
          <span>{{ data.author }}</span> 
        </p>

      </div>
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
  author: '',
  date: '',
  time: '',
  id: '',
  title: '',
  content: '',
  imageUrl: '',
  readMoreUrl: '',
});

if(articleId.value){
  const response: Article | undefined = shortArticles.find(x => x.id == articleId.value);

  if (response) {
    data.value = response;
  }
}

</script>