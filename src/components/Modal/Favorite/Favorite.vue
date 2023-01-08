<template>
    <!-- Main modal -->
    <div 
        id="defaultModal" 
        tabindex="-1" 
        aria-hidden="true" 
        :class="[props.isOpen ? 'fixed': 'hidden', 'w-full h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80 inset-0 z-40 top-0 bottom-0 right-0 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full']"
    >
        <div class="absolute right-0 w-96 h-screen max-w-2xl md:h-auto">
            <!-- Modal content -->
            <div class="relative h-screen flex flex-col bg-white shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Lista de Favoritos
                    </h3>
                    <button v-on:click="handleClose" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="bg-white flex flex-1">

                    <ul v-if="data.length > 0">
                        <li v-for="favorite in data" :key="favorite.id">
                            <button v-on:click="goToArticle(favorite.title)" class="flex overflow-hidden relative items-center justify-between text-left border-[1px] border-gray-200 rounded-lg my-2 py-4 pl-3 pr-6 mx-4">
                                <div>
                                    <h2 class="font-bold text-lg">{{ favorite.title }}</h2>
                                    <p class="w-72 truncate font-light text-md">{{ favorite.content }}</p>
                                </div>
                                <div v-on:click.stop="removeFavorite(favorite.title)" class="absolute h-full right-0 flex items-center justify-center w-10 bg-red-600 text-white">
                                    <i class="bx bx-trash mx-auto"></i>
                                </div>
                            </button>
                        </li>
                    </ul>

                    <div v-else class="m-5 text-center mx-auto">
                        Adicione seus artigos favoritos <br> 
                        clicando no <i class="bx bxs-heart text-lg text-[#574ae8] dark:text-white"></i>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue';
import { Article } from '../../../types/Article';
import { goToArticle } from '../../../utils/goToArticle';
import { useFavoriteStore } from '../../../store/favorites';
import { setLocalStorage } from '../../../composables/useLocalStorage';
import { LocalStorageEnum } from '../../../types/LocalStorageEnum';

const favoriteStore = useFavoriteStore();

const props = defineProps({
    isOpen: { type: Boolean, required: true, default: false },
    data: { type: Array as PropType<Article[]>, required: true },
});

const emit = defineEmits<{
  (e: 'onClose' ): void,
}>();

function removeFavorite(favoriteTitle: string){
    favoriteStore.removeFavorites(favoriteTitle);

    const newFavoriteStore = favoriteStore.listOfFavorites;

    setLocalStorage(LocalStorageEnum.FAVORITES, newFavoriteStore);

    favoriteStore.getFavorites();
}

function handleClose(){
    emit('onClose');
}

</script>

<style></style>