// App.jsx
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard'; 

function App() {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/taskboard' element={<Dashboard />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
