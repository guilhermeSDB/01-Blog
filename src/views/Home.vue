<template>
  <div>
    <Header />
  
    <ul 
      class="lg:max-w-[900px] mx-auto mb-[25px] lg:mb-[50px]" 
    >
      <li
        class="cursor-pointer hover:bg-gray-100"
        v-for="shortArticle in shortArticles" 
        :key="shortArticle.id"
      >
        <ArticleCard  
          @onClick="goToArticle"
          :data='shortArticle' 
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import ArticleCard from '../components/Card/ArticleCard/ArticleCard.vue';
import Header from '../components/Header/header.vue';
import { shortArticles } from '../assets/articles';
import { useRouter } from 'vue-router';

const router = useRouter();
function goToArticle(id: number){
  router.push({ path: `/article/${id}`})
}

</script>