import { Article } from "../types/Article";
import { LocalStorageEnum } from '../types/LocalStorageEnum';

export function setLocalStorage(key: LocalStorageEnum, value: Array<Article>): void{
    const valueStringify = JSON.stringify(value);
    localStorage.setItem(key, valueStringify);
}

export function getLocalStorage(key: LocalStorageEnum){
    const value = localStorage.getItem(key);
    const articles: Array<Article> = value ? JSON.parse(value) : [];
    return articles
}