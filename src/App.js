import './App.css';
//Import bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
//Import components
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const usuario = "admin";
const password = "123456";

function App() {

  const [autorizado, setAutorizado] = useState(false);

  let navigate = useNavigate();

  const hanleAuth = (usu, pass) => {
    if (usu === usuario && password === pass) {
      setAutorizado(true);
      navigate('/dashboard');
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login hanleAuth={hanleAuth} />}></Route>
        <Route path="/dashboard" element={<Dashboard autorizado={autorizado} />}></Route>
      </Routes>

    </div>
  );
}

export default App;

