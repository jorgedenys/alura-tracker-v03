<template>
    <BoxTarefas>
        <div class="columns clicavel" @click="tarefaClicada">
            <div class="column is-4">
                {{ tarefa.descricao || 'Tarefa sem descrição' }}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto.nome }}
            </div>
            <div class="column">
                <CronometroTarefas :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </BoxTarefas>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometroTarefas from './CronometroTarefas.vue';
import ITarefa from '@/interfaces/ITarefa';
import BoxTarefas from './BoxTarefas.vue';

export default defineComponent({
    name: 'TarefasRealizadas',
    emits: ['aoTarefaClicada'],
    components: { CronometroTarefas, BoxTarefas },
    props: {
        tarefa: { type: Object as PropType<ITarefa>, required: true }
    },
    methods: {
        tarefaClicada(): void {
            this.$emit('aoTarefaClicada', this.tarefa)
        }
    }
})
</script>

<style scoped>
.clicavel {
    cursor: pointer;
}
</style>