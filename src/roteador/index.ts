import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasView from "@/views/TarefasView.vue";
import ProjetosView from "@/views/ProjetosView.vue"; 
import FormularioProjetosView from "@/views/projetos/FormularioProjetosView.vue";
import ListaProjetosView from "@/views/projetos/ListaProjetosView.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: TarefasView
    },
    {
        path: '/projetos',
        component: ProjetosView,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: ListaProjetosView
            },
            {
                path: 'novo',
                name: 'Novo projeto',
                component: FormularioProjetosView
            },
            {
                path: ':id',
                name: 'Editar projeto',
                component: FormularioProjetosView,
                props: true
            },
        ]
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;