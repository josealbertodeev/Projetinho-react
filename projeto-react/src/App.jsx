import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import { Botao, Container, Input, ToDoList, ListaItem, Check, Trash } from "./styles";

function App() {
  // useState retorna um array com 2 posições
  // 1. Variável com o valor do estado = lista
  // 2. Função para atualizar esse valor = setLista
  // 3. useState recebe o valor inicial do estado = []
  // uuid é uma função usada para gerar IDs únicos

  const [lista, setLista] = useState([]);
  const [tarefa, setTarefa] = useState("");

  function inputChange(event) {
    setTarefa(event.target.value);
  }

  function cliqueiNoBotao() {
    if(tarefa){
      setLista([...lista, { id: uuid(), tarefa: tarefa, finalizado: false }]);
    } else {
      alert("Por favor, insira uma tarefa!");
    }
  }

  function finalizarTarefa(id) {
    const novaLista = lista.map(item => (
      item.id === id ? { ...item, finalizado: !item.finalizado } : item
    ))
    setLista(novaLista)
  }

  function deletarItem(id) {
    const novaLista = lista.filter(item => item.id !== id)
    setLista(novaLista)
  }

  return (
    <Container>
      <ToDoList>
        <Input
          className="input-tarefa"
          onChange={inputChange}
          placeholder="Tarefa para fazer 📝 ... "
        />
        <Botao onClick={cliqueiNoBotao}>Adicionar</Botao>

        <ul>
          {
            lista.length > 0 ? (
              lista.map((item) => (
                <ListaItem estaFinalizado={item.finalizado} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.tarefa}</li>
                  <Trash onClick={() => deletarItem(item.id)} />
                </ListaItem>
              ))
            ) : (
              <h3>Não há tarefas na lista</h3>
            )
          }
        </ul>
      </ToDoList>
    </Container>
  )
}


export default App;
