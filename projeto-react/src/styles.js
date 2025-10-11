import styled from 'styled-components';
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

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

    ul{
        padding: 0;
        margin-top: 30px;

        h3{
            color: #0e0b0bff;
            font-weight: 400;
            text-align: center;
        }
    }
`

export const Input = styled.input`
    border: 2px solid #a28fcdff;
    border-radius: 5px;
    height: 40px;
    margin-right: 10px;
    width: 340px;

    &::placeholder{
        font-size: 16px;
        padding-left: 10px;
    }
`

export const Botao = styled.button`
    background: #8052ec;
    border-radius: 5px;
    border: none;
    font-size: 17px;
    color: white;
    font-weight: 500;
    height: 40px;
    width: 130px;
    cursor: pointer;

    &:hover{
        background: #6b3ed1;
    }

    &:active{
        background: #5b2dab;
    }
`

export const ListaItem = styled.div`
    background: ${props => props.estaFinalizado ? '#b0ff8bff' : '#e4e4e4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 10px;
    width: 500px;

    li{
        list-style: none;
    }
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
    height: 20px;
    width: 20px;
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
    height: 20px;
    width: 20px;

`

