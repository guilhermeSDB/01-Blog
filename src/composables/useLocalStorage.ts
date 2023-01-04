import { Article } from "../types/Article";
import { LocalStorageEnum } from '../types/LocalStorageEnum';

export function setLocalStorage(key: LocalStorageEnum, value: Array<Article>): void{
    const valueStringify = JSON.stringify(value);
    localStorage.setItem(key, valueStringify);
    console.log('Salvo no Local Storage com Sucesso', value);
}

export function getLocalStorage(key: LocalStorageEnum){
    const value = localStorage.getItem(key);
    const articles: Array<Article> = value ? JSON.parse(value) : [];
    console.log('Recuperado do Local Storage com Sucesso', articles);
    return articles
}