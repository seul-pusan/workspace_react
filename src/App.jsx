import './App.css'
import Header from './05/Header'
import Footer from './05/Footer'
import BoxOffice from './09/BoxOffice'

function App() {

  return (//div는 노드를 생성하는 게 아니라 묶어만 줌
    //반드시 슬래쉬로 닫아야 함


     <div className='w-full h-screen flex flex-col'>
      <Header />
      <main className='container mx-auto flex flex-col justify-center'>
        <BoxOffice />
     </main>
    
     
    </div>


  )
}

export default App
