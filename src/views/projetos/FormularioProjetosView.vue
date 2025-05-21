<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
                <input 
                    type="text"
                    class="input" 
                    v-model="nomeDoProjeto" 
                    id="nomeDoProjeto">
            </div>
            <div class="field">
                <button class="button" type="submit">Salvar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';
import { ADICIONA_PROJETO, ALTERA_PROJETO }  from '@/store/tipo-mutacoes';
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { notificacaoMixin } from '@/mixins/notificar';
import useNotificador from '@/hooks/notificador';
import { CADASTRAR_PROJETO } from '@/store/tipo-acoes';

export default defineComponent({
    name: 'FormularioProjetosView',
    props: {
        id: { type: String}
    },
    mixins: [notificacaoMixin],
    data() {
        return {
            nomeDoProjeto: '',
            store: useStore(),
            notificador: useNotificador()
        }
    },
    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    methods: {
        salvar() {
            if (this.id && this.id.trim() !== '') {
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                })
            } else {
                //this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto)
                this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
            }
            this.nomeDoProjeto = ''
            this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'O projeto foi cadastrado com sucesso!')
            this.$router.push('/projetos')
        }        
    }
})
</script>