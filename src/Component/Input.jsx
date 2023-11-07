import React, { useState } from "react";
import uuid from "react-uuid"

function Input(props) {
  const { todos, setTodos } = props;

  const [title, setTitle] = useState("");
  const [contents, setcontens] = useState("");

  const titleInputHandler = (e) => {
    setTitle(e.target.value)
  }

  const constensInputHandler = (e) => {
    setcontens(e.target.value)
  }

  const addClickHandler = (e) => {
    e.preventDefault();

    // 오류 : {}를 감싸는 [] 오타
    const newTodos = {
      id: uuid(),
      title: title,
      contents: contents,
      isDone: false,
    };

    setTodos([...todos, newTodos]);

    setTitle("")
    setcontens("")
  }

  return (
    <>
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
        {/* 기본적으로 form태그 안의 button은 submit으로 설정. 그러나 type을 명확하게 명시해주는 것이 협업에 좋다.
          type="button"으로 설정한다면 엔터 작성 시 작동을 막을 수 있다. */}
        <button onClick={addClickHandler}>추가하기</button>
      </form>
    </>
  )
}

export default Input