import { defineStore } from 'pinia';
import { Article } from '../types/Article';
import axios from 'axios';

export const useArticleStore = defineStore('articles', {
    state: () => {
        return{
            listOfArticles: <Article[]>[]
        }
    },
    getters: {},
    actions:{
        async getArticles(){
            if(this.listOfArticles.length === 0){
                try {
                    const response = await axios.get('https://inshorts.deta.dev/news?category=technology');
                    this.listOfArticles = response.data.data;
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
});