import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
  background-color: bisque;
`
const Titulo = styled.h1`
color: bisque;
background-color: blueviolet;
`
const Tarefa = styled.li`
  color: blueviolet;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`
const Button = styled.button`
  background-color: bisque;
  border: none;
  color: blueviolet;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

const InputsContainer = styled.div`
  color: blueviolet;
  display: grid;
  border-radius: 5px;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [ {
        id: Date.now(),
        texto: "Aula [Labenu] ",
        completa: false,
        },
        {
          id: Date.now(),
          texto: "Estudar [Exercício]",
          completa: true
        },
  ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id === this.state.tarefas) {
      localStorage.setItem("tarefas", JSON.stringfy(this.state.tarefas))
    }
  };

  componentDidMount() {
    const tarefas = localStorage.getItem("tarefas")
      if (tarefas) {
        const listaTarefa = localStorage.getItem("tarefas")
        const lista = JSON.parse(listaTarefa)
        this.setState({id: lista[0]?.id})
        this.setState({texto: lista[0]?.texto})
        this.setState({completa: lista[0]?.completa})
      }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = [...this.state.tarefas];
    const tarefa = {
      id:Date.now,
      texto: this.state.inputValue,
      completa: false,
    };
    novaTarefa.push(tarefa);
    this.setState({tarefas: novaTarefa});
    localStorage.setItem("tarefas", JSON.stringify(novaTarefa))
  };

  selectTarefa = (id) => {
      const editado = this.state.tarefas.map((index) => {
          if (id === index.id) {
        const listaEditada = {
          ...index,
          completa: !index.completa
        }
        return listaEditada
          } else {
            return index
          }
      })
      this.setState({tarefas: editado})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  } 

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <Titulo>Lista de tarefas</Titulo>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <Button onClick={this.criaTarefa}>Adicionar</Button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
