<template>
  <div>
    <Header
      @onInput="searchArticle"
    />
    
    <ul class="lg:max-w-[900px] mx-auto mb-[25px] lg:mb-[50px]">
        <li
          v-for="shortArticle in data" 
          :key="shortArticle.id"
        >
        <TransitionGroup 
          name="projects"
        >
          <ArticleCard  
            @onClick="goToArticle"
            :data='shortArticle' 
          />
        </TransitionGroup>
        </li>
      </ul>
  </div>
</template>

<script lang="ts" setup>
import ArticleCard from '../components/Card/ArticleCard/ArticleCard.vue';
import Header from '../components/Header/header.vue';
import { shortArticles } from '../assets/articles';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const data = ref([...shortArticles]);

function goToArticle(id: number){
  router.push({ path: `/article/${id}`})
}

function searchArticle(search: string){
  if(search.length > 1){
    data.value = shortArticles.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    })
  }else{
    data.value = [...shortArticles];
  }
}

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