<template>
    <div class="notificacoes">
        <article 
          class="message"
          :class="contexto[notificacao.tipo]"
          v-for="notificacao in notificacoes"
          :key="notificacao.id"
        >
            <div class="message-header"> {{ notificacao.titulo }} </div>
            <div class="message-body"> {{ notificacao.texto }} </div>
        </article>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { INotificacao, TipoNotificacao } from '@/interfaces/INotificacao';

export default defineComponent({
    name: 'NotificacoesTracker',
    data() {
        return {
            store: useStore(),
            contexto: {
                [TipoNotificacao.SUCESSO]: 'is-success',
                [TipoNotificacao.ATENCAO]: 'is-warning',
                [TipoNotificacao.FALHA]: 'is-danger'
            }
        }
    },
    computed: {
        notificacoes(): INotificacao[] {
            return this.store.state.notificacoes as INotificacao[]
        }
    }
})
</script>

<style scoped>
.notificacoes {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 105;
}
</style>