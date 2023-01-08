import { router } from '../router/index'

export function goToArticle(title: string){
    router.push({ path: `/article/${title}`})
}