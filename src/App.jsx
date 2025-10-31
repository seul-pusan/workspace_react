import './App.css'
import Header from './05/Header'
import Footer from './05/Footer'
import Gallery from './13/Gallery';
import Festival from './14/Festival';


function App() {

  return (//div는 노드를 생성하는 게 아니라 묶어만 줌
    //반드시 슬래쉬로 닫아야 함


     <div className='bg-indigo-50 w-full h-screen flex flex-col overflow-y-hidden'>
      <Header />
      <main  className='container mx-auto flex flex-col flex-grow overflow-y-auto'>
        <Festival />
     </main>
    
     
    </div>


  )
}

export default App
