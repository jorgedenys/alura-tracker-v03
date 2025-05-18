<template>
    <BoxTarefas>
        <div class="columns">
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
    components: { CronometroTarefas, BoxTarefas },
    props: {
        tarefa: { type: Object as PropType<ITarefa>, required: true }
    }
})
</script>