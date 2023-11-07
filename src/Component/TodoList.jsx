function TodoList(props) {
  const { todos, setTodos, listIsDone } = props;

  const DeleteHandler = (todo) => {
    const deleteTodos = todos.filter(item => {
      return item.id !== todo.id
    })
    setTodos(deleteTodos)
  }

  // isDone 값 변경 안됨 => if문 안에 매개변수에 다른 값이 들어갔었다.
  const doneHandler = (todo) => {
    const doneTodo = todos.map(item => {
      // todo값은 위에 map에서 내려온 매개변수
      if (item.id === todo.id) {
        return {
          ...item,
          isDone: !item.isDone,
        }
      } else {
        return item;
      }
    })
    setTodos(doneTodo)
  }

  return (
    <div className='todo_box'>
      <h1 >{listIsDone ? "완료 목록" : "할 일 목록"}</h1>
      <div className='card_box'>
        {todos.filter(item => {
          return item.isDone === listIsDone
        })
          .map(todo => {
            return (
              <div className="card" key={todo.id}>
                {/* <p>{todo.id}</p> */}
                <h2>{todo.title}</h2>
                <p>{todo.contents}</p>
                {/* <p>{todo.isDone.toString()}</p> */}
                <button onClick={() => DeleteHandler(todo)}>삭제하기</button>
                <button onClick={() => doneHandler(todo)}>{listIsDone ? "수정" : "완료"}</button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default TodoList
