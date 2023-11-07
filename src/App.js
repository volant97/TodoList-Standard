import './App.css';
import React, { useState } from 'react';
import Input from './Component/Input';
import TodoList from './Component/TodoList';
// 경로에서 파일명이 없을 때 index를 default로 찾아간다
// jsx파일 이름 변경 후 import 선언한 파일 저장 진행

function App() {
  // useState 값이 배열이기에 todos로 명명해주는 것이 오해의 소지를 줄일 수 있다
  const [todos, setTodos] = useState([]);

  return (
    <div className="out_line">
      <header>
        <Input
          key={"Input"}
          todos={todos}
          setTodos={setTodos}
        />
      </header>
      <footer>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            listIsDone={false}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            listIsDone={true}
          />
      </footer>
    </div>
  )
}

export default App;
