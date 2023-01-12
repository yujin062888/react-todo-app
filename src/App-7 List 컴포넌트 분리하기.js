import React, {useState} from 'react'
import Lists from "./components/Lists";
export default function App() {
  



  // 버튼스타일
  // 배열은 []를 쓴다

const [ todoList, setTodoList] = useState([]);

  // 2. textChange 함수
  const textChange = (e) => {
    // console.log('e', e.target.value)
    setValue(e.target.value);
  }

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





  return (
    <div className='container'>
      <div className="todoBlock">
        <div className="title">
          <h1>To Do List</h1>
        </div>
        
        <Lists todoList={todoList} setTodoList={setTodoList}/>

        <form style={{display:'flex'}} onSubmit={btnSubmit}>
          <input type="text" name='value' style={{flex:'10', padding:'5px'}} placeholder="해야할 일을 입력하세요" onChange={textChange} value={value} />
          <input type="submit" value="입력" style={{flex:'1'}} />
        </form>
      </div>
    </div>
  )
}
