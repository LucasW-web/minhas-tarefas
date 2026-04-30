import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Contatos'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      nome: 'José Miguel',
      telefone: '(43) 99999-9999',
      email: 'jose.miguel@gmail.com'
    },
    {
      id: 2,
      nome: 'Maria Fatima',
      telefone: '(43) 88888-8888',
      email: 'maria.fatima@gmail.com'
    },
    {
      id: 3,
      nome: 'Luiz Almeida',
      telefone: '(43) 77777-7777',
      email: 'luiz.almeida@gmail.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLocaleLowerCase() ===
          action.payload.nome.toLocaleLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe uma contato com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
