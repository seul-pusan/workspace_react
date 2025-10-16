import './App.css'
import Header from './05/Header'
import Footer from './05/Footer'
import Lotto from './06/Lotto'
import MyToggle from './05/MyToggle'

function App() {

  return (//div는 노드를 생성하는 게 아니라 묶어만 줌
    //반드시 슬래쉬로 닫아야 함

    <div className='w-full h-screen flex flex-col overflow-y-hidden'>
      <Header />
      <main className='container mx-auto flex flex-col flex-grow overflow-y-auto'>
        <Lotto />
      </main>
      <Footer />
    </div>
  )
}

export default App
