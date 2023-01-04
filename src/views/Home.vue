<template>
  <div>
    <Header
      @onInput="searchArticle"
    />

    <div class="lg:max-w-[900px] mx-auto mb-[25px] lg:mb-[50px] relative">

      <ul v-if="isLoadingShortArticles">
        <li 
          v-for="(item, index) in 4" 
          :key="index" 
          class="bg-white border border-blue-300 shadow rounded-md p-6 bg-white rounded-md shadow-md mx-5 my-[25px] p-4 lg:mx-0 lg:my-[50px] transition-all"
        >
          <div class="animate-pulse flex space-x-4">
  
            <div class="flex-1 space-y-6 py-1">
              <div class="flex items-center justify-between">
                <div class="w-40 h-3 bg-gradient-to-r from-[#574ae8] to-[#3ea1db] rounded"></div>
                <i class="bx bxs-heart bx-sm text-[59px] text-[#3ea1db] cursor-pointer"></i>
              </div>
              <div class="h-4 mt-[27px] mb-[9px] bg-gradient-to-r from-[#574ae8] to-[#3ea1db] rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-3 bg-gradient-to-r from-[#574ae8] to-[#3ea1db] rounded col-span-2"></div>
                  <div class="h-3 bg-gradient-to-r from-[#574ae8] to-[#3ea1db] rounded col-span-1"></div>
                </div>
                <div class="h-3 bg-gradient-to-r from-[#574ae8] to-[#3ea1db] rounded"></div>
                <div class="h-3 bg-gradient-to-r from-[#574ae8] to-[#3ea1db] rounded"></div>
              </div>
            </div>
  
          </div>
        </li>
      </ul>

      <ul v-if="data.length > 0">
        <li
          v-for="shortArticle in data" 
          :key="shortArticle.id"
        >
        <TransitionGroup name="projects">
          <ArticleCard  
            @onClick="goToArticle"
            :data='shortArticle' 
          />
        </TransitionGroup>
        </li>
      </ul>
  
      <div v-else-if="data.length === 0 && isLoadingShortArticles === false" class="h-40 flex items-center justify-center">
        <p>Nenhum Artigo Encontrado</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArticleCard from '../components/Card/ArticleCard/ArticleCard.vue';
import Header from '../components/Header/header.vue';
import { shortArticles } from '../assets/articles';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { Article } from '../types/Article';
import { useArticleStore } from '../store/articles';

const router = useRouter();
const isLoadingShortArticles = ref<boolean>(true);
const data = ref<Article[]>([]);
const articleStore = useArticleStore();

function goToArticle(id: number){
  router.push({ path: `/article/${id}`})
}

async function getArticles(){
  isLoadingShortArticles.value = true;

  await articleStore.getArticles();

  data.value = articleStore.listOfArticles;

  isLoadingShortArticles.value = false;
}

function searchArticle(search: string){
  if(search.length > 1){
    data.value = articleStore.listOfArticles.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    })
  }else{
    data.value = [...articleStore.listOfArticles];
  }
}

onMounted(() => {
  getArticles();
})

</script>

<style>
.projects {
	margin-bottom:50px;
	margin-top:25px;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
}

.projects-enter {
	transform: scale(0.5) translateY(-80px);
	opacity:0;
}

.projects-leave-to{
	transform: translateY(30px);
	opacity:0;
}

.projects-leave-active {
	position: absolute;
	z-index:-1;
}
</style>