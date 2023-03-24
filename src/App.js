import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Cambria, "Times New Roman", serif;
  font-size: 30px;
  color: white;
  text-shadow: 1px 1px 2px white, 0 0 25px white, 0 0 5px white;
  width: 100vw;
  height: 98vh;
  background-image: linear-gradient(magenta, skyblue);
`;
const Titulo = styled.div`
  border: 1 px solid red;
  border-radius: 20px;
}
`;

const ButtonBox = styled.div`
  width: 40vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  button {
    color: black;
    font-size: 20px;
    width: 10vw;
    height: 4vh;
    border: none;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export default class App extends Component {
  state = {
    listaDeTarefas: [],
    tarefas: ""
  };
  handleChange = (event) => {
    this.setState({
      tarefas: event.target.value
    });
  };
  handleClick = () => {
    if (this.state.listaDeTarefas.lenght !== "") {
      alert("Não");
    } else {
      this.setState({
        listaDeTarefas: this.state.listaDeTarefas.concat({
          tarefas: this.state.tarefas,
          id: Math.random(),
          delete: ""
        })
      });
    }
  };

  delete = (id) => {
    this.setState({
      listaDeTarefas: this.state.listaDeTarefas.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Titulo>
            <h1>✨ Lista de Tarefas </h1>{" "}
          </Titulo>
          <input
            placeholder="Digite sua tarefa"
            id="inp"
            onChange={this.handleChange}
            type="text"
          />
          <ButtonBox>
            {" "}
            <button onClick={this.handleClick}>Add</button>{" "}
          </ButtonBox>
          <ul>
            {this.state.listaDeTarefas.map((item) => (
              <li>
                {item.tarefas}{" "}
                <button
                  onClick={() => {
                    this.delete(item.id);
                  }}
                >
                  {" "}
                  DEL{" "}
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    );
  }
}
