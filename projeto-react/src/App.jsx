import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import { Botao, Container, Input, ToDoList } from "./styles";

function App() {
  // useState retorna um array com 2 posições
  // 1. Variável com o valor do estado = lista
  // 2. Função para atualizar esse valor = setLista
  // 3. useState recebe o valor inicial do estado = []
  // uuid é uma função usada para gerar IDs únicos

  const [lista, setLista] = useState([{ id: uuid(), tarefa: "Nada" }]);
  const [tarefa, setTarefa] = useState("");

  function inputChange(event) {
    setTarefa(event.target.value);
  }

  function cliqueiNoBotao() {
    setLista([...lista, { id: uuid(), tarefa: tarefa }]);
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
            <li key={item.id}>{item.tarefa}</li>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
