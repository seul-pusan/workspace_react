import './App.css'
import Header from './05/Header'
import Footer from './05/Footer'
import Traffic from './10/Traffic'

function App() {

  return (//div는 노드를 생성하는 게 아니라 묶어만 줌
    //반드시 슬래쉬로 닫아야 함


     <div className='w-full h-screen flex flex-col'>
      <Header />
      <main className='bg-sal'>
        <Traffic />
     </main>
    
     
    </div>


  )
}

export default App
