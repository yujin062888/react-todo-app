import React, {useState} from 'react'
import Lists from "./components/Lists";
import Form from "./components/Form";
export default function App() {
  



  // 버튼스타일
  // 배열은 []를 쓴다

const [ todoList, setTodoList] = useState([]);

  // 2. textChange 함수

const [value, setValue] = useState("");

const btnSubmit = (e) => {
  e.preventDefault();

  let newTodo = {
    id: Date.now(),
    title:value,
    completed:false
  }
  setTodoList(prev => [...prev, newTodo])
  setValue("");
}

const deleteAll = () => {
  setTodoList([]);
}


  return (
    <div className='container'>
      <div className="todoBlock">
        <div className="title">
          <h1>To Do List</h1>
          <button className='deleteBtn' onClick={deleteAll}>Delete All</button>
        </div>
        <Lists todoList={todoList} setTodoList={setTodoList}/>
        <Form value={value} setValue={setValue} btnSubmit={btnSubmit}/>
      </div>
    </div>
  )
}
