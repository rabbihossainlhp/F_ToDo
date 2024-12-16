import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Taskboard from './components/Taskboard'
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/ReactToastify.css";
import Home from './pages/Home'


function App() {

  return(
    <>
    <ToastContainer/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/taskboard' element={<Taskboard/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
    

}

export default App
