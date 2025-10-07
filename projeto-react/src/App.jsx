import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';

function App() {

  // useState retorna um array com 2 posições
  // 1. Variável com o valor do estado = lista
  // 2. Função para atualizar esse valor = setLista
  // 3. useState recebe o valor inicial do estado = []

  const [lista, setLista] = useState([{id: uuid(), tarefa: 'Nada'}]);

  function inputChange(event) {
    console.log(event.target.value);
    setLista([{id: uuid(), tarefa: event.target.value}])

    console.log(lista);
  }

  function cliqueiNoBotao() {
    console.log('Clicou no botao');
  }

  return (
    <div>

      <input onChange={inputChange} placeholder="Tarefa para fazer 📝 ... " />
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      <ul>
        {lista.map((item) => (
          <li key={item.id}>{item.tarefa}</li>
      ))}
      </ul>

    </div>
  )
}

export default App;
