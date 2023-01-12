import React, {useState} from 'react'

export default function App() {
  const listStyle = {
    padding:"10px",
    borderBottom:"1px #ccc dotted",
    TextDecoration:"none"
  }
  // 버튼스타일
  const btnStyle = {
    color:"#fff",
    border:"none",
    padding:"5px 9px",
    borderRadius: "50%",
    cusor:"pointer",
    float:"right"
  }
  // 배열은 []를 쓴다
  const todoList = [
    {id:"1", title:"공부하기", completed:true},
    {id:"2", title:"청소하기", completed:false}
  ]
  // 2. textChange 함수
  const textChange = (e) => {
    // console.log('e', e.target.value)
    setValue(e.target.value);
  }

const [value, setValue] = useState("");

  return (
    <div className='container'>
      <div className="todoBlock">
        <div className="title">
          <h1>To Do List</h1>
        </div>
        {/* 2. map()메소드를 이용해 배열내의 요소를 호출한 결과를 모아 새로운 배열로 반환 */}
        {todoList.map((data) =>
          <div style={listStyle} key={data.id}>
            <input type="checkbox" defaultChecked={false} />
            {data.title}
            <button style={btnStyle}>X</button>
          </div>
        )}
        {/* 할일 목록 추가 입력창 만들기 */}
        <form style={{display:'flex'}}>
          <input type="text" name='value' style={{flex:'10', padding:'50px'}} placeholder="해야할 일을 입력하세요" onChange={textChange} value={value} />
        </form>
      </div>
    </div>
  )
}
