<template>
    <section>
        <router-link to="/projetos/novo" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo Projeto</span>
        </router-link>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>
                        {{ projeto.id }}
                    </td>
                    <td>
                        {{ projeto.nome }} 
                    </td>
                    <td>
                        <router-link :to="`/projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import IProjeto from '@/interfaces/IProjeto';
import { useStore } from '@/store';
import { defineComponent } from 'vue';
import { OBTER_PROJETOS, REMOVER_PROJETO } from '@/store/tipo-acoes';

export default defineComponent({
    name: 'ListaProjetosView',
    data() {
        return {
            store: useStore()
        }
    },
    computed: {
        projetos(): IProjeto[] {
            this.store.dispatch(OBTER_PROJETOS)
            return this.store.state.projeto.projetos as IProjeto[]
        }
    },
    methods: {
        excluir (id: string) {
            this.store.dispatch(REMOVER_PROJETO, id)
        }
    }
})
</script>