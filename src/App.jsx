import './App.css'
import MyClock from "./02/MyClock"

function App() {

  return (//div는 노드를 생성하는 게 아니라 묶어만 줌
          //반드시 슬래쉬로 닫아야 함
          
    <div className='w-full h-screen flex flex-col bg-red-100 justify-center items-center'>
      <MyClock />
    </div>
  )
}

export default App
