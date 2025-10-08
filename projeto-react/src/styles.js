import styled from 'styled-components';

// const = Nome da variavel no caso vamos 
// estilzar uma div com nome Container = styled.div

export const Container = styled.div`
    background: linear-gradient(90deg, #383838, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 30px 20px;
`

export const Input = styled.input`
    border: 2px solid rgba(289, 211, 217, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 10px;
`

export const Botao = styled.button`
    background: #8052ec;
    border-radius: 5px;
    border: none;
    font-size: 17px;
    color: white;
    font-weight: 500;
    height: 40px;
`