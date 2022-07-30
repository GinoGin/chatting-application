
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/registerpage';
import MainPage from './components/student'
import Login  from './components/loginpage';

function App() {
  return (
    <div className="App">
        <Routes >
          <Route path="/" element={<MainPage /> } />
          <Route path="/login" element={<Login/> } />
          <Route path="register" element={<Register />} />

        </Routes>
    </div>
  );
}

export default App;
