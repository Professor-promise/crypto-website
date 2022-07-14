import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='signin' element={<SigninPage />}></Route>
    </Routes>
  );
}

export default App;
