import './App.css'
import MyDiv1 from './03/MyDiv1'
import MyDiv2 from './03/MyDiv2'
import MyDiv3 from './03/MyDiv3'

function App() {

  return (//div는 노드를 생성하는 게 아니라 묶어만 줌
          //반드시 슬래쉬로 닫아야 함
          
    <div className='w-full h-screen flex flex-col bg-red-100 justify-center items-center'>
      <MyDiv1 />
    </div>
  )
}

export default App
