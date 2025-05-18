<template>
    <section class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroTarefas :tempoEmSegundos="tempoEmSegundos" />
        <BotaoTarefas @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando" />
        <BotaoTarefas @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando" />
    </section>
</template>

<script lang="ts">
import { defineComponent, DefineComponent } from 'vue';
import CronometroTarefas from './CronometroTarefas.vue';
import BotaoTarefas from './BotaoTarefas.vue';

export default defineComponent({
    name: 'TemporizadorTarefas',
    emits: ['aoFinalizarTarefa'],
    components: { CronometroTarefas, BotaoTarefas },
    data () {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods: {
        iniciar() {
            this.cronometroRodando = true
            this.cronometro = setInterval( () => {
                this.tempoEmSegundos += 1;
            }, 1000)
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoFinalizarTarefa', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }
})
</script>