import {createRouter, createWebHashHistory} from 'vue-router';

import Moorka from "./components/CarlMoorka.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/CarlMoorka', component: Moorka, alias:'/'},
    ]
})

// Что бы переходить по ссылкам без перезагрузки страницы