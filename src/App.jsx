import './App.css'
import MyClock from "./02/MyClock"
import MyDiv1 from './03/MyDiv1'
import MyDiv2 from './03/MyDiv2'
import MyDiv3 from './03/MyDiv3'
import MyList from './04/MyList'
import Header from './05/Header'
import Footer from './05/Footer'
import MyToggle from './05/MyToggle'
import Lotto from './06/Lotto'
import Food from './07/Food'
import MyEffect from './08/MyEffect'
import BoxOffice from './09/BoxOffice'
import Traffic from './10/Traffic'
import MyRef from './11/MyRef'
import RefCal from './12/RefCal'
import TailButton from './Components/TailButton'
import Gallery from './13/Gallery';
import Festival from './14/Festival';
import FestivalContents from './14/FestivalContents';
import RouteMain from './15/RouteMain';
import ChargeInfo
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (//div는 노드를 생성하는 게 아니라 묶어만 줌
    //반드시 슬래쉬로 닫아야 함

    <BrowserRouter>
      <div className='bg-indigo-50 w-full h-screen flex flex-col overflow-y-hidden '>
        <Header />
        <main className='container mx-auto flex flex-col flex-grow overflow-y-auto justify-center items-center'>
          <Routes>
            <Route path='/' element={<MyClock />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/food' element={<Food />} />
            <Route path='/box' element={<BoxOffice />} />
            <Route path='/traffic' element={<Traffic />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/festival' element={<Festival />} />
            <Route path="/festival/contents" element={<FestivalContents />} />
          </Routes>
        </main>
        {/* <div>
          <Footer />
        </div> */}


      </div>
    </BrowserRouter>

  )
}

export default App
