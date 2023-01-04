import { defineStore } from 'pinia';
import { Article } from '../types/Article';
import { useArticleStore } from './articles';
import { LocalStorageEnum} from '../types/LocalStorageEnum';

import { getLocalStorage, setLocalStorage } from '../composables/useLocalStorage'

export const useFavoriteStore = defineStore('favorites', {
    state: () => {
        return{
            listOfFavorites: <Article[]>[]
        }
    },
    getters: {
        totalFavorites: (state) => state.listOfFavorites.length,
        isFavorite: (state) => {
            return (title: string) => state.listOfFavorites.some(x => x.title === title)
        }
    },
    actions:{
        getFavorites(){
            this.listOfFavorites = getLocalStorage(LocalStorageEnum.FAVORITES);
        },
        setFavorites(){
            setLocalStorage(LocalStorageEnum.FAVORITES, this.listOfFavorites)
        },
        addFavorites(title: string) {
            const articles = useArticleStore()
            const selectedArticle = articles.listOfArticles.find(x => x.title === title) as Article;
            this.listOfFavorites = [...this.listOfFavorites, selectedArticle];

            this.setFavorites();
        },
        removeFavorites(title: string) {
            this.listOfFavorites = this.listOfFavorites.filter(x => x.title !== title);
        },
    }
});