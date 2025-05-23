<template>
    <FormularioTarefas @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <BoxTarefas v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </BoxTarefas>
        <TarefasRealizadas v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTarefas from '../components/FormularioTarefas.vue';
import TarefasRealizadas from '../components/TarefasRealizadas.vue';
import ITarefa from '../interfaces/ITarefa';
import BoxTarefas from '../components/BoxTarefas.vue';
import { useStore } from '@/store';
import { OBTER_TAREFAS } from '@/store/tipo-acoes';
  
export default defineComponent({
    name: 'App',
    components: { FormularioTarefas, TarefasRealizadas, BoxTarefas },
    data() {
        return {
            store: useStore()
        }
    },
    computed: {
        tarefas(): ITarefa[] {
            this.store.dispatch(OBTER_TAREFAS)
            return this.store.state.tarefas as ITarefa[]
        },
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        }
    }
});
</script>