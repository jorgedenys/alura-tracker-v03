<template>
    <FormularioTarefas @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <BoxTarefas v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </BoxTarefas>
        
        <TarefasRealizadas 
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa" 
          @aoTarefaClicada="selecionarTarefa"/>

        <div class="modal" :class="{ 'is-active': tarefaSelecionada }" v-if="tarefaSelecionada">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Editando uma tarefa</p>
                    <button
                      @click="fecharModal"
                      class="delete"
                      aria-label="close"
                    ></button>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <label for="descricaoDaTarefa" class="label">
                            Descrição
                        </label>
                        <input
                          type="text"
                          class="input"
                          v-model="tarefaSelecionada.descricao"
                          id="descricaoDaTarefa"
                        />
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button @click="alterarTarefa" class="button is-success">Salvar alterações</button>
                    <button @click="fecharModal" class="button">Cancelar</button>
                </footer>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import FormularioTarefas from '../components/FormularioTarefas.vue';
import TarefasRealizadas from '../components/TarefasRealizadas.vue';
import ITarefa from '../interfaces/ITarefa';
import BoxTarefas from '../components/BoxTarefas.vue';
import { useStore } from '@/store';
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';
  
export default defineComponent({
    name: 'App',
    components: { FormularioTarefas, TarefasRealizadas, BoxTarefas },
    data() {
        return {
            store: useStore(),
            tarefaSelecionada: null as ITarefa | null
        }
    },
    computed: {
        tarefas(): ITarefa[] {
            this.store.dispatch(OBTER_PROJETOS)
            this.store.dispatch(OBTER_TAREFAS)
            return this.store.state.tarefas as ITarefa[]
        },
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.store.dispatch(CADASTRAR_TAREFA, tarefa)
        },
        selecionarTarefa(tarefa: ITarefa) {
            this.tarefaSelecionada = tarefa
        },
        fecharModal() {
            this.tarefaSelecionada = null
        },
        alterarTarefa() {
            this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
                .then(() => this.fecharModal())
        }
    }
});
</script>