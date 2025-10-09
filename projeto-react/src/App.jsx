import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import { Botao, Container, Input, ToDoList, ListaItem } from "./styles";
import { FcEmptyTrash , FcCheckmark } from "react-icons/fc";

function App() {
  // useState retorna um array com 2 posições
  // 1. Variável com o valor do estado = lista
  // 2. Função para atualizar esse valor = setLista
  // 3. useState recebe o valor inicial do estado = []
  // uuid é uma função usada para gerar IDs únicos

  const [lista, setLista] = useState([{ id: uuid(), tarefa: "Nada", finalizado: true }]);
  const [tarefa, setTarefa] = useState("");

  function inputChange(event) {
    setTarefa(event.target.value);
  }

  function cliqueiNoBotao() {
    setLista([...lista, { id: uuid(), tarefa: tarefa, finalizado: false }]);
  }

  function finalizarTarefa(id){
    const novaLista = lista.map( item => (
      item.id === id ? { ...item, finalizado: !item.finalizado} : item
    ))
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
          {lista.map((item) => (
            <ListaItem estaFinalizado={item.finalizado} key={item.id}>
              <FcCheckmark onClick={() => finalizarTarefa(item.id)} />
              <li>{item.tarefa}</li>
              <FcEmptyTrash />
            </ListaItem>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
