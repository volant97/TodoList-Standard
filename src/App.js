import './App.css';
import React, { useState} from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [contents, setcontens] = useState("");
  const [todo, setTodo] = useState([]);

  const addClickHandler = (e) => {
    e.preventDefault()

    

    const newTodo = [
      {
        id: Date.now(),
        title: title,
        contents: contents,
        isDone: false,
      },
    ]

    setTodo([...todo, newTodo]);

    setTitle("")
    setcontens("")
  }

  const titleInputHandler = (e) => {
    setTitle(e.target.value)
  }

  const constensInputHandler = (e) => {
    setcontens(e.target.value)
  }

  console.log(todo)

  return (
    <div className="out_line">
      <header>
        <form>
          <div>
            <p>제목</p>
            <input
              value={title}
              onChange={titleInputHandler}
            />
          </div>
          <div>
            <p>내용</p>
            <input
              value={contents}
              onChange={constensInputHandler}
            />
          </div>
          <button onClick={addClickHandler}>추가하기</button>
        </form>
      </header>
      <footer>
        <div>
        <h1>할일 목록</h1>
  
            {todo
            .map(item => {
              return (
              <div key={item.id}>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.contents}</p>
                <p>{item.isDone}</p>
              </div>
            )
            })}

        <h1>완료 목록</h1>
        <div>

        </div>
        </div>
      </footer>
    </div>
  )
}

export default App;
