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
  
export default defineComponent({
    name: 'App',
    components: { FormularioTarefas, TarefasRealizadas, BoxTarefas },
    data() {
        return {
            tarefas: [] as ITarefa[]
        }
    },
    computed: {
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