import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
    

}

export default App
