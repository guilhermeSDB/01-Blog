<template>
  <div>
    <Header
      @onInput="searchArticle"
      @handleOpenFavorites="isOpenFavorites = true"
    />

    <div class="lg:max-w-[900px] mx-auto mb-[25px] lg:mb-[35px] relative">

      <ul v-if="isLoadingListOfArticles">
        <li 
          v-for="(item, index) in 4" 
          :key="index" 
          class="border border-blue-300 bg-white rounded-md shadow-md mx-5 my-[25px] p-4 lg:mx-0 lg:my-[50px] transition-all"
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

      <ul v-if="listOfArticles.length > 0">
        <li
          v-for="shortArticle in listOfArticles" 
          :key="shortArticle.id"
        >
        <TransitionGroup name="projects">
          <ArticleCard  
            @onClick="handleGoToArticle"
            :data='shortArticle' 
          />
        </TransitionGroup>
        </li>
      </ul>
  
      <div v-else-if="listOfArticles.length === 0 && isLoadingListOfArticles === false" class="h-40 flex items-center justify-center">
        <p>Nenhum Artigo Encontrado</p>
      </div>
    </div>

    <transition 
      enter="duration-300 ease-out"
      enter-from="opacity-0 scale-95"
      enter-to="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-95"
      >
      <Favorite 
        :isOpen="isOpenFavorites" 
        @onClose="isOpenFavorites = false" 
        :data="favoriteArticles"
      />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import ArticleCard from '../components/Card/ArticleCard/ArticleCard.vue';
import Header from '../components/Header/Header.vue';
import Favorite from '../components/Modal/Favorite/Favorite.vue';
import { ref, onMounted, computed } from 'vue';
import { Article } from '../types/Article';
import { useArticleStore } from '../store/articles';
import { useFavoriteStore } from '../store/favorites';
import { goToArticle } from '../utils/goToArticle';

const isLoadingListOfArticles = ref<boolean>(true);
const listOfArticles = ref<Article[]>([]);
const articleStore = useArticleStore();
const isOpenFavorites = ref<boolean>(false);
const favoriteStore = useFavoriteStore();
const favoriteArticles = computed(()=> favoriteStore.listOfFavorites);


function handleGoToArticle(title: string){
  goToArticle(title);
}

async function getArticles(){
  isLoadingListOfArticles.value = true;

  await articleStore.getArticles();

  listOfArticles.value = articleStore.listOfArticles;

  isLoadingListOfArticles.value = false;
}

function searchArticle(search: string){
  if(search.length > 1){
    listOfArticles.value = articleStore.listOfArticles.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    })
  }else{
    listOfArticles.value = [...articleStore.listOfArticles];
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